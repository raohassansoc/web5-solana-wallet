
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from '../assets/Avatar-Image.png'
//components
import MainHeader from "../components/mainheader";
import RadioTabs from "../components/radiotabs";
import BalanceCard from "../components/balanceCard";
import TransactionButtons from "../components/transactionButtons";
import Header from "../components/Header";
import LoaderModal from "../components/LoaderModal";

import Link from "next/link";

const MainHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <LoaderModal isOpen={isLoading} />
      <Header />
      <main className="p-[0px] md:p-[30px] bg-transparent  min-h-screen">
        <div className="container w-full md:w-[80%]">
          <MainHeader />
          {/* Profile Section */}
          <div className="profile-section ">
            <div className="profile">
              <Image src={profile} alt="Profile Picture" />
              <span className="profile-name">Hi, Alex 👋</span>
            </div>
            <Link href={'/'} >

              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M9.35395 23C10.0591 23.6224 10.9853 24 11.9998 24C13.0142 24 13.9405 23.6224 14.6456 23M17.9998 10C17.9998 8.4087 17.3676 6.88258 16.2424 5.75736C15.1172 4.63214 13.5911 4 11.9998 4C10.4085 4 8.88235 4.63214 7.75713 5.75736C6.63192 6.88258 5.99977 8.4087 5.99977 10C5.99977 13.0902 5.22024 15.206 4.34944 16.6054C3.6149 17.7859 3.24763 18.3761 3.2611 18.5408C3.27601 18.7231 3.31463 18.7926 3.46155 18.9016C3.59423 19 4.19237 19 5.38863 19H18.6109C19.8072 19 20.4053 19 20.538 18.9016C20.6849 18.7926 20.7235 18.7231 20.7384 18.5408C20.7519 18.3761 20.3846 17.7859 19.6501 16.6054C18.7793 15.206 17.9998 13.0902 17.9998 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="19" cy="7" r="6" fill="#1777FF" stroke="white" stroke-width="2" />
              </svg>
            </Link>
          </div>
          <div className="center md:w-[45%] w-[100%] ">
            {/* Balance Section */}
            <BalanceCard />
            {/* Navigation */}
            <TransactionButtons />
          </div>
          {/* RadioList */}
          <RadioTabs />
        </div>
      </main>
    </>
  );
};

export default MainHome;
