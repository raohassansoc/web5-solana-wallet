import React from "react";
import arrowDown from "../assets/arrowDown.png";
import Image from "next/image";

const DownloadBnt = ({ title }) => {
  return (
    <div className="inputContainer flex w-full items-center mt-1 p-4">
      <div className="btn-download mt-2 text-white">
        {title}
        <Image src={arrowDown} />
      </div>
    </div>
  );
};

export default DownloadBnt;
