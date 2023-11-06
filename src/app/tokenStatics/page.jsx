

import Image from "next/image";
import profile from '../assets/Avatar-Image.png'
//components
import Header from "../components/Header";
import MainHeader from "../components/mainheader";
import TokenInfo from "../components/tokeninfo";

const page = ({ searchParams }) => {
  const data = JSON.parse(searchParams?.data);
  return (
    <>
    <Header />
      <main className="p-[0px] md:p-[30px] bg-transparent md:bg-[#3B3795] min-h-screen">
        <div className="container w-full md:w-[80%]">
          <MainHeader />
          <TokenInfo data={data} address={data.address}  balance={data.balance}/>
        </div>
      </main>
    </>
  );
};

export default page;
