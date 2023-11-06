"use client"
import React, { useState } from 'react';

function Withdraw() {
    const [amount, setAmount] = useState(0.03852);
    const [destinationAddress, setDestinationAddress] = useState('jK2L8I5jF95NH94hJK49N02hBQl5I9An5sI');

    return (

        <>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="withdrawInput w-full  px-3 py-4 text-xl font-bold text-black border rounded-md"
                />
                <div className="flex justify-between mt-2 text-gray-600">
                    <span className='flex rounded-lg bg-[#3c37951a] p-2'>
                        <svg style={{ marginTop: '0px', padding: '1px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99998 1.3335C4.31798 1.3335 1.33331 4.31816 1.33331 8.00016C1.33331 11.6822 4.31798 14.6668 7.99998 14.6668C11.682 14.6668 14.6666 11.6822 14.6666 8.00016C14.6666 4.31816 11.682 1.3335 7.99998 1.3335ZM8.01333 11.6668C7.64533 11.6668 7.34324 11.3682 7.34324 11.0002C7.34324 10.6322 7.63865 10.3335 8.00665 10.3335H8.01333C8.38199 10.3335 8.67999 10.6322 8.67999 11.0002C8.67999 11.3682 8.38133 11.6668 8.01333 11.6668ZM9.06866 8.35221C8.58133 8.67888 8.4906 8.86085 8.47394 8.90885C8.40394 9.11752 8.20931 9.24951 7.99998 9.24951C7.94731 9.24951 7.89395 9.24147 7.84129 9.22347C7.57929 9.13547 7.43869 8.85217 7.52602 8.59017C7.64669 8.23017 7.95937 7.89083 8.51137 7.52083C9.19204 7.06483 9.10465 6.56488 9.07599 6.40088C9.00066 5.96488 8.6333 5.59342 8.20196 5.51742C7.87396 5.45742 7.55338 5.54342 7.30271 5.75342C7.05071 5.96475 6.9059 6.2761 6.9059 6.60677C6.9059 6.88277 6.6819 7.10677 6.4059 7.10677C6.1299 7.10677 5.9059 6.88277 5.9059 6.60677C5.9059 5.97944 6.18064 5.38947 6.65997 4.98747C7.13464 4.59013 7.75929 4.4242 8.37596 4.53353C9.22062 4.68286 9.91336 5.38081 10.0607 6.23014C10.2074 7.07148 9.85466 7.82555 9.06866 8.35221Z" fill="#3B3795" />
                        </svg> <span className='text-xs'>-$847.03</span></span>
                    <span className='text-sm text-black p-1 mt-1'><span className='font-bold text-gray-500'>Available Balance:</span> 12 ETH</span>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="network">Network</label>
                <select id="network" className="w-full px-3 py-3 text-black font-semibold text-sm  bg-gray-100  rounded-xl">
                    <option>Solana Smart Chain (BP20)</option>
                    {/* Add other networks here */}
                </select>
            </div>

            <div className="mb-4 p-2 border-l-4 border-red-500 bg-red-50 rounded-md">
                <p className=" text-red-600 flex text-xs">
                    <svg style={{ marginTop: '-10px', padding: '2px' }} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99998 1.3335C4.31798 1.3335 1.33331 4.31816 1.33331 8.00016C1.33331 11.6822 4.31798 14.6668 7.99998 14.6668C11.682 14.6668 14.6666 11.6822 14.6666 8.00016C14.6666 4.31816 11.682 1.3335 7.99998 1.3335ZM7.49998 5.00016C7.49998 4.72416 7.72398 4.50016 7.99998 4.50016C8.27598 4.50016 8.49998 4.72416 8.49998 5.00016V8.04753C8.49998 8.32353 8.27598 8.54753 7.99998 8.54753C7.72398 8.54753 7.49998 8.32353 7.49998 8.04753V5.00016ZM8.01333 11.0002C7.64533 11.0002 7.34324 10.7015 7.34324 10.3335C7.34324 9.9655 7.63865 9.66683 8.00665 9.66683H8.01333C8.38199 9.66683 8.67999 9.9655 8.67999 10.3335C8.67999 10.7015 8.38133 11.0002 8.01333 11.0002Z" fill="#F57702" />
                    </svg>
                    The network you have selected is BSC. Please ensure that the withdrawal address supports the Rijex Exchange network. You will lose your assets if the chosen platform does not support retrievals.
                </p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="address">Destination Address</label>
                <input
                    type="text"
                    id="address"
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                    className="w-full px-3 py-3 text-black font-semibold text-sm bg-gray-100  rounded-xl"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="sendFrom">Send From</label>
                <select id="sendFrom" className="w-full px-3 py-3 text-black font-semibold text-sm bg-gray-100  rounded-xl">
                    <option>Spot & Funding Wallet</option>
                    {/* Add other wallets here */}
                </select>
            </div>
            <div className="mb-4">
                <p className='flex text-xs'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99998 1.3335C4.31798 1.3335 1.33331 4.31816 1.33331 8.00016C1.33331 11.6822 4.31798 14.6668 7.99998 14.6668C11.682 14.6668 14.6666 11.6822 14.6666 8.00016C14.6666 4.31816 11.682 1.3335 7.99998 1.3335ZM7.49998 5.00016C7.49998 4.72416 7.72398 4.50016 7.99998 4.50016C8.27598 4.50016 8.49998 4.72416 8.49998 5.00016V8.04753C8.49998 8.32353 8.27598 8.54753 7.99998 8.54753C7.72398 8.54753 7.49998 8.32353 7.49998 8.04753V5.00016ZM8.01333 11.0002C7.64533 11.0002 7.34324 10.7015 7.34324 10.3335C7.34324 9.9655 7.63865 9.66683 8.00665 9.66683H8.01333C8.38199 9.66683 8.67999 9.9655 8.67999 10.3335C8.67999 10.7015 8.38133 11.0002 8.01333 11.0002Z" fill="#8D8D8D" />
                    </svg>
                    <span className='text-gray-700'>
                        Transaction fee for this would be <b>0.00031 ETH</b>
                    </span>
                </p>
            </div>
            <div className='mb-4'>
                <button className=" flex-grow collorButton mt-2 md:mt-0 md:flex-grow-0 py-2 px-4 w-full border-2 rounded-full md:ml-2 text-white hover:bg-transparent transition border-[#3b3795] ease-in-out duration-200">
                    Withdraw
                </button>
            </div>


        </>
    );
}

export default Withdraw;
