"use client"
import TokenGraph from "./tokengraph";
import Link from "next/link";
import Image from "next/image";
import TokenImg from '../assets/R.png'
import { useRouter } from 'next/navigation';
function TokenInfo({address, balance , data}) {
    const router = useRouter();
    const navigate = (path, data) => {
        const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}`;
        router.push(`${path}${queryString}`);
    };
    return (
        <div>
            {/* shadow-md */}
    <div className="flex flex-col md:flex-row w-full bg-white p-6 rounded-lg">
            
        {/* Bitcoin Section */}
        <div className="flex-1 md:pr-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Link href={'/mainHome'} > <button className="text-xl">&#x2190;</button></Link> 
                    <h1 className="text-xl font-bold">{address ? address.substring(0, 9)+'****' : ''}</h1>
                </div>
                <button className="text-yellow-500">&#x2605;</button>
            </div>

            <div className="flex items-center space-x-3 mb-4">
                <div className="flex flex-col items-center space-y-1">
                    <Image 
                        src={TokenImg} 
                        alt="Bitcoin symbol" 
                        className="w-12 h-12 object-cover rounded-full"
                    />
                    {/* <span className="text-sm text-gray-500 uppercase">BTC</span> */}
                </div>
                <div>
                    <p className="text-2xl font-bold">{balance}</p>
                    <p className="text-sm text-gray-500">~0.051296032 BTC</p>
                </div>
                <span className="ml-auto bg-green-500 text-white rounded-full px-3 py-1">+10.5%</span>
            </div>
        </div>
        
        {/* Statics Section */}
        <div className="flex-1 md:pl-6 mt-4 md:mt-0 border-t md:border-t-0 md:border-l pt-4">
            <div className=" bg-gray-50 p-5 rounded-3xl">
            <h2 className="text-xl font-bold mb-3">Statics</h2>
            <ul className="space-y-2">
                {[
                    { label: "Current Price", value: "44,826,12 $" },
                    { label: "Market Cap", value: "836,819 $" },
                    { label: "Volume 24h", value: "35,867 $" },
                    { label: "Available Supply", value: "18,784" }
                ].map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.label}</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
            </div>
        </div>

    </div>
        {/* Graph Section */}
        <div className="flex flex-col md:flex-row w-full bg-white rounded-lg">
                <div className=" flex-grow md:flex-grow-0  w-full ">
                    <TokenGraph />
                </div>
                <div className=" flex-grow md:flex-grow-0  w-full ">
                </div>
        </div>



        <div className="flex flex-col md:flex-row w-full bg-white p-6 rounded-lg">
            {/* Set Alerts Button */}
            <button className=" flex-grow md:flex-grow-0 py-2 px-4 border-2 w-full rounded-full md:mr-2 text-[#3b3795] hover:text-white bg-white hover:bg-[#3b3795] transition ease-in-out duration-200">
            <Link href={'/mainHome'}> Set Alerts</Link>
            </button>

            {/* Add Transaction Button */}
          <button onClick={()=>{navigate('/sendTokens',data)}} className=" flex-grow collorButton mt-2 md:mt-0 md:flex-grow-0 py-2 px-4 w-full border-2 rounded-full md:ml-2 text-white hover:bg-transparent transition border-[#3b3795] ease-in-out duration-200">
            Add Transaction
            </button>
        </div>

        </div>
    );
}

export default TokenInfo;
