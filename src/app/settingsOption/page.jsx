

"use client"
import React,{useEffect, useState} from "react";
//component
import Header from "../components/Header";
import MainHeader from "../components/mainheader";
import Withdraw from "../components/withdraw";

import { useAuth } from "../AuthContext";
import { useRouter } from 'next/navigation';

import Link from "next/link";
const page = () => {

    const auth = useAuth();                
    const router = useRouter();
    
    useEffect(()=>{
        if(auth?.mainAccount == null){
            router.push(`/`)
        }
    })
    
    const handleCopyToClipboard = () => {
        let key = auth.mainAccount.privateKey || auth.mainAccount.secretKey
        navigator.clipboard.writeText(key);
        alert('Wallet address copied to clipboard!');
    };

    return (
        <>
            <Header />
            <main className="p-[0px] md:p-[30px] bg-transparent md:bg-[#3B3795] min-h-screen">
                <div className="container w-full md:w-[80%] ">
                    <MainHeader />
                    <div className="container  ">
                        <div className="flex items-center mt-4">
                         <Link href={'/settings'} > <button className="text-black mr-4">
                                &larr;
                            </button></Link> 
                            <h1 className="text-xl font-bold">Settings</h1>
                        </div>
                        {/* flex flex-col md:flex-row w-fullp-6 rounded-lg */}
                        <div className="mt-10">
                            <div className="mb-4 px-4 py-3 font-semibold rounded-lg bg-gray-100 text-gray-400 flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.913 16.9998H20.087M12.913 16.9998L11 20.9998M12.913 16.9998L15.7783 11.0088C16.0092 10.5261 16.1246 10.2847 16.2826 10.2084C16.4199 10.1421 16.5801 10.1421 16.7174 10.2084C16.8754 10.2847 16.9908 10.5261 17.2217 11.0088L20.087 16.9998M20.087 16.9998L22 20.9998" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.8844M10 14C9.38747 13.7248 8.76265 13.3421 8.16555 12.8844M8.16555 12.8844C6.81302 11.8478 5.60276 10.4266 5 9M8.16555 12.8844C6.56086 15.0229 4.47143 16.7718 2 18" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="left p-1">Language</span>
                                {/* <span className="text-black text-lg flex">
                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                                <g clip-path="url(#clip0_259_5965)">
                                    <rect width="21" height="15" transform="translate(0 0.5)" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H9V7.5H0V0.5Z" fill="#1A47B8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5V1.5H21V0.5H9ZM9 2.5V3.5H21V2.5H9ZM9 4.5V5.5H21V4.5H9ZM9 6.5V7.5H21V6.5H9ZM0 8.5V9.5H21V8.5H0ZM0 10.5V11.5H21V10.5H0ZM0 12.5V13.5H21V12.5H0ZM0 14.5V15.5H21V14.5H0Z" fill="#F93939"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5V2.5H2V1.5H1ZM3 1.5V2.5H4V1.5H3ZM5 1.5V2.5H6V1.5H5ZM7 1.5V2.5H8V1.5H7ZM6 2.5V3.5H7V2.5H6ZM4 2.5V3.5H5V2.5H4ZM2 2.5V3.5H3V2.5H2ZM1 3.5V4.5H2V3.5H1ZM3 3.5V4.5H4V3.5H3ZM5 3.5V4.5H6V3.5H5ZM7 3.5V4.5H8V3.5H7ZM1 5.5V6.5H2V5.5H1ZM3 5.5V6.5H4V5.5H3ZM5 5.5V6.5H6V5.5H5ZM7 5.5V6.5H8V5.5H7ZM6 4.5V5.5H7V4.5H6ZM4 4.5V5.5H5V4.5H4ZM2 4.5V5.5H3V4.5H2Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_259_5965">
                                    <rect width="21" height="15" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                                </svg>
                                   <div className="mb-1 mx-1"> English (US) &gt;</div></span> */}
                            </div>
                            <div className="mb-4 px-4 py-3 font-semibold rounded-lg bg-gray-100 text-gray-400 flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 18.0356 15 17.8034 15.0257 17.6084C15.2029 16.2622 16.2622 15.2029 17.6084 15.0257C17.8034 15 18.0356 15 18.5 15H19C20.6569 15 22 13.6569 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="left p-1">Theme</span>
                                {/* <span className="text-black bg-white rounded-full p-1 text-lg flex">
                                    <div className="p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z" fill="#8D8D8D" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </div>
                                    <div className="bg-[#3B3795] p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </div>
                                </span> */}
                            </div>
                            <div className="mb-4 px-4 py-3 font-semibold rounded-lg bg-gray-100 text-gray-400 flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5" stroke="#3B3795" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="left p-1">Currency</span>
                                {/* <span className="text-black text-lg">USD &gt;</span> */}
                            </div>
                            
                            {/* <div className="cursor-pointer mb-4 px-4 py-3 font-semibold rounded-lg bg-gray-100 text-black flex justify-between items-center">
                            <img width="20" height="20" src="https://img.icons8.com/stickers/100/import.png" alt="import"/>
                                <span className="left p-1">Import Account</span>
                                <span className="text-black text-lg">&gt;</span>
                            </div> */}
                         
                            <div onClick={() => handleCopyToClipboard()} className="cursor-pointer mb-4 px-4 py-3 font-semibold rounded-lg bg-gray-100 text-black flex justify-between items-center">
                            <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/copy--v1.png" alt="copy--v1"/>
                                <span className="left p-1">Privet Key</span>
                                <span className="text-black text-lg">Copy &gt;</span>
                            </div>
                        </div>


                    </div>

                </div>
            </main>
        </>
    );
};

export default page;
