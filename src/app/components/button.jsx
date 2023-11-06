import React from "react";

import Link from "next/link";

const MyButton = ({title , href}) => {
  return (
    <Link href={href}>
      <div style={{marginTop:'-10px'}} className="inputContainer flex items-center p-4  hover:cursor-pointer">
         <div className="btn my-4 text-white">{title}</div>
      </div>
    </Link>
  );
};

export default MyButton;
