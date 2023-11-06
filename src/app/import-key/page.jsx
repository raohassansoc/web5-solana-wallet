"use client";
import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import MyButton from "../components/button";
import Link from "next/link";
import Input from "../components/input";
import user_icon from "../assets/userIcon.png";
import key_icon from "../assets/keyIcon.png";
import phone_icon from "../assets/phoneIcon.png";

import { useAuth } from "../AuthContext"; 
import { importAccount } from "@/function";
import { useRouter } from "next/navigation";

const page = () => {
  const auth = useAuth();
  const router = useRouter();

  const importWithKey = async () => {
    let key = document.getElementById('key').value
   
    if(key == null || key.length !== 88){
      alert('Key Is Not Valid')
    }else{
      let response = await importAccount(key)
      auth.addMultiAccount(response);
      auth.setMain(response);
      router.push('/mainHome')
    }
  };
  return (
    <div style={{backgroundColor:'#F8F8F8'}} className="flex w-full items-center ">
    <div className="block w-6/12 sideImage">
      <Image src={woman_img} alt="woman image" className="h-full" />
    </div>

    <div className="block w-6/12 px-16">
      <div className="rounded-3xl bg-white p-6 flex justify-center">
        <div className="px-18 py-5 centar formContainer">
          <Image src={logo_white} alt="logo" className="logo my-8" />
         
          
          <h2 className="welcome-text mt-12 ">Import Account Using Key</h2>
            <h4 className="">88 Characters Key</h4>

            <div className="bg-white p-1 rounded-lg max-w-[350px]">

              <div className="relative mt-2  w-full text-gray-500 border-b-2 border-[#3b3795]">
                <input
                  type="password"
                  placeholder=""
                  id="key"
                  className="w-full  pr-3 py-2 appearance-none bg-transparent outline-none  focus:border-slate-600 shadow-sm rounded-lg"
                />
              </div>
            <p className="mt-1">Enter your Secret Key to continue</p>
            </div>

              <div onClick={importWithKey} className="inputContainer flex items-center mt-1 p-4  hover:cursor-pointer">
                <div className="btn my-4 text-white">Import Account</div>
              </div>

              <div className="inputContainer flex items-center justify-center px-2">
              <span className="SignUpLastText">
                Import Wallet Using
               <Link href={'/import-mnemonic'}> <span className="text-[#3c3896]"> Mnemonic </span> </Link>
              </span>
            </div>

        </div>
      </div>
    </div>
  </div>

 
  );
};

export default page;
