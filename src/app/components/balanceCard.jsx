
"use client"
import React,{useEffect, useState} from "react";
import { useAuth } from "../AuthContext";
import { getBalance , copyToClipboard , createNewAccount } from "@/function";
import { useRouter } from 'next/navigation';

const BalanceCard = () => {
    const auth = useAuth();
    const router = useRouter();

    const [address, setAddress] = useState();
    const [walletBalance, setWalletBalance] = useState();


    const navigate = (path, data) => {
        const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}`;
        router.push(`${path}${queryString}`);
    };


    useEffect(()=>{
        if(auth?.mainAccount == null){
            router.push(`/`)
        }
    })

    async function addNewAccount(){
        let response = await createNewAccount();
        auth.setMain(response);
        auth.addMultiAccount(response);
    }

    async function getbls(address){
        let balance = await getBalance(address);
        setWalletBalance(Number(balance?.balance));
    }

    useEffect(() => {
        setAddress(auth?.mainAccount);
        getbls(auth?.mainAccount?.publicKey);
        const intervalId = setInterval(() => {
            getbls(auth?.mainAccount?.publicKey);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [auth?.mainAccount]);
    
    
    return (
        <>
            <div className="balance-section" style={{background: `linear-gradient(to bottom, #4FC3F7, #1565C0)`}}>
                <div className="balance-title">Current Balance</div>
                <div className="balance-amount">{walletBalance} SOL</div>
                <div>{auth ? auth?.mainAccount?.publicKey.substring(0, 9)+'****' : ''}</div>
                <div className="icons">
                    <svg  onClick={()=> {addNewAccount()}}  style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                        <path d="M20.3215 13.3335V26.6668M13.6548 20.0002H26.9881M36.9881 20.0002C36.9881 29.2049 29.5262 36.6668 20.3215 36.6668C11.1167 36.6668 3.65479 29.2049 3.65479 20.0002C3.65479 10.7954 11.1167 3.3335 20.3215 3.3335C29.5262 3.3335 36.9881 10.7954 36.9881 20.0002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <br /><br /><br /><br /><br /><br /><br />
                    <svg onClick={()=> {copyToClipboard(auth?.mainAccount?.publicKey)}} style={{ marginTop: '-117px' ,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M18.6963 21.75H9.94629C7.76929 21.75 6.57129 20.552 6.57129 18.375V9.625C6.57129 7.448 7.76929 6.25 9.94629 6.25H18.6963C20.8733 6.25 22.0713 7.448 22.0713 9.625V18.375C22.0713 20.552 20.8733 21.75 18.6963 21.75ZM9.94629 7.75C8.61429 7.75 8.07129 8.293 8.07129 9.625V18.375C8.07129 19.707 8.61429 20.25 9.94629 20.25H18.6963C20.0283 20.25 20.5713 19.707 20.5713 18.375V9.625C20.5713 8.293 20.0283 7.75 18.6963 7.75H9.94629ZM4.07129 15V5.625C4.07129 4.293 4.61429 3.75 5.94629 3.75H15.3213C15.7353 3.75 16.0713 3.414 16.0713 3C16.0713 2.586 15.7353 2.25 15.3213 2.25H5.94629C3.76929 2.25 2.57129 3.448 2.57129 5.625V15C2.57129 15.414 2.90729 15.75 3.32129 15.75C3.73529 15.75 4.07129 15.414 4.07129 15Z" fill="white" />
                    </svg>
                </div>
            </div>

        </>
    );
};

export default BalanceCard;
