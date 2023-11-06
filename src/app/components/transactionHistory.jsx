"use client"
import React, { useState } from 'react';

function TransactionHistory() {
    const [hoveredTransaction, setHoveredTransaction] = useState(null);
    const transactions = [
        { id: 1, type: 'BTC', amount: '-$2,599', btcAmount: '0.000000986 BTC', status: 'Completed', date: '18/08/2023' },
        { id: 2, type: 'USDT', amount: '+$10,500 ', btcAmount: '0.000000986 BTC', status: 'Pending', date: '18/08/2023' },
        { id: 3, type: 'BTC', amount: '-$1,099 ', btcAmount: '0.000000986 BTC', status: 'Cancelled', date: '18/08/2023' },
        { id: 4, type: 'BTC', amount: '-$2,599 ', btcAmount: '0.000000986 BTC', status: 'Completed', date: '18/08/2023' },
        { id: 5, type: 'USDT', amount: '+$10,500 ', btcAmount: '0.000000986 BTC', status: 'Pending', date: '18/08/2023' }
    ];

    return (
        <div className="bg-white p-4 md:p-2 max-w-full md:max-w-lg">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Transactions</h2>
            <select className="border text-[#3b3795] p-2 bg-blue-100 text-blue rounded-md">
                <option>All</option>
            </select>
        </div>     
            <div className="bg-white p-4 md:p-2 max-w-full md:max-w-lg relative">
                {transactions.map(transaction => (
                    <div key={transaction.id}
                        onClick={() => setHoveredTransaction(transaction)}
                        className=" bg-gray-100 rounded-lg pb-3 mb-3 p-3 transaction-item hover:shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={transaction.img} alt={transaction.type} className="w-8 h-8 rounded-full mr-2" />
                                <div>
                                    <h3 className="text-sm font-bold">{transaction.type}</h3>
                                    <p className="text-xs text-gray-500 ">{transaction.type}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <h3 className={transaction.amount.startsWith('+') ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{transaction.amount}</h3>
                            <p className="text-xs text-gray-500 ">{transaction.btcAmount}</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <p className="text-xs text-gray-500">Status: <span  className={transaction.amount.startsWith('+') ? 'bg-red-200 font-bold p-1 rounded-md text-green' : 'bg-green-200 text-red rounded-md font-bold p-1'}>{transaction.status}</span></p>
                            <p className="text-xs text-gray-500">Date: <span className='text-black font-semibold'> {transaction.date} </span></p>
                        </div>
                    </div>
                ))}
                {hoveredTransaction && (
                    <div className="absolute shadow-inherit top-0 left-0 w-full h-full bg-gray-900 bg-opacity-0 flex justify-center items-center md:ml-40">
                        <div className="transaction-details-card bg-white p-2 rounded-xl shadow-xl">
                        <div className='text-center w-full mb-4'>
                            <h3 className='font-bold'>Transaction Details</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={hoveredTransaction.img} alt={hoveredTransaction.type} className="w-8 h-8 rounded-full mr-2" />
                                <div>
                                    <h3 className="text-sm font-bold">{hoveredTransaction.type}</h3>
                                    <p className="text-xs text-gray-500 ">BTC</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <h3 className={hoveredTransaction.amount.startsWith('+') ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{hoveredTransaction.amount}</h3>
                                <p className="text-xs text-gray-500 ">{hoveredTransaction.btcAmount}</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <p className="text-xs text-gray-500">Status: {hoveredTransaction.status}</p>
                            <p className="text-xs text-gray-500">Date: <span className='text-black font-semibold'> {hoveredTransaction.date} </span></p>
                        </div>
                          
                            <div  className="mt-4 border-t-2 ">
                            
                                <span className='flex mt-4 mb-4'>
                                <p className='text-[12px] font-semibold text-gray-500' >Sent Address:</p><span className='text-[12px] font-semibold'>JK2L8I5JF95NH94HJK49N02HBQL5I9AN5SI</span>
                                </span>
                                <span className='flex mt-5 mb-5'>
                                <p className='text-[12px] font-semibold text-gray-500'>Fee: <span className='text-black'>-$5.04</span></p>
                                <div className='right'>
                                <p className='text-[12px] font-semibold text-gray-500' >Amount: <span className='text-black'>{hoveredTransaction.amount}</span></p>
                                </div>
                                </span>
                                <span className='flex'>
                                <p className='text-[12px] font-semibold text-gray-500' >TRIX Id:</p><span className='text-[12px] font-semibold'>HK49N02HBQL5I9AN5SIJK2L8I5JF95NH94</span>
                                </span>
                            </div>
                            <button onClick={() => setHoveredTransaction(null)} className="mt-4 bg-[#3b3795] text-white w-full rounded-full px-4 py-2">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
    </div>
    );
}

export default TransactionHistory;
