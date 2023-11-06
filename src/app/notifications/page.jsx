

//component
import Header from "../components/Header";
import MainHeader from "../components/mainheader";
import NotificationsFilter from "../components/notificationFilter";
import NotificationCard from "../components/notificationCard";

import Link from "next/link";

const page = () => {

    return (
        <>
            <Header />
            <main className="p-[0px] md:p-[30px] bg-transparent md:bg-[#3B3795] min-h-screen">
                <div className="container w-full md:w-[80%] ">
                    <MainHeader />
                    <div className="container  ">
                        <div className="flex items-center mb-10 mt-4">
                            <Link href={'/mainHome'}  > <button className="text-black mr-4">
                                &larr;
                            </button></Link>
                            <h1 className="text-xl font-bold">Notifications</h1>
                        </div>
                        <NotificationsFilter />
                    </div>

                </div>
            </main>
        </>
    );
};

export default page;
