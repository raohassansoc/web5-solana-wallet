

//component
import Header from "../components/Header";
import MainHeader from "../components/mainheader";
import Withdraw from "../components/withdraw";
import Link from "next/link";

const page = () => {
    
    return (
        <>
            <Header />
            <main className="p-[0px] md:p-[30px] bg-transparent md:bg-[#3B3795] min-h-screen">
                <div className="container w-full md:w-[60%] ">
                    <MainHeader />
                    <div className="container  ">
                        <div className="flex items-center mb-10 mt-4">
                           <Link href={'/mainHome'}>
                            <button className="text-black mr-4">
                                &larr;
                            </button>
                            </Link>
                            <h1 className="text-xl font-bold">Withdraw ETH</h1>
                        </div>
                        {/* flex flex-col md:flex-row w-fullp-6 rounded-lg */}
                      <Withdraw />
                    </div>

                </div>
            </main>
        </>
    );
};

export default page;
