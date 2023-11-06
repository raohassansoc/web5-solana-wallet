

"use client"
import React, { useState, useRef , useEffect } from 'react';
import Image from "next/image";

//component
import Header from "../components/Header";
import MainHeader from "../components/mainheader";
import { useRouter } from 'next/navigation';
import TransactionHistory from "../components/transactionHistory";
import Link from 'next/link';
import { useAuth } from '../AuthContext';

const page = () => {
    const auth = useAuth();
    const router = useRouter();

    const [currentNetwork, setCurrentNetwork] = useState('Solana Smart Chain (BP20)');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const networks = ['Solana Smart Chain (BP20)', 'Ethereum', 'Bitcoin', 'Binance Smart Chain'];

    useEffect(()=>{
        if(auth?.mainAccount == null){
            router.push(`/`)
        }
    })

    const walletAddress =  auth.mainAccount?.publicKey;



    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        alert('Wallet address copied to clipboard!');
    };
    return (
        <>
            <Header />
            <main className="p-[0px] md:p-[30px] bg-transparent md:bg-[#3B3795] min-h-screen">
                <div className="container w-full md:w-[80%] ">
                    <MainHeader />
                    <div className="flex flex-col md:flex-row w-full rounded-lg ">

                        <div className="flex-1 md:pr-6">
                            <div className="p-4 md:p-6 rounded-lg max-w-sm mx-auto mt-5">
                                <div className="flex items-center mb-4">
                                <Link href={'/mainHome'} > <button className="text-xl p-2">&#x2190;</button></Link> 
                                    <h2 className="text-xl font-bold">Send & Withdraw</h2>
                                </div>
                                <p className="mb-5 text-black text-sm">
                                    <span className='font-bold'>NOTE:</span> Please transfer bitcoin or any other cryptocurrency to this wallet address only.
                                </p>

                                <div className="mb-5 relative">
                                   <div className='flex'>
                                   <label className="block text-sm  font-semibold mb-2">Network</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M7.99992 1.8335C4.31792 1.8335 1.33325 4.81816 1.33325 8.50016C1.33325 12.1822 4.31792 15.1668 7.99992 15.1668C11.6819 15.1668 14.6666 12.1822 14.6666 8.50016C14.6666 4.81816 11.6819 1.8335 7.99992 1.8335ZM8.01326 12.1668C7.64526 12.1668 7.34318 11.8682 7.34318 11.5002C7.34318 11.1322 7.63859 10.8335 8.00659 10.8335H8.01326C8.38193 10.8335 8.67993 11.1322 8.67993 11.5002C8.67993 11.8682 8.38126 12.1668 8.01326 12.1668ZM9.0686 8.85221C8.58127 9.17888 8.49054 9.36085 8.47388 9.40885C8.40388 9.61752 8.20925 9.74951 7.99992 9.74951C7.94725 9.74951 7.89389 9.74147 7.84123 9.72347C7.57923 9.63547 7.43863 9.35217 7.52596 9.09017C7.64663 8.73017 7.95931 8.39083 8.51131 8.02083C9.19198 7.56483 9.10459 7.06488 9.07593 6.90088C9.00059 6.46488 8.63324 6.09342 8.2019 6.01742C7.8739 5.95742 7.55332 6.04342 7.30265 6.25342C7.05065 6.46475 6.90584 6.7761 6.90584 7.10677C6.90584 7.38277 6.68184 7.60677 6.40584 7.60677C6.12984 7.60677 5.90584 7.38277 5.90584 7.10677C5.90584 6.47944 6.18058 5.88947 6.65991 5.48747C7.13458 5.09013 7.75923 4.9242 8.37589 5.03353C9.22056 5.18286 9.91329 5.88081 10.0606 6.73014C10.2073 7.57148 9.8546 8.32555 9.0686 8.85221Z" fill="#8D8D8D"/>
                                    </svg>
                                   </div>
                                    <div className="flex justify-between items-center bg-gray-100  px-3 py-2 rounded-xl cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                        {currentNetwork}
                                        <span>&rsaquo;</span>
                                    </div>
                                    {dropdownOpen && (
                                        <ul ref={dropdownRef} className="absolute w-full border border-t-0 rounded-b mt-2 bg-white z-10">
                                            {networks.map(network => (
                                                <li key={network} className="cursor-pointer hover:bg-gray-200 px-3 py-2" onClick={() => {
                                                    setCurrentNetwork(network);
                                                    setDropdownOpen(false);
                                                }}>
                                                    {network}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="mb-4 justify-between items-center text-center">
                                    <h3 className="text-xl font-semibold mb-3 ">Your Secure BTC Wallet Address</h3>
                                    <div className="p-5 ">
                                        {/* <img src="https://dummyimage.com/200x200/000/fff" alt="QR Code" className="mx-auto"/> */}
                                        <svg
                                            className='center'
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={251}
                                            height={251}
                                            viewBox="0 0 251 251"
                                            fill="none"
                                        >
                                            <path d="M27.0187 18H18.4551V26.5636H27.0187V18Z" fill="black" />
                                            <path d="M35.5823 18H27.0187V26.5636H35.5823V18Z" fill="black" />
                                            <path d="M44.1459 18H35.5823V26.5636H44.1459V18Z" fill="black" />
                                            <path d="M52.7095 18H44.1459V26.5636H52.7095V18Z" fill="black" />
                                            <path d="M61.273 18H52.7095V26.5636H61.273V18Z" fill="black" />
                                            <path d="M69.8366 18H61.273V26.5636H69.8366V18Z" fill="black" />
                                            <path d="M78.4002 18H69.8366V26.5636H78.4002V18Z" fill="black" />
                                            <path d="M95.5274 18H86.9638V26.5636H95.5274V18Z" fill="black" />
                                            <path d="M104.091 18H95.5274V26.5636H104.091V18Z" fill="black" />
                                            <path d="M138.345 18H129.782V26.5636H138.345V18Z" fill="black" />
                                            <path d="M164.036 18H155.473V26.5636H164.036V18Z" fill="black" />
                                            <path d="M181.163 18H172.6V26.5636H181.163V18Z" fill="black" />
                                            <path d="M189.727 18H181.163V26.5636H189.727V18Z" fill="black" />
                                            <path d="M198.291 18H189.727V26.5636H198.291V18Z" fill="black" />
                                            <path d="M206.854 18H198.291V26.5636H206.854V18Z" fill="black" />
                                            <path d="M215.418 18H206.854V26.5636H215.418V18Z" fill="black" />
                                            <path d="M223.981 18H215.418V26.5636H223.981V18Z" fill="black" />
                                            <path d="M232.545 18H223.981V26.5636H232.545V18Z" fill="black" />
                                            <path d="M27.0187 26.5636H18.4551V35.1272H27.0187V26.5636Z" fill="black" />
                                            <path
                                                d="M78.4002 26.5636H69.8366L69.8366 35.1272H78.4002V26.5636Z"
                                                fill="black"
                                            />
                                            <path d="M129.782 26.5636H121.218V35.1272H129.782V26.5636Z" fill="black" />
                                            <path d="M138.345 26.5636H129.782V35.1272H138.345V26.5636Z" fill="black" />
                                            <path d="M164.036 26.5636H155.473V35.1272H164.036V26.5636Z" fill="black" />
                                            <path d="M181.163 26.5636H172.6V35.1272H181.163V26.5636Z" fill="black" />
                                            <path d="M232.545 26.5636H223.981V35.1272H232.545V26.5636Z" fill="black" />
                                            <path d="M27.0187 35.1272H18.4551V43.6908H27.0187V35.1272Z" fill="black" />
                                            <path d="M44.1459 35.1272H35.5823V43.6908H44.1459V35.1272Z" fill="black" />
                                            <path d="M52.7095 35.1272H44.1459V43.6908H52.7095V35.1272Z" fill="black" />
                                            <path d="M61.273 35.1272H52.7095V43.6908H61.273V35.1272Z" fill="black" />
                                            <path d="M78.4002 35.1272H69.8366V43.6908H78.4002V35.1272Z" fill="black" />
                                            <path d="M104.091 35.1272H95.5274V43.6908H104.091V35.1272Z" fill="black" />
                                            <path d="M112.655 35.1272H104.091V43.6908H112.655V35.1272Z" fill="black" />
                                            <path d="M121.218 35.1272H112.655V43.6908H121.218V35.1272Z" fill="black" />
                                            <path d="M129.782 35.1272H121.218V43.6908H129.782V35.1272Z" fill="black" />
                                            <path d="M138.345 35.1272H129.782V43.6908H138.345V35.1272Z" fill="black" />
                                            <path d="M164.036 35.1272H155.473V43.6908H164.036V35.1272Z" fill="black" />
                                            <path d="M181.163 35.1272H172.6V43.6908H181.163V35.1272Z" fill="black" />
                                            <path d="M198.291 35.1272H189.727V43.6908H198.291V35.1272Z" fill="black" />
                                            <path d="M206.854 35.1272H198.291V43.6908H206.854V35.1272Z" fill="black" />
                                            <path d="M215.418 35.1272H206.854V43.6908H215.418V35.1272Z" fill="black" />
                                            <path d="M232.545 35.1272H223.981V43.6908H232.545V35.1272Z" fill="black" />
                                            <path d="M27.0187 43.6908H18.4551V52.2544H27.0187V43.6908Z" fill="black" />
                                            <path d="M44.1459 43.6908H35.5823V52.2544H44.1459V43.6908Z" fill="black" />
                                            <path d="M52.7095 43.6908H44.1459V52.2544H52.7095V43.6908Z" fill="black" />
                                            <path d="M61.273 43.6908H52.7095V52.2544H61.273V43.6908Z" fill="black" />
                                            <path d="M78.4002 43.6908H69.8366V52.2544H78.4002V43.6908Z" fill="black" />
                                            <path d="M104.091 43.6908H95.5274V52.2544H104.091V43.6908Z" fill="black" />
                                            <path d="M112.655 43.6908H104.091V52.2544H112.655V43.6908Z" fill="black" />
                                            <path d="M138.345 43.6908H129.782V52.2544H138.345V43.6908Z" fill="black" />
                                            <path d="M181.163 43.6908H172.6V52.2544H181.163V43.6908Z" fill="black" />
                                            <path d="M198.291 43.6908H189.727V52.2544H198.291V43.6908Z" fill="black" />
                                            <path d="M206.854 43.6908H198.291V52.2544H206.854V43.6908Z" fill="black" />
                                            <path d="M215.418 43.6908H206.854V52.2544H215.418V43.6908Z" fill="black" />
                                            <path d="M232.545 43.6908H223.981V52.2544H232.545V43.6908Z" fill="black" />
                                            <path d="M27.0187 52.2544H18.4551V60.818H27.0187V52.2544Z" fill="black" />
                                            <path d="M44.1459 52.2544H35.5823V60.818H44.1459V52.2544Z" fill="black" />
                                            <path d="M52.7095 52.2544H44.1459V60.818H52.7095V52.2544Z" fill="black" />
                                            <path d="M61.273 52.2544H52.7095V60.818H61.273V52.2544Z" fill="black" />
                                            <path d="M78.4002 52.2544H69.8366V60.818H78.4002V52.2544Z" fill="black" />
                                            <path d="M95.5274 52.2544H86.9638V60.818H95.5274V52.2544Z" fill="black" />
                                            <path d="M112.655 52.2544H104.091V60.818H112.655V52.2544Z" fill="black" />
                                            <path d="M121.218 52.2544H112.655V60.818H121.218V52.2544Z" fill="black" />
                                            <path d="M129.782 52.2544H121.218V60.818H129.782V52.2544Z" fill="black" />
                                            <path d="M146.909 52.2544H138.345V60.818H146.909V52.2544Z" fill="black" />
                                            <path d="M181.163 52.2544H172.6V60.818H181.163V52.2544Z" fill="black" />
                                            <path d="M198.291 52.2544H189.727V60.818H198.291V52.2544Z" fill="black" />
                                            <path d="M206.854 52.2544H198.291V60.818H206.854V52.2544Z" fill="black" />
                                            <path d="M215.418 52.2544H206.854V60.818H215.418V52.2544Z" fill="black" />
                                            <path d="M232.545 52.2544H223.981V60.818H232.545V52.2544Z" fill="black" />
                                            <path d="M27.0187 60.818H18.4551V69.3816H27.0187V60.818Z" fill="black" />
                                            <path d="M78.4002 60.818H69.8366V69.3816H78.4002V60.818Z" fill="black" />
                                            <path d="M146.909 60.818H138.345V69.3816H146.909V60.818Z" fill="black" />
                                            <path d="M181.163 60.818H172.6V69.3816H181.163V60.818Z" fill="black" />
                                            <path d="M232.545 60.818H223.981V69.3816H232.545V60.818Z" fill="black" />
                                            <path d="M27.0187 69.3816H18.4551V77.9451H27.0187V69.3816Z" fill="black" />
                                            <path
                                                d="M35.5823 69.3816L27.0187 69.3816V77.9451H35.5823V69.3816Z"
                                                fill="black"
                                            />
                                            <path d="M44.1459 69.3816H35.5823V77.9451H44.1459V69.3816Z" fill="black" />
                                            <path d="M52.7095 69.3816H44.1459V77.9451H52.7095V69.3816Z" fill="black" />
                                            <path d="M61.273 69.3816H52.7095V77.9451H61.273V69.3816Z" fill="black" />
                                            <path
                                                d="M69.8366 69.3816L61.273 69.3816V77.9451H69.8366L69.8366 69.3816Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M78.4002 69.3816H69.8366L69.8366 77.9451H78.4002V69.3816Z"
                                                fill="black"
                                            />
                                            <path d="M95.5274 69.3816H86.9638V77.9451H95.5274V69.3816Z" fill="black" />
                                            <path d="M112.655 69.3816H104.091V77.9451H112.655V69.3816Z" fill="black" />
                                            <path d="M129.782 69.3816H121.218V77.9451H129.782V69.3816Z" fill="black" />
                                            <path d="M146.909 69.3816H138.345V77.9451H146.909V69.3816Z" fill="black" />
                                            <path d="M164.036 69.3816H155.473V77.9451H164.036V69.3816Z" fill="black" />
                                            <path d="M181.163 69.3816H172.6V77.9451H181.163V69.3816Z" fill="black" />
                                            <path
                                                d="M189.727 69.3816L181.163 69.3816V77.9451H189.727V69.3816Z"
                                                fill="black"
                                            />
                                            <path d="M198.291 69.3816H189.727V77.9451H198.291V69.3816Z" fill="black" />
                                            <path d="M206.854 69.3816H198.291V77.9451H206.854V69.3816Z" fill="black" />
                                            <path d="M215.418 69.3816H206.854V77.9451H215.418V69.3816Z" fill="black" />
                                            <path
                                                d="M223.981 69.3816L215.418 69.3816V77.9451H223.981V69.3816Z"
                                                fill="black"
                                            />
                                            <path d="M232.545 69.3816H223.981V77.9451H232.545V69.3816Z" fill="black" />
                                            <path d="M95.5274 77.9451H86.9638V86.5087H95.5274V77.9451Z" fill="black" />
                                            <path d="M112.655 77.9451H104.091V86.5087H112.655V77.9451Z" fill="black" />
                                            <path d="M129.782 77.9451H121.218V86.5087H129.782V77.9451Z" fill="black" />
                                            <path d="M138.345 77.9451H129.782V86.5087H138.345V77.9451Z" fill="black" />
                                            <path
                                                d="M155.473 77.9451H146.909L146.909 86.5087H155.473V77.9451Z"
                                                fill="black"
                                            />
                                            <path d="M164.036 77.9451H155.473V86.5087H164.036V77.9451Z" fill="black" />
                                            <path d="M27.0187 86.5087H18.4551V95.0723H27.0187V86.5087Z" fill="black" />
                                            <path d="M52.7095 86.5087H44.1459V95.0723H52.7095V86.5087Z" fill="black" />
                                            <path d="M61.273 86.5087H52.7095V95.0723H61.273V86.5087Z" fill="black" />
                                            <path d="M69.8366 86.5087H61.273V95.0723H69.8366V86.5087Z" fill="black" />
                                            <path d="M78.4002 86.5087H69.8366V95.0723H78.4002V86.5087Z" fill="black" />
                                            <path d="M86.9638 86.5087H78.4002V95.0723H86.9638V86.5087Z" fill="black" />
                                            <path d="M95.5274 86.5087H86.9638V95.0723H95.5274V86.5087Z" fill="black" />
                                            <path d="M104.091 86.5087H95.5274V95.0723H104.091V86.5087Z" fill="black" />
                                            <path d="M138.345 86.5087H129.782V95.0723H138.345V86.5087Z" fill="black" />
                                            <path d="M164.036 86.5087H155.473V95.0723H164.036V86.5087Z" fill="black" />
                                            <path d="M172.6 86.5087H164.036V95.0723H172.6V86.5087Z" fill="black" />
                                            <path d="M181.163 86.5087H172.6V95.0723H181.163V86.5087Z" fill="black" />
                                            <path d="M198.291 86.5087H189.727V95.0723H198.291V86.5087Z" fill="black" />
                                            <path d="M232.545 86.5087H223.981V95.0723H232.545V86.5087Z" fill="black" />
                                            <path d="M35.5823 95.0723H27.0187V103.636H35.5823V95.0723Z" fill="black" />
                                            <path d="M52.7095 95.0723H44.1459V103.636H52.7095V95.0723Z" fill="black" />
                                            <path d="M61.273 95.0723H52.7095V103.636H61.273V95.0723Z" fill="black" />
                                            <path d="M86.9638 95.0723H78.4002V103.636H86.9638V95.0723Z" fill="black" />
                                            <path d="M95.5274 95.0723H86.9638V103.636H95.5274V95.0723Z" fill="black" />
                                            <path d="M129.782 95.0723H121.218V103.636H129.782V95.0723Z" fill="black" />
                                            <path d="M155.473 95.0723H146.909V103.636H155.473V95.0723Z" fill="black" />
                                            <path d="M172.6 95.0723H164.036V103.636H172.6V95.0723Z" fill="black" />
                                            <path d="M181.163 95.0723H172.6V103.636H181.163V95.0723Z" fill="black" />
                                            <path d="M198.291 95.0723H189.727V103.636H198.291V95.0723Z" fill="black" />
                                            <path d="M206.854 95.0723H198.291V103.636H206.854V95.0723Z" fill="black" />
                                            <path d="M215.418 95.0723H206.854V103.636H215.418V95.0723Z" fill="black" />
                                            <path d="M223.981 95.0723H215.418V103.636H223.981V95.0723Z" fill="black" />
                                            <path d="M232.545 95.0723H223.981V103.636H232.545V95.0723Z" fill="black" />
                                            <path d="M27.0187 103.636H18.4551V112.2H27.0187V103.636Z" fill="black" />
                                            <path d="M35.5823 103.636H27.0187V112.2H35.5823V103.636Z" fill="black" />
                                            <path d="M52.7095 103.636H44.1459V112.2H52.7095V103.636Z" fill="black" />
                                            <path d="M61.273 103.636H52.7095V112.2H61.273V103.636Z" fill="black" />
                                            <path d="M69.8366 103.636H61.273V112.2H69.8366V103.636Z" fill="black" />
                                            <path d="M78.4002 103.636H69.8366V112.2H78.4002V103.636Z" fill="black" />
                                            <path d="M86.9638 103.636H78.4002V112.2H86.9638V103.636Z" fill="black" />
                                            <path d="M104.091 103.636H95.5274V112.2H104.091V103.636Z" fill="black" />
                                            <path d="M121.218 103.636H112.655V112.2H121.218V103.636Z" fill="black" />
                                            <path d="M129.782 103.636H121.218V112.2H129.782V103.636Z" fill="black" />
                                            <path
                                                d="M146.909 103.636H138.345V112.2H146.909L146.909 103.636Z"
                                                fill="black"
                                            />
                                            <path d="M164.036 103.636H155.473V112.2H164.036V103.636Z" fill="black" />
                                            <path d="M172.6 103.636H164.036V112.2H172.6V103.636Z" fill="black" />
                                            <path d="M181.163 103.636H172.6V112.2H181.163V103.636Z" fill="black" />
                                            <path d="M189.727 103.636H181.163V112.2H189.727V103.636Z" fill="black" />
                                            <path d="M198.291 103.636H189.727V112.2H198.291V103.636Z" fill="black" />
                                            <path d="M206.854 103.636H198.291V112.2H206.854V103.636Z" fill="black" />
                                            <path d="M215.418 103.636H206.854V112.2H215.418V103.636Z" fill="black" />
                                            <path d="M223.981 103.636H215.418V112.2H223.981V103.636Z" fill="black" />
                                            <path d="M27.0187 112.2H18.4551V120.763H27.0187V112.2Z" fill="black" />
                                            <path d="M61.273 112.2H52.7095V120.763H61.273V112.2Z" fill="black" />
                                            <path d="M69.8366 112.2H61.273V120.763H69.8366V112.2Z" fill="black" />
                                            <path d="M86.9638 112.2H78.4002V120.763H86.9638V112.2Z" fill="black" />
                                            <path d="M104.091 112.2H95.5274V120.763H104.091V112.2Z" fill="black" />
                                            <path d="M112.655 112.2H104.091V120.763H112.655V112.2Z" fill="black" />
                                            <path d="M146.909 112.2H138.345V120.763H146.909V112.2Z" fill="black" />
                                            <path d="M155.473 112.2H146.909V120.763H155.473V112.2Z" fill="black" />
                                            <path d="M198.291 112.2H189.727V120.763H198.291V112.2Z" fill="black" />
                                            <path d="M215.418 112.2H206.854V120.763H215.418V112.2Z" fill="black" />
                                            <path d="M223.981 112.2H215.418V120.763H223.981V112.2Z" fill="black" />
                                            <path d="M27.0187 120.763H18.4551V129.327H27.0187V120.763Z" fill="black" />
                                            <path d="M52.7095 120.763H44.1459V129.327H52.7095V120.763Z" fill="black" />
                                            <path d="M61.273 120.763H52.7095V129.327H61.273V120.763Z" fill="black" />
                                            <path d="M69.8366 120.763H61.273V129.327H69.8366V120.763Z" fill="black" />
                                            <path d="M78.4002 120.763H69.8366V129.327H78.4002V120.763Z" fill="black" />
                                            <path d="M86.9638 120.763H78.4002V129.327H86.9638V120.763Z" fill="black" />
                                            <path d="M95.5274 120.763H86.9638V129.327H95.5274V120.763Z" fill="black" />
                                            <path d="M112.655 120.763H104.091V129.327H112.655V120.763Z" fill="black" />
                                            <path d="M121.218 120.763H112.655V129.327H121.218V120.763Z" fill="black" />
                                            <path d="M138.345 120.763H129.782V129.327H138.345V120.763Z" fill="black" />
                                            <path d="M146.909 120.763H138.345V129.327H146.909V120.763Z" fill="black" />
                                            <path d="M164.036 120.763H155.473V129.327H164.036V120.763Z" fill="black" />
                                            <path d="M189.727 120.763H181.163V129.327H189.727V120.763Z" fill="black" />
                                            <path d="M206.854 120.763H198.291V129.327H206.854V120.763Z" fill="black" />
                                            <path d="M215.418 120.763H206.854V129.327H215.418V120.763Z" fill="black" />
                                            <path d="M232.545 120.763H223.981V129.327H232.545V120.763Z" fill="black" />
                                            <path d="M27.0187 129.327H18.4551V137.89H27.0187V129.327Z" fill="black" />
                                            <path d="M35.5823 129.327H27.0187V137.89H35.5823V129.327Z" fill="black" />
                                            <path d="M86.9638 129.327H78.4002V137.89H86.9638V129.327Z" fill="black" />
                                            <path d="M95.5274 129.327H86.9638V137.89H95.5274V129.327Z" fill="black" />
                                            <path d="M104.091 129.327H95.5274V137.89H104.091V129.327Z" fill="black" />
                                            <path d="M129.782 129.327H121.218V137.89H129.782V129.327Z" fill="black" />
                                            <path d="M146.909 129.327H138.345V137.89H146.909V129.327Z" fill="black" />
                                            <path d="M155.473 129.327H146.909V137.89H155.473V129.327Z" fill="black" />
                                            <path d="M164.036 129.327H155.473V137.89H164.036V129.327Z" fill="black" />
                                            <path d="M172.6 129.327H164.036V137.89H172.6V129.327Z" fill="black" />
                                            <path d="M198.291 129.327H189.727V137.89H198.291V129.327Z" fill="black" />
                                            <path d="M215.418 129.327H206.854V137.89H215.418V129.327Z" fill="black" />
                                            <path d="M223.981 129.327H215.418V137.89H223.981V129.327Z" fill="black" />
                                            <path d="M232.545 129.327H223.981V137.89H232.545V129.327Z" fill="black" />
                                            <path d="M27.0187 137.89H18.4551V146.454H27.0187V137.89Z" fill="black" />
                                            <path d="M35.5823 137.89H27.0187V146.454H35.5823V137.89Z" fill="black" />
                                            <path d="M44.1459 137.89H35.5823V146.454H44.1459V137.89Z" fill="black" />
                                            <path d="M78.4002 137.89H69.8366V146.454H78.4002V137.89Z" fill="black" />
                                            <path d="M104.091 137.89H95.5274V146.454H104.091V137.89Z" fill="black" />
                                            <path d="M121.218 137.89H112.655V146.454H121.218V137.89Z" fill="black" />
                                            <path d="M129.782 137.89H121.218V146.454H129.782V137.89Z" fill="black" />
                                            <path d="M146.909 137.89H138.345V146.454H146.909V137.89Z" fill="black" />
                                            <path d="M172.6 137.89H164.036V146.454H172.6V137.89Z" fill="black" />
                                            <path d="M189.727 137.89H181.163V146.454H189.727V137.89Z" fill="black" />
                                            <path d="M198.291 137.89H189.727V146.454H198.291V137.89Z" fill="black" />
                                            <path d="M215.418 137.89H206.854V146.454H215.418V137.89Z" fill="black" />
                                            <path d="M35.5823 146.454H27.0187V155.017H35.5823V146.454Z" fill="black" />
                                            <path
                                                d="M86.9638 146.454L78.4002 146.454V155.017H86.9638V146.454Z"
                                                fill="black"
                                            />
                                            <path d="M129.782 146.454H121.218V155.017H129.782V146.454Z" fill="black" />
                                            <path d="M146.909 146.454H138.345V155.017H146.909V146.454Z" fill="black" />
                                            <path
                                                d="M155.473 146.454L146.909 146.454V155.017H155.473V146.454Z"
                                                fill="black"
                                            />
                                            <path d="M181.163 146.454H172.6V155.017H181.163V146.454Z" fill="black" />
                                            <path d="M198.291 146.454H189.727V155.017H198.291V146.454Z" fill="black" />
                                            <path
                                                d="M223.981 146.454L215.418 146.454V155.017H223.981V146.454Z"
                                                fill="black"
                                            />
                                            <path d="M27.0187 155.017H18.4551V163.581H27.0187V155.017Z" fill="black" />
                                            <path d="M69.8366 155.017H61.273V163.581H69.8366V155.017Z" fill="black" />
                                            <path d="M78.4002 155.017H69.8366V163.581H78.4002V155.017Z" fill="black" />
                                            <path d="M86.9638 155.017H78.4002V163.581H86.9638V155.017Z" fill="black" />
                                            <path d="M104.091 155.017H95.5274V163.581H104.091V155.017Z" fill="black" />
                                            <path d="M112.655 155.017H104.091V163.581H112.655V155.017Z" fill="black" />
                                            <path d="M129.782 155.017H121.218V163.581H129.782V155.017Z" fill="black" />
                                            <path
                                                d="M155.473 155.017H146.909L146.909 163.581H155.473V155.017Z"
                                                fill="black"
                                            />
                                            <path d="M164.036 155.017H155.473V163.581H164.036V155.017Z" fill="black" />
                                            <path d="M172.6 155.017H164.036V163.581H172.6V155.017Z" fill="black" />
                                            <path d="M181.163 155.017H172.6V163.581H181.163V155.017Z" fill="black" />
                                            <path d="M189.727 155.017H181.163V163.581H189.727V155.017Z" fill="black" />
                                            <path d="M198.291 155.017H189.727V163.581H198.291V155.017Z" fill="black" />
                                            <path d="M206.854 155.017H198.291V163.581H206.854V155.017Z" fill="black" />
                                            <path d="M223.981 155.017H215.418V163.581H223.981V155.017Z" fill="black" />
                                            <path d="M95.5274 163.581H86.9638V172.145H95.5274V163.581Z" fill="black" />
                                            <path d="M112.655 163.581H104.091V172.145H112.655V163.581Z" fill="black" />
                                            <path d="M129.782 163.581H121.218V172.145H129.782V163.581Z" fill="black" />
                                            <path d="M155.473 163.581H146.909V172.145H155.473V163.581Z" fill="black" />
                                            <path d="M164.036 163.581H155.473V172.145H164.036V163.581Z" fill="black" />
                                            <path d="M198.291 163.581H189.727V172.145H198.291V163.581Z" fill="black" />
                                            <path d="M206.854 163.581H198.291V172.145H206.854V163.581Z" fill="black" />
                                            <path d="M215.418 163.581H206.854V172.145H215.418V163.581Z" fill="black" />
                                            <path d="M27.0187 172.145H18.4551V180.708H27.0187V172.145Z" fill="black" />
                                            <path d="M35.5823 172.145H27.0187V180.708H35.5823V172.145Z" fill="black" />
                                            <path d="M44.1459 172.145H35.5823V180.708H44.1459V172.145Z" fill="black" />
                                            <path d="M52.7095 172.145H44.1459V180.708H52.7095V172.145Z" fill="black" />
                                            <path d="M61.273 172.145H52.7095V180.708H61.273V172.145Z" fill="black" />
                                            <path d="M69.8366 172.145H61.273V180.708H69.8366V172.145Z" fill="black" />
                                            <path d="M78.4002 172.145H69.8366V180.708H78.4002V172.145Z" fill="black" />
                                            <path d="M95.5274 172.145H86.9638V180.708H95.5274V172.145Z" fill="black" />
                                            <path d="M129.782 172.145H121.218V180.708H129.782V172.145Z" fill="black" />
                                            <path d="M155.473 172.145H146.909V180.708H155.473V172.145Z" fill="black" />
                                            <path d="M164.036 172.145H155.473V180.708H164.036V172.145Z" fill="black" />
                                            <path d="M181.163 172.145H172.6V180.708H181.163V172.145Z" fill="black" />
                                            <path d="M198.291 172.145H189.727V180.708H198.291V172.145Z" fill="black" />
                                            <path d="M206.854 172.145H198.291V180.708H206.854V172.145Z" fill="black" />
                                            <path d="M215.418 172.145H206.854V180.708H215.418V172.145Z" fill="black" />
                                            <path d="M232.545 172.145H223.981V180.708H232.545V172.145Z" fill="black" />
                                            <path d="M27.0187 180.708H18.4551V189.272H27.0187V180.708Z" fill="black" />
                                            <path
                                                d="M78.4002 180.708H69.8366L69.8366 189.272H78.4002V180.708Z"
                                                fill="black"
                                            />
                                            <path d="M95.5274 180.708H86.9638V189.272H95.5274V180.708Z" fill="black" />
                                            <path d="M112.655 180.708H104.091V189.272H112.655V180.708Z" fill="black" />
                                            <path
                                                d="M146.909 180.708H138.345V189.272H146.909L146.909 180.708Z"
                                                fill="black"
                                            />
                                            <path d="M164.036 180.708H155.473V189.272H164.036V180.708Z" fill="black" />
                                            <path d="M198.291 180.708H189.727V189.272H198.291V180.708Z" fill="black" />
                                            <path d="M215.418 180.708H206.854V189.272H215.418V180.708Z" fill="black" />
                                            <path d="M27.0187 189.272H18.4551V197.835H27.0187V189.272Z" fill="black" />
                                            <path d="M44.1459 189.272H35.5823V197.835H44.1459V189.272Z" fill="black" />
                                            <path d="M52.7095 189.272H44.1459V197.835H52.7095V189.272Z" fill="black" />
                                            <path d="M61.273 189.272H52.7095V197.835H61.273V189.272Z" fill="black" />
                                            <path d="M78.4002 189.272H69.8366V197.835H78.4002V189.272Z" fill="black" />
                                            <path d="M95.5274 189.272H86.9638V197.835H95.5274V189.272Z" fill="black" />
                                            <path d="M104.091 189.272H95.5274V197.835H104.091V189.272Z" fill="black" />
                                            <path d="M112.655 189.272H104.091V197.835H112.655V189.272Z" fill="black" />
                                            <path d="M138.345 189.272H129.782V197.835H138.345V189.272Z" fill="black" />
                                            <path d="M146.909 189.272H138.345V197.835H146.909V189.272Z" fill="black" />
                                            <path d="M164.036 189.272H155.473V197.835H164.036V189.272Z" fill="black" />
                                            <path d="M172.6 189.272H164.036V197.835H172.6V189.272Z" fill="black" />
                                            <path d="M181.163 189.272H172.6V197.835H181.163V189.272Z" fill="black" />
                                            <path d="M189.727 189.272H181.163V197.835H189.727V189.272Z" fill="black" />
                                            <path d="M198.291 189.272H189.727V197.835H198.291V189.272Z" fill="black" />
                                            <path d="M232.545 189.272H223.981V197.835H232.545V189.272Z" fill="black" />
                                            <path d="M27.0187 197.835H18.4551V206.399H27.0187V197.835Z" fill="black" />
                                            <path d="M44.1459 197.835H35.5823V206.399H44.1459V197.835Z" fill="black" />
                                            <path d="M52.7095 197.835H44.1459V206.399H52.7095V197.835Z" fill="black" />
                                            <path d="M61.273 197.835H52.7095V206.399H61.273V197.835Z" fill="black" />
                                            <path d="M78.4002 197.835H69.8366V206.399H78.4002V197.835Z" fill="black" />
                                            <path d="M95.5274 197.835H86.9638V206.399H95.5274V197.835Z" fill="black" />
                                            <path d="M129.782 197.835H121.218V206.399H129.782V197.835Z" fill="black" />
                                            <path d="M164.036 197.835H155.473V206.399H164.036V197.835Z" fill="black" />
                                            <path d="M172.6 197.835H164.036V206.399H172.6V197.835Z" fill="black" />
                                            <path d="M206.854 197.835H198.291V206.399H206.854V197.835Z" fill="black" />
                                            <path d="M27.0187 206.399H18.4551V214.963H27.0187V206.399Z" fill="black" />
                                            <path d="M44.1459 206.399H35.5823V214.963H44.1459V206.399Z" fill="black" />
                                            <path d="M52.7095 206.399H44.1459V214.963H52.7095V206.399Z" fill="black" />
                                            <path d="M61.273 206.399H52.7095V214.963H61.273V206.399Z" fill="black" />
                                            <path d="M78.4002 206.399H69.8366V214.963H78.4002V206.399Z" fill="black" />
                                            <path d="M121.218 206.399H112.655V214.963H121.218V206.399Z" fill="black" />
                                            <path d="M129.782 206.399H121.218V214.963H129.782V206.399Z" fill="black" />
                                            <path d="M146.909 206.399H138.345V214.963H146.909V206.399Z" fill="black" />
                                            <path d="M155.473 206.399H146.909V214.963H155.473V206.399Z" fill="black" />
                                            <path d="M164.036 206.399H155.473V214.963H164.036V206.399Z" fill="black" />
                                            <path d="M189.727 206.399H181.163V214.963H189.727V206.399Z" fill="black" />
                                            <path d="M198.291 206.399H189.727V214.963H198.291V206.399Z" fill="black" />
                                            <path d="M215.418 206.399H206.854V214.963H215.418V206.399Z" fill="black" />
                                            <path d="M223.981 206.399H215.418V214.963H223.981V206.399Z" fill="black" />
                                            <path d="M232.545 206.399H223.981V214.963H232.545V206.399Z" fill="black" />
                                            <path d="M27.0187 214.963H18.4551V223.526H27.0187V214.963Z" fill="black" />
                                            <path d="M78.4002 214.963H69.8366V223.526H78.4002V214.963Z" fill="black" />
                                            <path d="M104.091 214.963H95.5274V223.526H104.091V214.963Z" fill="black" />
                                            <path d="M112.655 214.963H104.091V223.526H112.655V214.963Z" fill="black" />
                                            <path d="M121.218 214.963H112.655V223.526H121.218V214.963Z" fill="black" />
                                            <path d="M138.345 214.963H129.782V223.526H138.345V214.963Z" fill="black" />
                                            <path d="M146.909 214.963H138.345V223.526H146.909V214.963Z" fill="black" />
                                            <path d="M172.6 214.963H164.036V223.526H172.6V214.963Z" fill="black" />
                                            <path d="M181.163 214.963H172.6V223.526H181.163V214.963Z" fill="black" />
                                            <path d="M189.727 214.963H181.163V223.526H189.727V214.963Z" fill="black" />
                                            <path d="M198.291 214.963H189.727V223.526H198.291V214.963Z" fill="black" />
                                            <path d="M215.418 214.963H206.854V223.526H215.418V214.963Z" fill="black" />
                                            <path d="M223.981 214.963H215.418V223.526H223.981V214.963Z" fill="black" />
                                            <path d="M232.545 214.963H223.981V223.526H232.545V214.963Z" fill="black" />
                                            <path d="M27.0187 223.526H18.4551V232.09H27.0187V223.526Z" fill="black" />
                                            <path d="M35.5823 223.526H27.0187V232.09H35.5823V223.526Z" fill="black" />
                                            <path d="M44.1459 223.526H35.5823V232.09H44.1459V223.526Z" fill="black" />
                                            <path d="M52.7095 223.526H44.1459V232.09H52.7095V223.526Z" fill="black" />
                                            <path d="M61.273 223.526H52.7095V232.09H61.273V223.526Z" fill="black" />
                                            <path
                                                d="M69.8366 223.526H61.273V232.09H69.8366L69.8366 223.526Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M78.4002 223.526H69.8366L69.8366 232.09H78.4002V223.526Z"
                                                fill="black"
                                            />
                                            <path d="M95.5274 223.526H86.9638V232.09H95.5274V223.526Z" fill="black" />
                                            <path d="M121.218 223.526H112.655V232.09H121.218V223.526Z" fill="black" />
                                            <path d="M129.782 223.526H121.218V232.09H129.782V223.526Z" fill="black" />
                                            <path d="M164.036 223.526H155.473V232.09H164.036V223.526Z" fill="black" />
                                            <path d="M206.854 223.526H198.291V232.09H206.854V223.526Z" fill="black" />
                                            <path d="M232.545 223.526H223.981V232.09H232.545V223.526Z" fill="black" />
                                            <mask
                                                id="mask0_259_5227"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={18}
                                                y={18}
                                                width={215}
                                                height={215}
                                            >
                                                <path d="M27.0187 18H18.4551V26.5636H27.0187V18Z" fill="black" />
                                                <path d="M35.5823 18H27.0187V26.5636H35.5823V18Z" fill="black" />
                                                <path d="M44.1459 18H35.5823V26.5636H44.1459V18Z" fill="black" />
                                                <path d="M52.7095 18H44.1459V26.5636H52.7095V18Z" fill="black" />
                                                <path d="M61.273 18H52.7095V26.5636H61.273V18Z" fill="black" />
                                                <path d="M69.8366 18H61.273V26.5636H69.8366V18Z" fill="black" />
                                                <path d="M78.4002 18H69.8366V26.5636H78.4002V18Z" fill="black" />
                                                <path d="M95.5274 18H86.9638V26.5636H95.5274V18Z" fill="black" />
                                                <path d="M104.091 18H95.5274V26.5636H104.091V18Z" fill="black" />
                                                <path d="M138.345 18H129.782V26.5636H138.345V18Z" fill="black" />
                                                <path d="M164.036 18H155.473V26.5636H164.036V18Z" fill="black" />
                                                <path d="M181.163 18H172.6V26.5636H181.163V18Z" fill="black" />
                                                <path d="M189.727 18H181.163V26.5636H189.727V18Z" fill="black" />
                                                <path d="M198.291 18H189.727V26.5636H198.291V18Z" fill="black" />
                                                <path d="M206.854 18H198.291V26.5636H206.854V18Z" fill="black" />
                                                <path d="M215.418 18H206.854V26.5636H215.418V18Z" fill="black" />
                                                <path d="M223.981 18H215.418V26.5636H223.981V18Z" fill="black" />
                                                <path d="M232.545 18H223.981V26.5636H232.545V18Z" fill="black" />
                                                <path d="M27.0187 26.5636H18.4551V35.1272H27.0187V26.5636Z" fill="black" />
                                                <path
                                                    d="M78.4002 26.5636H69.8366L69.8366 35.1272H78.4002V26.5636Z"
                                                    fill="black"
                                                />
                                                <path d="M129.782 26.5636H121.218V35.1272H129.782V26.5636Z" fill="black" />
                                                <path d="M138.345 26.5636H129.782V35.1272H138.345V26.5636Z" fill="black" />
                                                <path d="M164.036 26.5636H155.473V35.1272H164.036V26.5636Z" fill="black" />
                                                <path d="M181.163 26.5636H172.6V35.1272H181.163V26.5636Z" fill="black" />
                                                <path d="M232.545 26.5636H223.981V35.1272H232.545V26.5636Z" fill="black" />
                                                <path d="M27.0187 35.1272H18.4551V43.6908H27.0187V35.1272Z" fill="black" />
                                                <path d="M44.1459 35.1272H35.5823V43.6908H44.1459V35.1272Z" fill="black" />
                                                <path d="M52.7095 35.1272H44.1459V43.6908H52.7095V35.1272Z" fill="black" />
                                                <path d="M61.273 35.1272H52.7095V43.6908H61.273V35.1272Z" fill="black" />
                                                <path d="M78.4002 35.1272H69.8366V43.6908H78.4002V35.1272Z" fill="black" />
                                                <path d="M104.091 35.1272H95.5274V43.6908H104.091V35.1272Z" fill="black" />
                                                <path d="M112.655 35.1272H104.091V43.6908H112.655V35.1272Z" fill="black" />
                                                <path d="M121.218 35.1272H112.655V43.6908H121.218V35.1272Z" fill="black" />
                                                <path d="M129.782 35.1272H121.218V43.6908H129.782V35.1272Z" fill="black" />
                                                <path d="M138.345 35.1272H129.782V43.6908H138.345V35.1272Z" fill="black" />
                                                <path d="M164.036 35.1272H155.473V43.6908H164.036V35.1272Z" fill="black" />
                                                <path d="M181.163 35.1272H172.6V43.6908H181.163V35.1272Z" fill="black" />
                                                <path d="M198.291 35.1272H189.727V43.6908H198.291V35.1272Z" fill="black" />
                                                <path d="M206.854 35.1272H198.291V43.6908H206.854V35.1272Z" fill="black" />
                                                <path d="M215.418 35.1272H206.854V43.6908H215.418V35.1272Z" fill="black" />
                                                <path d="M232.545 35.1272H223.981V43.6908H232.545V35.1272Z" fill="black" />
                                                <path d="M27.0187 43.6908H18.4551V52.2544H27.0187V43.6908Z" fill="black" />
                                                <path d="M44.1459 43.6908H35.5823V52.2544H44.1459V43.6908Z" fill="black" />
                                                <path d="M52.7095 43.6908H44.1459V52.2544H52.7095V43.6908Z" fill="black" />
                                                <path d="M61.273 43.6908H52.7095V52.2544H61.273V43.6908Z" fill="black" />
                                                <path d="M78.4002 43.6908H69.8366V52.2544H78.4002V43.6908Z" fill="black" />
                                                <path d="M104.091 43.6908H95.5274V52.2544H104.091V43.6908Z" fill="black" />
                                                <path d="M112.655 43.6908H104.091V52.2544H112.655V43.6908Z" fill="black" />
                                                <path d="M138.345 43.6908H129.782V52.2544H138.345V43.6908Z" fill="black" />
                                                <path d="M181.163 43.6908H172.6V52.2544H181.163V43.6908Z" fill="black" />
                                                <path d="M198.291 43.6908H189.727V52.2544H198.291V43.6908Z" fill="black" />
                                                <path d="M206.854 43.6908H198.291V52.2544H206.854V43.6908Z" fill="black" />
                                                <path d="M215.418 43.6908H206.854V52.2544H215.418V43.6908Z" fill="black" />
                                                <path d="M232.545 43.6908H223.981V52.2544H232.545V43.6908Z" fill="black" />
                                                <path d="M27.0187 52.2544H18.4551V60.818H27.0187V52.2544Z" fill="black" />
                                                <path d="M44.1459 52.2544H35.5823V60.818H44.1459V52.2544Z" fill="black" />
                                                <path d="M52.7095 52.2544H44.1459V60.818H52.7095V52.2544Z" fill="black" />
                                                <path d="M61.273 52.2544H52.7095V60.818H61.273V52.2544Z" fill="black" />
                                                <path d="M78.4002 52.2544H69.8366V60.818H78.4002V52.2544Z" fill="black" />
                                                <path d="M95.5274 52.2544H86.9638V60.818H95.5274V52.2544Z" fill="black" />
                                                <path d="M112.655 52.2544H104.091V60.818H112.655V52.2544Z" fill="black" />
                                                <path d="M121.218 52.2544H112.655V60.818H121.218V52.2544Z" fill="black" />
                                                <path d="M129.782 52.2544H121.218V60.818H129.782V52.2544Z" fill="black" />
                                                <path d="M146.909 52.2544H138.345V60.818H146.909V52.2544Z" fill="black" />
                                                <path d="M181.163 52.2544H172.6V60.818H181.163V52.2544Z" fill="black" />
                                                <path d="M198.291 52.2544H189.727V60.818H198.291V52.2544Z" fill="black" />
                                                <path d="M206.854 52.2544H198.291V60.818H206.854V52.2544Z" fill="black" />
                                                <path d="M215.418 52.2544H206.854V60.818H215.418V52.2544Z" fill="black" />
                                                <path d="M232.545 52.2544H223.981V60.818H232.545V52.2544Z" fill="black" />
                                                <path d="M27.0187 60.818H18.4551V69.3816H27.0187V60.818Z" fill="black" />
                                                <path d="M78.4002 60.818H69.8366V69.3816H78.4002V60.818Z" fill="black" />
                                                <path d="M146.909 60.818H138.345V69.3816H146.909V60.818Z" fill="black" />
                                                <path d="M181.163 60.818H172.6V69.3816H181.163V60.818Z" fill="black" />
                                                <path d="M232.545 60.818H223.981V69.3816H232.545V60.818Z" fill="black" />
                                                <path d="M27.0187 69.3816H18.4551V77.9451H27.0187V69.3816Z" fill="black" />
                                                <path
                                                    d="M35.5823 69.3816L27.0187 69.3816V77.9451H35.5823V69.3816Z"
                                                    fill="black"
                                                />
                                                <path d="M44.1459 69.3816H35.5823V77.9451H44.1459V69.3816Z" fill="black" />
                                                <path d="M52.7095 69.3816H44.1459V77.9451H52.7095V69.3816Z" fill="black" />
                                                <path d="M61.273 69.3816H52.7095V77.9451H61.273V69.3816Z" fill="black" />
                                                <path
                                                    d="M69.8366 69.3816L61.273 69.3816V77.9451H69.8366L69.8366 69.3816Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M78.4002 69.3816H69.8366L69.8366 77.9451H78.4002V69.3816Z"
                                                    fill="black"
                                                />
                                                <path d="M95.5274 69.3816H86.9638V77.9451H95.5274V69.3816Z" fill="black" />
                                                <path d="M112.655 69.3816H104.091V77.9451H112.655V69.3816Z" fill="black" />
                                                <path d="M129.782 69.3816H121.218V77.9451H129.782V69.3816Z" fill="black" />
                                                <path d="M146.909 69.3816H138.345V77.9451H146.909V69.3816Z" fill="black" />
                                                <path d="M164.036 69.3816H155.473V77.9451H164.036V69.3816Z" fill="black" />
                                                <path d="M181.163 69.3816H172.6V77.9451H181.163V69.3816Z" fill="black" />
                                                <path
                                                    d="M189.727 69.3816L181.163 69.3816V77.9451H189.727V69.3816Z"
                                                    fill="black"
                                                />
                                                <path d="M198.291 69.3816H189.727V77.9451H198.291V69.3816Z" fill="black" />
                                                <path d="M206.854 69.3816H198.291V77.9451H206.854V69.3816Z" fill="black" />
                                                <path d="M215.418 69.3816H206.854V77.9451H215.418V69.3816Z" fill="black" />
                                                <path
                                                    d="M223.981 69.3816L215.418 69.3816V77.9451H223.981V69.3816Z"
                                                    fill="black"
                                                />
                                                <path d="M232.545 69.3816H223.981V77.9451H232.545V69.3816Z" fill="black" />
                                                <path d="M95.5274 77.9451H86.9638V86.5087H95.5274V77.9451Z" fill="black" />
                                                <path d="M112.655 77.9451H104.091V86.5087H112.655V77.9451Z" fill="black" />
                                                <path d="M129.782 77.9451H121.218V86.5087H129.782V77.9451Z" fill="black" />
                                                <path d="M138.345 77.9451H129.782V86.5087H138.345V77.9451Z" fill="black" />
                                                <path
                                                    d="M155.473 77.9451H146.909L146.909 86.5087H155.473V77.9451Z"
                                                    fill="black"
                                                />
                                                <path d="M164.036 77.9451H155.473V86.5087H164.036V77.9451Z" fill="black" />
                                                <path d="M27.0187 86.5087H18.4551V95.0723H27.0187V86.5087Z" fill="black" />
                                                <path d="M52.7095 86.5087H44.1459V95.0723H52.7095V86.5087Z" fill="black" />
                                                <path d="M61.273 86.5087H52.7095V95.0723H61.273V86.5087Z" fill="black" />
                                                <path d="M69.8366 86.5087H61.273V95.0723H69.8366V86.5087Z" fill="black" />
                                                <path d="M78.4002 86.5087H69.8366V95.0723H78.4002V86.5087Z" fill="black" />
                                                <path d="M86.9638 86.5087H78.4002V95.0723H86.9638V86.5087Z" fill="black" />
                                                <path d="M95.5274 86.5087H86.9638V95.0723H95.5274V86.5087Z" fill="black" />
                                                <path d="M104.091 86.5087H95.5274V95.0723H104.091V86.5087Z" fill="black" />
                                                <path d="M138.345 86.5087H129.782V95.0723H138.345V86.5087Z" fill="black" />
                                                <path d="M164.036 86.5087H155.473V95.0723H164.036V86.5087Z" fill="black" />
                                                <path d="M172.6 86.5087H164.036V95.0723H172.6V86.5087Z" fill="black" />
                                                <path d="M181.163 86.5087H172.6V95.0723H181.163V86.5087Z" fill="black" />
                                                <path d="M198.291 86.5087H189.727V95.0723H198.291V86.5087Z" fill="black" />
                                                <path d="M232.545 86.5087H223.981V95.0723H232.545V86.5087Z" fill="black" />
                                                <path d="M35.5823 95.0723H27.0187V103.636H35.5823V95.0723Z" fill="black" />
                                                <path d="M52.7095 95.0723H44.1459V103.636H52.7095V95.0723Z" fill="black" />
                                                <path d="M61.273 95.0723H52.7095V103.636H61.273V95.0723Z" fill="black" />
                                                <path d="M86.9638 95.0723H78.4002V103.636H86.9638V95.0723Z" fill="black" />
                                                <path d="M95.5274 95.0723H86.9638V103.636H95.5274V95.0723Z" fill="black" />
                                                <path d="M129.782 95.0723H121.218V103.636H129.782V95.0723Z" fill="black" />
                                                <path d="M155.473 95.0723H146.909V103.636H155.473V95.0723Z" fill="black" />
                                                <path d="M172.6 95.0723H164.036V103.636H172.6V95.0723Z" fill="black" />
                                                <path d="M181.163 95.0723H172.6V103.636H181.163V95.0723Z" fill="black" />
                                                <path d="M198.291 95.0723H189.727V103.636H198.291V95.0723Z" fill="black" />
                                                <path d="M206.854 95.0723H198.291V103.636H206.854V95.0723Z" fill="black" />
                                                <path d="M215.418 95.0723H206.854V103.636H215.418V95.0723Z" fill="black" />
                                                <path d="M223.981 95.0723H215.418V103.636H223.981V95.0723Z" fill="black" />
                                                <path d="M232.545 95.0723H223.981V103.636H232.545V95.0723Z" fill="black" />
                                                <path d="M27.0187 103.636H18.4551V112.2H27.0187V103.636Z" fill="black" />
                                                <path d="M35.5823 103.636H27.0187V112.2H35.5823V103.636Z" fill="black" />
                                                <path d="M52.7095 103.636H44.1459V112.2H52.7095V103.636Z" fill="black" />
                                                <path d="M61.273 103.636H52.7095V112.2H61.273V103.636Z" fill="black" />
                                                <path d="M69.8366 103.636H61.273V112.2H69.8366V103.636Z" fill="black" />
                                                <path d="M78.4002 103.636H69.8366V112.2H78.4002V103.636Z" fill="black" />
                                                <path d="M86.9638 103.636H78.4002V112.2H86.9638V103.636Z" fill="black" />
                                                <path d="M104.091 103.636H95.5274V112.2H104.091V103.636Z" fill="black" />
                                                <path d="M121.218 103.636H112.655V112.2H121.218V103.636Z" fill="black" />
                                                <path d="M129.782 103.636H121.218V112.2H129.782V103.636Z" fill="black" />
                                                <path
                                                    d="M146.909 103.636H138.345V112.2H146.909L146.909 103.636Z"
                                                    fill="black"
                                                />
                                                <path d="M164.036 103.636H155.473V112.2H164.036V103.636Z" fill="black" />
                                                <path d="M172.6 103.636H164.036V112.2H172.6V103.636Z" fill="black" />
                                                <path d="M181.163 103.636H172.6V112.2H181.163V103.636Z" fill="black" />
                                                <path d="M189.727 103.636H181.163V112.2H189.727V103.636Z" fill="black" />
                                                <path d="M198.291 103.636H189.727V112.2H198.291V103.636Z" fill="black" />
                                                <path d="M206.854 103.636H198.291V112.2H206.854V103.636Z" fill="black" />
                                                <path d="M215.418 103.636H206.854V112.2H215.418V103.636Z" fill="black" />
                                                <path d="M223.981 103.636H215.418V112.2H223.981V103.636Z" fill="black" />
                                                <path d="M27.0187 112.2H18.4551V120.763H27.0187V112.2Z" fill="black" />
                                                <path d="M61.273 112.2H52.7095V120.763H61.273V112.2Z" fill="black" />
                                                <path d="M69.8366 112.2H61.273V120.763H69.8366V112.2Z" fill="black" />
                                                <path d="M86.9638 112.2H78.4002V120.763H86.9638V112.2Z" fill="black" />
                                                <path d="M104.091 112.2H95.5274V120.763H104.091V112.2Z" fill="black" />
                                                <path d="M112.655 112.2H104.091V120.763H112.655V112.2Z" fill="black" />
                                                <path d="M146.909 112.2H138.345V120.763H146.909V112.2Z" fill="black" />
                                                <path d="M155.473 112.2H146.909V120.763H155.473V112.2Z" fill="black" />
                                                <path d="M198.291 112.2H189.727V120.763H198.291V112.2Z" fill="black" />
                                                <path d="M215.418 112.2H206.854V120.763H215.418V112.2Z" fill="black" />
                                                <path d="M223.981 112.2H215.418V120.763H223.981V112.2Z" fill="black" />
                                                <path d="M27.0187 120.763H18.4551V129.327H27.0187V120.763Z" fill="black" />
                                                <path d="M52.7095 120.763H44.1459V129.327H52.7095V120.763Z" fill="black" />
                                                <path d="M61.273 120.763H52.7095V129.327H61.273V120.763Z" fill="black" />
                                                <path d="M69.8366 120.763H61.273V129.327H69.8366V120.763Z" fill="black" />
                                                <path d="M78.4002 120.763H69.8366V129.327H78.4002V120.763Z" fill="black" />
                                                <path d="M86.9638 120.763H78.4002V129.327H86.9638V120.763Z" fill="black" />
                                                <path d="M95.5274 120.763H86.9638V129.327H95.5274V120.763Z" fill="black" />
                                                <path d="M112.655 120.763H104.091V129.327H112.655V120.763Z" fill="black" />
                                                <path d="M121.218 120.763H112.655V129.327H121.218V120.763Z" fill="black" />
                                                <path d="M138.345 120.763H129.782V129.327H138.345V120.763Z" fill="black" />
                                                <path d="M146.909 120.763H138.345V129.327H146.909V120.763Z" fill="black" />
                                                <path d="M164.036 120.763H155.473V129.327H164.036V120.763Z" fill="black" />
                                                <path d="M189.727 120.763H181.163V129.327H189.727V120.763Z" fill="black" />
                                                <path d="M206.854 120.763H198.291V129.327H206.854V120.763Z" fill="black" />
                                                <path d="M215.418 120.763H206.854V129.327H215.418V120.763Z" fill="black" />
                                                <path d="M232.545 120.763H223.981V129.327H232.545V120.763Z" fill="black" />
                                                <path d="M27.0187 129.327H18.4551V137.89H27.0187V129.327Z" fill="black" />
                                                <path d="M35.5823 129.327H27.0187V137.89H35.5823V129.327Z" fill="black" />
                                                <path d="M86.9638 129.327H78.4002V137.89H86.9638V129.327Z" fill="black" />
                                                <path d="M95.5274 129.327H86.9638V137.89H95.5274V129.327Z" fill="black" />
                                                <path d="M104.091 129.327H95.5274V137.89H104.091V129.327Z" fill="black" />
                                                <path d="M129.782 129.327H121.218V137.89H129.782V129.327Z" fill="black" />
                                                <path d="M146.909 129.327H138.345V137.89H146.909V129.327Z" fill="black" />
                                                <path d="M155.473 129.327H146.909V137.89H155.473V129.327Z" fill="black" />
                                                <path d="M164.036 129.327H155.473V137.89H164.036V129.327Z" fill="black" />
                                                <path d="M172.6 129.327H164.036V137.89H172.6V129.327Z" fill="black" />
                                                <path d="M198.291 129.327H189.727V137.89H198.291V129.327Z" fill="black" />
                                                <path d="M215.418 129.327H206.854V137.89H215.418V129.327Z" fill="black" />
                                                <path d="M223.981 129.327H215.418V137.89H223.981V129.327Z" fill="black" />
                                                <path d="M232.545 129.327H223.981V137.89H232.545V129.327Z" fill="black" />
                                                <path d="M27.0187 137.89H18.4551V146.454H27.0187V137.89Z" fill="black" />
                                                <path d="M35.5823 137.89H27.0187V146.454H35.5823V137.89Z" fill="black" />
                                                <path d="M44.1459 137.89H35.5823V146.454H44.1459V137.89Z" fill="black" />
                                                <path d="M78.4002 137.89H69.8366V146.454H78.4002V137.89Z" fill="black" />
                                                <path d="M104.091 137.89H95.5274V146.454H104.091V137.89Z" fill="black" />
                                                <path d="M121.218 137.89H112.655V146.454H121.218V137.89Z" fill="black" />
                                                <path d="M129.782 137.89H121.218V146.454H129.782V137.89Z" fill="black" />
                                                <path d="M146.909 137.89H138.345V146.454H146.909V137.89Z" fill="black" />
                                                <path d="M172.6 137.89H164.036V146.454H172.6V137.89Z" fill="black" />
                                                <path d="M189.727 137.89H181.163V146.454H189.727V137.89Z" fill="black" />
                                                <path d="M198.291 137.89H189.727V146.454H198.291V137.89Z" fill="black" />
                                                <path d="M215.418 137.89H206.854V146.454H215.418V137.89Z" fill="black" />
                                                <path d="M35.5823 146.454H27.0187V155.017H35.5823V146.454Z" fill="black" />
                                                <path
                                                    d="M86.9638 146.454L78.4002 146.454V155.017H86.9638V146.454Z"
                                                    fill="black"
                                                />
                                                <path d="M129.782 146.454H121.218V155.017H129.782V146.454Z" fill="black" />
                                                <path d="M146.909 146.454H138.345V155.017H146.909V146.454Z" fill="black" />
                                                <path
                                                    d="M155.473 146.454L146.909 146.454V155.017H155.473V146.454Z"
                                                    fill="black"
                                                />
                                                <path d="M181.163 146.454H172.6V155.017H181.163V146.454Z" fill="black" />
                                                <path d="M198.291 146.454H189.727V155.017H198.291V146.454Z" fill="black" />
                                                <path
                                                    d="M223.981 146.454L215.418 146.454V155.017H223.981V146.454Z"
                                                    fill="black"
                                                />
                                                <path d="M27.0187 155.017H18.4551V163.581H27.0187V155.017Z" fill="black" />
                                                <path d="M69.8366 155.017H61.273V163.581H69.8366V155.017Z" fill="black" />
                                                <path d="M78.4002 155.017H69.8366V163.581H78.4002V155.017Z" fill="black" />
                                                <path d="M86.9638 155.017H78.4002V163.581H86.9638V155.017Z" fill="black" />
                                                <path d="M104.091 155.017H95.5274V163.581H104.091V155.017Z" fill="black" />
                                                <path d="M112.655 155.017H104.091V163.581H112.655V155.017Z" fill="black" />
                                                <path d="M129.782 155.017H121.218V163.581H129.782V155.017Z" fill="black" />
                                                <path
                                                    d="M155.473 155.017H146.909L146.909 163.581H155.473V155.017Z"
                                                    fill="black"
                                                />
                                                <path d="M164.036 155.017H155.473V163.581H164.036V155.017Z" fill="black" />
                                                <path d="M172.6 155.017H164.036V163.581H172.6V155.017Z" fill="black" />
                                                <path d="M181.163 155.017H172.6V163.581H181.163V155.017Z" fill="black" />
                                                <path d="M189.727 155.017H181.163V163.581H189.727V155.017Z" fill="black" />
                                                <path d="M198.291 155.017H189.727V163.581H198.291V155.017Z" fill="black" />
                                                <path d="M206.854 155.017H198.291V163.581H206.854V155.017Z" fill="black" />
                                                <path d="M223.981 155.017H215.418V163.581H223.981V155.017Z" fill="black" />
                                                <path d="M95.5274 163.581H86.9638V172.145H95.5274V163.581Z" fill="black" />
                                                <path d="M112.655 163.581H104.091V172.145H112.655V163.581Z" fill="black" />
                                                <path d="M129.782 163.581H121.218V172.145H129.782V163.581Z" fill="black" />
                                                <path d="M155.473 163.581H146.909V172.145H155.473V163.581Z" fill="black" />
                                                <path d="M164.036 163.581H155.473V172.145H164.036V163.581Z" fill="black" />
                                                <path d="M198.291 163.581H189.727V172.145H198.291V163.581Z" fill="black" />
                                                <path d="M206.854 163.581H198.291V172.145H206.854V163.581Z" fill="black" />
                                                <path d="M215.418 163.581H206.854V172.145H215.418V163.581Z" fill="black" />
                                                <path d="M27.0187 172.145H18.4551V180.708H27.0187V172.145Z" fill="black" />
                                                <path d="M35.5823 172.145H27.0187V180.708H35.5823V172.145Z" fill="black" />
                                                <path d="M44.1459 172.145H35.5823V180.708H44.1459V172.145Z" fill="black" />
                                                <path d="M52.7095 172.145H44.1459V180.708H52.7095V172.145Z" fill="black" />
                                                <path d="M61.273 172.145H52.7095V180.708H61.273V172.145Z" fill="black" />
                                                <path d="M69.8366 172.145H61.273V180.708H69.8366V172.145Z" fill="black" />
                                                <path d="M78.4002 172.145H69.8366V180.708H78.4002V172.145Z" fill="black" />
                                                <path d="M95.5274 172.145H86.9638V180.708H95.5274V172.145Z" fill="black" />
                                                <path d="M129.782 172.145H121.218V180.708H129.782V172.145Z" fill="black" />
                                                <path d="M155.473 172.145H146.909V180.708H155.473V172.145Z" fill="black" />
                                                <path d="M164.036 172.145H155.473V180.708H164.036V172.145Z" fill="black" />
                                                <path d="M181.163 172.145H172.6V180.708H181.163V172.145Z" fill="black" />
                                                <path d="M198.291 172.145H189.727V180.708H198.291V172.145Z" fill="black" />
                                                <path d="M206.854 172.145H198.291V180.708H206.854V172.145Z" fill="black" />
                                                <path d="M215.418 172.145H206.854V180.708H215.418V172.145Z" fill="black" />
                                                <path d="M232.545 172.145H223.981V180.708H232.545V172.145Z" fill="black" />
                                                <path d="M27.0187 180.708H18.4551V189.272H27.0187V180.708Z" fill="black" />
                                                <path
                                                    d="M78.4002 180.708H69.8366L69.8366 189.272H78.4002V180.708Z"
                                                    fill="black"
                                                />
                                                <path d="M95.5274 180.708H86.9638V189.272H95.5274V180.708Z" fill="black" />
                                                <path d="M112.655 180.708H104.091V189.272H112.655V180.708Z" fill="black" />
                                                <path
                                                    d="M146.909 180.708H138.345V189.272H146.909L146.909 180.708Z"
                                                    fill="black"
                                                />
                                                <path d="M164.036 180.708H155.473V189.272H164.036V180.708Z" fill="black" />
                                                <path d="M198.291 180.708H189.727V189.272H198.291V180.708Z" fill="black" />
                                                <path d="M215.418 180.708H206.854V189.272H215.418V180.708Z" fill="black" />
                                                <path d="M27.0187 189.272H18.4551V197.835H27.0187V189.272Z" fill="black" />
                                                <path d="M44.1459 189.272H35.5823V197.835H44.1459V189.272Z" fill="black" />
                                                <path d="M52.7095 189.272H44.1459V197.835H52.7095V189.272Z" fill="black" />
                                                <path d="M61.273 189.272H52.7095V197.835H61.273V189.272Z" fill="black" />
                                                <path d="M78.4002 189.272H69.8366V197.835H78.4002V189.272Z" fill="black" />
                                                <path d="M95.5274 189.272H86.9638V197.835H95.5274V189.272Z" fill="black" />
                                                <path d="M104.091 189.272H95.5274V197.835H104.091V189.272Z" fill="black" />
                                                <path d="M112.655 189.272H104.091V197.835H112.655V189.272Z" fill="black" />
                                                <path d="M138.345 189.272H129.782V197.835H138.345V189.272Z" fill="black" />
                                                <path d="M146.909 189.272H138.345V197.835H146.909V189.272Z" fill="black" />
                                                <path d="M164.036 189.272H155.473V197.835H164.036V189.272Z" fill="black" />
                                                <path d="M172.6 189.272H164.036V197.835H172.6V189.272Z" fill="black" />
                                                <path d="M181.163 189.272H172.6V197.835H181.163V189.272Z" fill="black" />
                                                <path d="M189.727 189.272H181.163V197.835H189.727V189.272Z" fill="black" />
                                                <path d="M198.291 189.272H189.727V197.835H198.291V189.272Z" fill="black" />
                                                <path d="M232.545 189.272H223.981V197.835H232.545V189.272Z" fill="black" />
                                                <path d="M27.0187 197.835H18.4551V206.399H27.0187V197.835Z" fill="black" />
                                                <path d="M44.1459 197.835H35.5823V206.399H44.1459V197.835Z" fill="black" />
                                                <path d="M52.7095 197.835H44.1459V206.399H52.7095V197.835Z" fill="black" />
                                                <path d="M61.273 197.835H52.7095V206.399H61.273V197.835Z" fill="black" />
                                                <path d="M78.4002 197.835H69.8366V206.399H78.4002V197.835Z" fill="black" />
                                                <path d="M95.5274 197.835H86.9638V206.399H95.5274V197.835Z" fill="black" />
                                                <path d="M129.782 197.835H121.218V206.399H129.782V197.835Z" fill="black" />
                                                <path d="M164.036 197.835H155.473V206.399H164.036V197.835Z" fill="black" />
                                                <path d="M172.6 197.835H164.036V206.399H172.6V197.835Z" fill="black" />
                                                <path d="M206.854 197.835H198.291V206.399H206.854V197.835Z" fill="black" />
                                                <path d="M27.0187 206.399H18.4551V214.963H27.0187V206.399Z" fill="black" />
                                                <path d="M44.1459 206.399H35.5823V214.963H44.1459V206.399Z" fill="black" />
                                                <path d="M52.7095 206.399H44.1459V214.963H52.7095V206.399Z" fill="black" />
                                                <path d="M61.273 206.399H52.7095V214.963H61.273V206.399Z" fill="black" />
                                                <path d="M78.4002 206.399H69.8366V214.963H78.4002V206.399Z" fill="black" />
                                                <path d="M121.218 206.399H112.655V214.963H121.218V206.399Z" fill="black" />
                                                <path d="M129.782 206.399H121.218V214.963H129.782V206.399Z" fill="black" />
                                                <path d="M146.909 206.399H138.345V214.963H146.909V206.399Z" fill="black" />
                                                <path d="M155.473 206.399H146.909V214.963H155.473V206.399Z" fill="black" />
                                                <path d="M164.036 206.399H155.473V214.963H164.036V206.399Z" fill="black" />
                                                <path d="M189.727 206.399H181.163V214.963H189.727V206.399Z" fill="black" />
                                                <path d="M198.291 206.399H189.727V214.963H198.291V206.399Z" fill="black" />
                                                <path d="M215.418 206.399H206.854V214.963H215.418V206.399Z" fill="black" />
                                                <path d="M223.981 206.399H215.418V214.963H223.981V206.399Z" fill="black" />
                                                <path d="M232.545 206.399H223.981V214.963H232.545V206.399Z" fill="black" />
                                                <path d="M27.0187 214.963H18.4551V223.526H27.0187V214.963Z" fill="black" />
                                                <path d="M78.4002 214.963H69.8366V223.526H78.4002V214.963Z" fill="black" />
                                                <path d="M104.091 214.963H95.5274V223.526H104.091V214.963Z" fill="black" />
                                                <path d="M112.655 214.963H104.091V223.526H112.655V214.963Z" fill="black" />
                                                <path d="M121.218 214.963H112.655V223.526H121.218V214.963Z" fill="black" />
                                                <path d="M138.345 214.963H129.782V223.526H138.345V214.963Z" fill="black" />
                                                <path d="M146.909 214.963H138.345V223.526H146.909V214.963Z" fill="black" />
                                                <path d="M172.6 214.963H164.036V223.526H172.6V214.963Z" fill="black" />
                                                <path d="M181.163 214.963H172.6V223.526H181.163V214.963Z" fill="black" />
                                                <path d="M189.727 214.963H181.163V223.526H189.727V214.963Z" fill="black" />
                                                <path d="M198.291 214.963H189.727V223.526H198.291V214.963Z" fill="black" />
                                                <path d="M215.418 214.963H206.854V223.526H215.418V214.963Z" fill="black" />
                                                <path d="M223.981 214.963H215.418V223.526H223.981V214.963Z" fill="black" />
                                                <path d="M232.545 214.963H223.981V223.526H232.545V214.963Z" fill="black" />
                                                <path d="M27.0187 223.526H18.4551V232.09H27.0187V223.526Z" fill="black" />
                                                <path d="M35.5823 223.526H27.0187V232.09H35.5823V223.526Z" fill="black" />
                                                <path d="M44.1459 223.526H35.5823V232.09H44.1459V223.526Z" fill="black" />
                                                <path d="M52.7095 223.526H44.1459V232.09H52.7095V223.526Z" fill="black" />
                                                <path d="M61.273 223.526H52.7095V232.09H61.273V223.526Z" fill="black" />
                                                <path
                                                    d="M69.8366 223.526H61.273V232.09H69.8366L69.8366 223.526Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M78.4002 223.526H69.8366L69.8366 232.09H78.4002V223.526Z"
                                                    fill="black"
                                                />
                                                <path d="M95.5274 223.526H86.9638V232.09H95.5274V223.526Z" fill="black" />
                                                <path d="M121.218 223.526H112.655V232.09H121.218V223.526Z" fill="black" />
                                                <path d="M129.782 223.526H121.218V232.09H129.782V223.526Z" fill="black" />
                                                <path d="M164.036 223.526H155.473V232.09H164.036V223.526Z" fill="black" />
                                                <path d="M206.854 223.526H198.291V232.09H206.854V223.526Z" fill="black" />
                                                <path d="M232.545 223.526H223.981V232.09H232.545V223.526Z" fill="black" />
                                            </mask>
                                            <g mask="url(#mask0_259_5227)"></g>
                                            <path
                                                d="M2.45508 34V2H34.4551"
                                                stroke="#3B3795"
                                                strokeWidth={4}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M2.45508 216.09V248.09H34.4551"
                                                stroke="#3B3795"
                                                strokeWidth={4}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M248.545 34V2H216.545"
                                                stroke="#3B3795"
                                                strokeWidth={4}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M248.545 216.09V248.09H216.545"
                                                stroke="#3B3795"
                                                strokeWidth={4}
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                    </div>
                                </div>

                                        <label className="block text-md text-center font-medium mb-2">Your Wallet Address:</label>
                                <div className="flex justify-between items-center rounded-xl bg-gray-200  p-3   ">
                                    <button onClick={handleCopyToClipboard} className="text-black mt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none">
                                      <path d="M8 11.0898H6C3.23858 11.0898 1 8.85127 1 6.08984C1 3.32842 3.23858 1.08984 6 1.08984H8M14 11.0898H16C18.7614 11.0898 21 8.85127 21 6.08984C21 3.32842 18.7614 1.08984 16 1.08984H14M6 6.08984L16 6.08984" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </button>
                                    <div className='text-center' >
                                        <p className="text-sm break-all font-bold">{walletAddress ? walletAddress.substring(0, 9)+'****'+walletAddress.substring(9, 18) : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 md:pr-6">
                            <TransactionHistory />
                        </div>

                    </div>



                    {/* <div className="flex flex-col md:flex-row w-full bg-white p-6 rounded-lg">
                       
                        <button className=" flex-grow md:flex-grow-0 py-2 px-4 border-2 w-full rounded-full md:mr-2 text-[#3b3795] hover:text-white bg-white hover:bg-[#3b3795] transition ease-in-out duration-200">
                            Set Alerts
                        </button>

                   
                        <button className=" flex-grow collorButton mt-2 md:mt-0 md:flex-grow-0 py-2 px-4 w-full border-2 rounded-full md:ml-2 text-white hover:bg-transparent transition border-[#3b3795] ease-in-out duration-200">
                            Add Transaction
                        </button>
                    </div> */}
                </div>
            </main>
        </>
    );
};

export default page;
