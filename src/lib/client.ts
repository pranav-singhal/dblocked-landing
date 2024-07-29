import { createPublicClient, createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
require('dotenv').config();

let publicClient: ReturnType<typeof createPublicClient> | null = null;
let walletClient: ReturnType<typeof createWalletClient> | null = null;
let account: ReturnType<typeof privateKeyToAccount> | null = null;

export function initializeClients() {
    const rpcUrl = process.env.SEPOLIA_RPC_URL;
    const privateKey = process.env.PRIVATE_KEY;

    if (!rpcUrl) {
        throw new Error('Missing environment variable: SEPOLIA_RPC_URL');
    }
    
    if (!privateKey) {
        throw new Error('Missing environment variable: PRIVATE_KEY');
    }

    account = privateKeyToAccount(`0x${privateKey}`);

    if (!publicClient) {
        publicClient = createPublicClient({
            chain: sepolia,
            transport: http(rpcUrl),
        });
    }

    if (!walletClient) {
        walletClient = createWalletClient({
            chain: sepolia,
            transport: http(rpcUrl),
        });
    }
}

export { publicClient, walletClient, account };
