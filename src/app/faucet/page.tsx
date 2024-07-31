"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAddress } from 'viem';

const page = () => {
    const [verification, setVerification] = useState(false);
    const [userAddress, setUserAddress] = useState('');
    const [isValidAddress, setIsValidAddress] = useState(true);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [lastWithdrawalTime, setLastWithdrawalTime] = useState<bigint | null>(null);
    const [withdrawalDelay, setWithdrawalDelay] = useState<bigint | null>(null);

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
            toast.update(toastId.current, {
                render: result.message,
                isLoading: false,
                autoClose: 5000,
                type: "success",
            });
            return true;
        }

        setVerification(false);
        if (response.status === 400) {
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
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex justify-center items-center p-4">
                <div className="flex flex-col flex-grow justify-center items-center w-full p-4">
                    <Card className="shadow-lg w-full max-w-3xl">
                        <CardContent className="flex flex-col justify-between items-center p-6 bg-[#F5F5F5] text-black rounded-[3rem]">
                            <p className="text-center mb-4">Enter your address to receive free Funds</p>
                            <button
                                onClick={checkEligibility}
                                className={`font-semibold py-2 px-4 rounded-lg ${verification ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed`}
                                disabled={!isValidAddress || verification}
                            >
                                {!verification ? 'Verify Eligibility' : 'Verified ✅'}
                            </button>
                            <div className="flex flex-col w-full mt-4">
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                                    <input
                                        type="text"
                                        className={`border-2 rounded-lg p-2 w-full min-w-[245px] ${isValidAddress ? 'border-black' : 'border-red-500'}`}
                                        placeholder="Enter address"
                                        value={userAddress}
                                        onChange={handleAddressChange}
                                    />
                                    <button
                                        onClick={sendFunds}
                                        disabled={!verification}
                                        className={`font-semibold py-2 px-4 rounded-lg ${verification ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'} ${verification ? 'hover:bg-green-600' : ''}`}
                                    >
                                        Get Funds
                                    </button>
                                </div>
                                {!isValidAddress && (
                                    <p className="text-red-500 text-center mt-2">Invalid Ethereum address</p>
                                )}
                                {txHash && (
                                    <p className="text-center mt-4 break-words">
                                        Follow your transaction at <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Etherscan 🚀</a>
                                    </p>
                                )}
                                {lastWithdrawalTime !== null && !verification && withdrawalDelay !== null && (
                                    <p className="text-center mt-4">
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

export default page