import { NextResponse } from 'next/server';
import { initializeClients, publicClient } from '../../../../lib/client';
import { abi, address } from '../../../../lib/constants';

async function verify(userAddress: string) {
    try {
        initializeClients();

        if (!publicClient) {
            throw new Error('Public client is not initialized');
        }

        type CanWithdrawResult = [boolean, string, bigint];
        type WithdrawalDelayResult = bigint;

        const [canWithdrawResult, reason, lastWithdrawalTime] = await publicClient.readContract({
            address,
            abi,
            functionName: 'canWithdraw',
            args: [userAddress],
        }) as CanWithdrawResult;

        const withdrawalDelay = await publicClient.readContract({
            address,
            abi,
            functionName: 'withdrawalDelay',
            args: [],
        }) as WithdrawalDelayResult;

        const formattedLastWithdrawalTime = lastWithdrawalTime.toString();
        const formattedWithdrawalDelay = withdrawalDelay.toString();

        if (canWithdrawResult) {
            return NextResponse.json(
                { message: 'Address is allowed to withdraw', lastWithdrawalTime: formattedLastWithdrawalTime, withdrawalDelay: formattedWithdrawalDelay },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: reason, lastWithdrawalTime: formattedLastWithdrawalTime, withdrawalDelay: formattedWithdrawalDelay },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Error during verification:', error);
        return NextResponse.json({ message: 'Failed to verify address' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userAddress = body.address;

        return await verify(userAddress);
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}
