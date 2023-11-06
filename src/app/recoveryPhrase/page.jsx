"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import MyButton from "../components/button";
import { BsArrowLeftShort } from "react-icons/bs";
import OTPInput from "../components/OTPInput";
import Phrase from "../components/phrase";
import DownloadBnt from "../components/downloadBnt";
import Link from "next/link";
import arrowDown from "../assets/arrowDown.png";
import { useAuth } from "../AuthContext";
import { createAccount } from "@/function";

const Page = () => {
  const auth = useAuth();
  const [mnemonicWords, setMnemonic] = useState([]);
  const [mne, setMnec] = useState();

  const getNewAccount = async () => {
    const createNewAccount = await createAccount();
    let mnemonic = createNewAccount.mnemonic;
    setMnec(createNewAccount.mnemonic);
    const wordArray = mnemonic.split(' ');
    auth.setMain(createNewAccount);
    setMnemonic(wordArray);
    auth.mnemonic(wordArray);
  }

  const wordElements = mnemonicWords.map((word, index) => (
    <div key={index}>
      <Phrase title={word} />
    </div>
  ));


  const downloadTxtFile = () => {
    const blob = new Blob([mne], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Recovery Phrase.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    getNewAccount();
  }, []);

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
                <Link href={'/'}>
                  <BsArrowLeftShort size={40} />
                </Link>
                <h2 className="welcome-text">Recovery Phrase</h2>
              </div>
            </div>

            <div className="my-2 px-4">
              <h4 className=" font-semibold p-2 text-left text-[20px]"> Set Up Your Recovery Phrase</h4>
              <div className="flex flex-row flex-wrap mt-2 justify-center">
                {wordElements}
              </div>
           
              <div onClick={downloadTxtFile} className="inputContainer cursor-pointer flex w-full items-center mt-1 p-4">
                <div className="btn-download mt-2 text-white">
                  Download .txt
                  <Image src={arrowDown} />
                </div>
              </div>

              <MyButton href='/recoveryPhraseDetail' title="Next" />
              <div className="inputContainer flex items-center justify-center px-2">
              <span className="SignUpLastText">
                Import Account
               <Link href={'/import-key'}> <span className="text-[#3c3896]"> Key or Mnemonic </span> </Link>
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