"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from "../AuthContext";
import Link from 'next/link';
import { getTokens } from '@/function';
import { useRouter } from 'next/navigation';
import tokenImg from '../assets/R.png';
import Image from 'next/image';
const RadioTabs = () => {
    const auth = useAuth();
    const router = useRouter();

    const [selectedTab, setSelectedTab] = useState('Tokens');
    const [tokensData, setTokenData] = useState(null);
    const navigate = (path, data) => {
        const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}`;
        router.push(`${path}${queryString}`);
    };
    async function getTkns(address) {
        let Tokens = await getTokens(address);
        setTokenData(Tokens)
    }


    useEffect(() => {
        getTkns(auth?.mainAccount?.publicKey);
        const intervalId = setInterval(() => {
            getTkns(auth?.mainAccount?.publicKey);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [auth?.mainAccount]);


    useEffect(() => {
    }, [tokensData]);

    return (
        <>
            <div className="bg-white p-0 md:p-5 rounded mt-5 md:mt-0">
                <div className="cursor-pointer grid grid-cols-3 gap-4 mb-5 border-b border-gray-200">
                    {['Tokens', 'NFTs', 'Activity'].map((tab, index) => (
                        <label key={index} className={`cursor-pointer text-center py-2 px-4 ${selectedTab === tab ? 'text-[#1565C0] border-b-2 border-[#1565C0]' : 'text-gray-700'}`}>
                            <input
                                type="radio"
                                name="tabs"
                                value={tab}
                                className="hidden"
                                onChange={() => setSelectedTab(tab)}
                                checked={selectedTab === tab}
                            />
                            {tab}
                        </label>
                    ))}
                </div>


                <div className="space-y-4">
                    {selectedTab === 'Tokens' && (
                        tokensData?.map((crypto, index) => (

                            <div key={index} onClick={() => { navigate('/tokenStatics', crypto) }}
                                className={`cursor-pointer grid grid-cols-3 hover:shadow-lg gap-4 items-center p-3 rounded-l-md ${index % 2 === 1 ? 'bg-gray-50' : 'hover:shadow-lg '}`}
                            >
                                <div className="flex space-x-2">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={tokenImg}
                                            alt="Crypto symbol"
                                            className="absolute top-0 md:top-1 left-0 w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[12px] md:text-[18px] ">{crypto.address ? crypto?.address.substring(0, 9) + '****' : ''}</p>
                                        <p className="text-xs text-gray-500 uppercase">Non-Native</p>
                                    </div>
                                </div>
                                <p className="text-red-500 center text-[12px] md:text-[18px]">24,55%↓</p>
                                <p className="text-sm center text-[12px] md:text-[18px]">{crypto?.balance}</p>
                            </div>

                        ))
                    )}


                    {selectedTab === 'NFTs' && <div>NFTs content here</div>}
                    {selectedTab === 'Activity' && <div>Activity content here</div>}
                </div>
            </div>
        </>
    );
};

export default RadioTabs;
