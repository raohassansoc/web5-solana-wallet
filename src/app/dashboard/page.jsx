import React from "react";
import Header from "../components/Header";
import ResponsiveAppBar from "../components/MyNavbar";

const page = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container bg-[#3B3795] h-screen">
        <ResponsiveAppBar />
      </div>
    </>
  );
};

export default page;
