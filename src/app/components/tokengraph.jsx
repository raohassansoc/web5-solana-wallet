"use client"
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function TokenGraph () {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1h');

    // You would typically have different datasets for each time frame. 
    // Here's a dummy dataset for illustration.
    const dataSets = {
        '1h': [
            { time: '5:30', price: 10000 },
            { time: '5:35', price: 15000 },
            { time: '5:40', price: 20000 },
            { time: '5:45', price: 25000 },
            { time: '5:50', price: 23000 },
            { time: '5:55', price: 22000 },
            { time: '6:00', price: 21000 }
        ],
        '24h': [
            { time: 'Yesterday', price: 18000 },
            { time: '18h', price: 19000 },
            { time: '12h', price: 20000 },
            { time: '6h', price: 21000 },
            { time: 'Now', price: 22000 }
        ],
        '1d': [
            { time: 'Start', price: 11000 },
            { time: 'Mid', price: 13000 },
            { time: 'End', price: 15000 }
        ],
        '7d': [
            { time: 'Day 1', price: 9000 },
            { time: 'Day 4', price: 12000 },
            { time: 'Day 7', price: 18000 }
        ],
        '1m': [
            { time: 'Week 1', price: 8000 },
            { time: 'Week 2', price: 8500 },
            { time: 'Week 3', price: 9000 },
            { time: 'Week 4', price: 9500 }
        ],
        '1y': [
            { time: 'Q1', price: 6000 },
            { time: 'Q2', price: 6500 },
            { time: 'Q3', price: 7500 },
            { time: 'Q4', price: 8500 }
        ]
    }
    

    const data = dataSets[selectedTimeFrame] || [];

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-wrap justify-center mb-4 space-x-2 space-y-2">
                {['1h', '24h', '1d', '7d', '1m', '1y'].map((timeFrame) => (
                    <button
                        key={timeFrame}
                        className={`mx-1 py-1 px-3 rounded-full ${timeFrame === selectedTimeFrame ? 'bg-[#3b3795] text-white' : 'text-gray-400'}`}
                        onClick={() => setSelectedTimeFrame(timeFrame)}
                    >
                        {timeFrame}
                    </button>
                ))}
            </div>
        
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                    <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TokenGraph;
