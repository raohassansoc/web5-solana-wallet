"use client"
import React from "react";


const cryptoList = [
    {
        name: "Bitcoin",
        symbol: "BTC",
        icon: "🪙" 
    },
    {
        name: "Ripple",
        symbol: "XRP",
        icon: "🪙"
    },
    {
        name: "Tron",
        symbol: "TRX",
        icon: "🪙"
    },
    {
        name: "EOS",
        symbol: "EOS",
        icon: "🪙"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        icon: "🪙"
    }
];


const TokenFilter = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filteredCryptos, setFilteredCryptos] = React.useState(cryptoList); 
    

    function handleSearch(e) {
        setSearchTerm(e.target.value);
        const results = cryptoList.filter(crypto =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCryptos(results);
    }
  return (
<>
<div className="crypto-search-container">
    <div  className="search-bar p-4 flex items-center justify-between hover:shadow-md">
        <input type="text" placeholder="Search..." onChange={handleSearch} className="w-full p-2 rounded-md"/>
        <span className="magnifying-glass-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.5305 20.47L17.6895 16.629C18.9735 15.106 19.7505 13.143 19.7505 11C19.7505 6.175 15.8255 2.25 11.0005 2.25C6.17549 2.25 2.25049 6.175 2.25049 11C2.25049 15.825 6.17549 19.75 11.0005 19.75C13.1435 19.75 15.1065 18.973 16.6295 17.689L20.4705 21.53C20.6165 21.676 20.8085 21.75 21.0005 21.75C21.1925 21.75 21.3845 21.677 21.5305 21.53C21.8235 21.238 21.8235 20.763 21.5305 20.47ZM3.75049 11C3.75049 7.002 7.00249 3.75 11.0005 3.75C14.9985 3.75 18.2505 7.002 18.2505 11C18.2505 14.998 14.9985 18.25 11.0005 18.25C7.00249 18.25 3.75049 14.998 3.75049 11Z" fill="white"/>
        </svg>
        </span>
    </div>

    <ul className="crypto-list mt-4 ">
        {filteredCryptos.map(crypto => (
            <li key={crypto.symbol} className="hover:shadow-md cursor-pointer crypto-item p-5 flex items-center justify-between mb-4  ">
                <div className="flex items-center">
                    <span className="crypto-icon mr-4">🪙</span> 
                    <div className="">
                    <span className="crypto-symbol font-bold">{crypto.symbol}<span className="crypto-name ml-4">{crypto.name}</span></span>
                    
                    </div>
                </div>
                <span className="chevron-icon text-gray">&gt;</span>
            </li>
        ))}
    </ul>
</div>

</>
  );
};

export default TokenFilter;
