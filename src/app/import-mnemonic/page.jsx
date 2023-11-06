"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import Link from "next/link";

import { useAuth } from "../AuthContext";
import { importAccountMnemonic } from "@/function";
import { useRouter } from "next/navigation";

const Page = () => {
  const auth = useAuth();
  const router = useRouter();

  const [inputValues, setInputValues] = useState(Array(12).fill(''));

  const handleInputChange = (index) => (event) => {
    let newValues = [...inputValues];

    if (event.type === 'paste') {
      const pasteData = event.clipboardData.getData('text');
      const pasteArray = pasteData.split(' ');

      newValues = newValues.map((_, idx) => pasteArray[idx] || '');
      setInputValues(newValues);
    } else {
      newValues[index] = event.target.value;
      setInputValues(newValues);
    }
  };

  const printInputValues = async () => {
    const valuesString = inputValues.join(' ');
    const importAccount = await importAccountMnemonic(valuesString);
    auth.addMultiAccount(importAccount);
    auth.setMain(importAccount);
    router.push('/mainHome')
  };

    
const inputs = inputValues.map((value, index) => (
    <div key={index}>
      <div className="Phrase-container my-2 mx-2">
        <input
          type="text"
          placeholder="---"
          value={value}
          onChange={handleInputChange(index)}
          onPaste={handleInputChange(index)}
        />
      </div>
    </div>
  ));


  return (
    <div style={{ backgroundColor: '#F8F8F8' }} className="flex w-full items-center ">
      <div className="block w-6/12 sideImage">
        <Image src={woman_img} alt="woman image" className="h-full" />
      </div>

      <div className="block w-6/12 px-16">
        <div className="rounded-3xl bg-white p-6 flex justify-center">
          <div className="px-18 py-5 centar formContainer">
            <Image src={logo_white} alt="logo" className="logo my-8" />

            <div className=" mt-6 items-center p-5">
              <div className="flex">
                <h2 className="welcome-text">Import Wallet Using Mnemonic</h2>
              </div>
            </div>

            <div className="my-2 px-4">
              <h4 className=" font-semibold p-2 text-left text-[20px]"> Enter Your 12 Mnemonic Words</h4>
              <div className="flex flex-row flex-wrap mt-2 justify-center">
                {inputs}
              </div>
              
              {/* onClick={importWithKey}  */}
              <div onClick={printInputValues} className="inputContainer flex items-center mt-1 p-4  hover:cursor-pointer">
                <div className="btn my-4 text-white">Import Wallet</div>
              </div>

              <div className="inputContainer flex items-center justify-center px-2">
              <span className="SignUpLastText">
                Import Account Using
               <Link href={'/import-key'}> <span className="text-[#3c3896]"> Secret Key </span> </Link>
              </span>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;