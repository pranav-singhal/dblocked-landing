import { NextResponse } from 'next/server';
import { initializeClients, walletClient, publicClient, account } from '../../../../lib/client';
import { abi, address } from '../../../../lib/constants';
import { sepolia } from 'viem/chains';

async function withdraw(userAddress: string) {
    try {
        initializeClients();

        if (!walletClient || !account) {
            throw new Error('Wallet client or account is not initialized');
        }

        if(!publicClient) {
            throw new Error('Public client is not initialized');
        }

        const hash = await walletClient.writeContract({
            address,
            abi,
            functionName: 'withdraw',
            args: [userAddress],
            chain: sepolia,
            account,
        });

        const txReceipt = await publicClient!.waitForTransactionReceipt({ hash });

        return NextResponse.json({ message: 'Tokens withdrawn successfully', txHash: hash });
    } catch (error) {
        console.error('Error during withdrawal:', error);
        return NextResponse.json({ message: 'Failed to withdraw tokens' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userAddress = body.address;

        return await withdraw(userAddress);
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}
