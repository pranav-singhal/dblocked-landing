import { NextResponse } from 'next/server';
import { initializeClients } from '../../../../lib/client';
import { abi, address } from '../../../../lib/constants';
import { sepolia } from 'viem/chains';

async function withdraw(userAddress: string) {
    try {
        const { publicClient, walletClient, account } = initializeClients();

        const hash = await walletClient.writeContract({
            address,
            abi,
            functionName: 'withdraw',
            args: [userAddress],
            chain: sepolia,
            account,
        });

        const txReceipt = await publicClient!.waitForTransactionReceipt({ hash });

        return NextResponse.json(
            { message: 'Tokens withdrawn successfully', txHash: hash },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error during withdrawal:', error);
        const errorMessage = (error as { shortMessage?: string; message?: string }).shortMessage
            || (error as Error).message
            || 'Failed to send funds';

        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userAddress = body.address;

        return await withdraw(userAddress);
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { message: (error as Error).message || 'Failed to process request' },
            { status: 500 }
        );
    }
}
