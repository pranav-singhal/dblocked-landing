"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAddress } from 'viem';

const Faucet = () => {
    const [verification, setVerification] = useState(false);
    const [userAddress, setUserAddress] = useState('');
    const [isValidAddress, setIsValidAddress] = useState(true);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [lastWithdrawalTime, setLastWithdrawalTime] = useState<bigint | null>(null);
    const [withdrawalDelay, setWithdrawalDelay] = useState<bigint | null>(null);
    const [isWhitelisted, setIsWhitelisted] = useState<boolean | null>(true);

    const toastId = React.useRef<string | number | null>(null);

    const checkEligibility = async () => {
        toastId.current = toast.loading("Verifying Address...");
        const response = await fetch('/api/faucet/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: userAddress })
        });
        const result = await response.json();

        if (response.ok) {
            setVerification(true);
            setIsWhitelisted(true);
            toast.update(toastId.current, {
                render: result.message,
                isLoading: false,
                autoClose: 5000,
                type: "success",
            });
            return true;
        }

        setVerification(false);
        if (response.status === 401) {
            setIsWhitelisted(false);
        } else if (response.status === 400) {
            setLastWithdrawalTime(BigInt(result.lastWithdrawalTime));
            setWithdrawalDelay(BigInt(result.withdrawalDelay));
        } else {
            setLastWithdrawalTime(null);
            setWithdrawalDelay(null);
        }

        toast.update(toastId.current, {
            render: result.message || "Address is not verified 😢",
            isLoading: false,
            autoClose: 5000,
            type: "error",
        });
        return false;
    }

    const sendFunds = async () => {
        toastId.current = toast.loading("Sending Funds...");
        const response = await fetch('/api/faucet/withdraw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: userAddress })
        });

        const result = await response.json();

        if (response.ok) {
            const txHash = result.txHash;
            setTxHash(txHash);
            setVerification(false);
            setLastWithdrawalTime(null);
            setWithdrawalDelay(null);
            toast.update(toastId.current, {
                render: "Funds Sent Successfully! 🎉",
                isLoading: false,
                autoClose: 5000,
                type: "success",
            });
        } else if (response.status === 500) {
            toast.update(toastId.current, {
                render: result.message || "Failed to send funds 😢",
                isLoading: false,
                autoClose: 5000,
                type: "error",
            });
        }
    }

    const formatDate = (timestamp: bigint | string) => {
        const numericTimestamp: number = typeof timestamp === 'string' ? parseInt(timestamp, 16) : Number(timestamp);

        if (numericTimestamp === 0) return "Never";

        const date = new Date(numericTimestamp * 1000);
        return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleString();
    };

    const getNextWithdrawalTime = () => {
        if (lastWithdrawalTime && withdrawalDelay) {
            const nextTime = lastWithdrawalTime + withdrawalDelay;
            return formatDate(nextTime);
        }
        return "Invalid date";
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const address = e.target.value;
        setUserAddress(address);
        setIsValidAddress(isAddress(address));
        setVerification(false);
        setLastWithdrawalTime(null);
        setWithdrawalDelay(null);
        setIsWhitelisted(true);
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex grow items-center justify-center p-4">
                <div className="flex w-full grow flex-col items-center justify-center p-4">
                    <Card className="w-full max-w-3xl shadow-lg">
                        <CardContent className="flex flex-col items-center justify-between rounded-[3rem] bg-[#F5F5F5] p-6 text-black">
                            <p className="mb-4 text-center">Enter your address to receive free Funds</p>
                            <button
                                onClick={checkEligibility}
                                className={`rounded-lg px-4 py-2 font-semibold ${verification ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700`}
                                disabled={!isValidAddress || verification}
                            >
                                {!verification ? 'Verify Eligibility' : 'Verified ✅'}
                            </button>
                            <div className="mt-4 flex w-full flex-col">
                                <div className="flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    <input
                                        type="text"
                                        className={`w-full min-w-[245px] rounded-lg border-2 p-2 ${isValidAddress ? 'border-black' : 'border-red-500'}`}
                                        placeholder="Enter address"
                                        value={userAddress}
                                        onChange={handleAddressChange}
                                    />
                                    <button
                                        onClick={sendFunds}
                                        disabled={!verification}
                                        className={`rounded-lg px-4 py-2 font-semibold ${verification ? 'bg-green-500 text-white hover:bg-green-600' : 'cursor-not-allowed bg-gray-400 text-gray-700'} ${verification ? 'hover:bg-green-600' : ''}`}
                                    >
                                        Get Funds
                                    </button>
                                </div>
                                {!isValidAddress && (
                                    <p className="mt-2 text-center text-red-500">Invalid Ethereum address</p>
                                )}
                                {!isWhitelisted && (
                                    <p className="mt-2 text-center text-red-500">
                                        Join our
                                        <a href="https://discord.gg/8xHAFsCeZj" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Discord </a>
                                        to get whitelisted.
                                    </p>

                                )}
                                {txHash && (
                                    <p className="mt-4 break-words text-center">
                                        Follow your transaction at <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Etherscan 🚀</a>
                                    </p>
                                )}
                                {lastWithdrawalTime !== null && !verification && withdrawalDelay !== null && (
                                    <p className="mt-4 text-center">
                                        Next possible withdrawal time: {getNextWithdrawalTime()}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                    <ToastContainer />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Faucet;
