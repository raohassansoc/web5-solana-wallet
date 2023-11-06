"use client";
import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import MyButton from "../components/button";
import { BsArrowLeftShort } from "react-icons/bs";
import OTPInput from "../components/OTPInput";
import Link from "next/link";
const page = () => {
  return (
    // <div className="flex w-full items-center">
    //   <div className="block w-6/12 sideImage">
    //     <Image src={woman_img} alt="woman image" className="h-full" />
    //   </div>

    //   <div className="block w-6/12 px-16">
    //     <div className="box-shadow p-4 flex justify-center">
    //       <div className="px-8 formContainer">
    //         <Image src={logo_white} alt="logo" className="logo my-8" />
    //         <div className="flex mt-12 items-center">
    //         <Link href={'/signUp'}>   <BsArrowLeftShort size={40} /></Link>
    //           <h2 className="welcome-text px-4">OTP Verification</h2>
    //         </div>

    //         <div className="my-2 px-4">
    //           <h4 className=" font-semibold"> Enter OTP</h4>
    //           <div className="flex">
    //             <OTPInput />
    //             <OTPInput />
    //             <OTPInput />
    //             <OTPInput />
    //           </div>
    //           <div className="ResendCodeContainer my-4">
    //             <p className="">Resend code</p>
    //             <p className="text-red-600">02:45</p>
    //           </div>

    //           <div>
    //             <p>
    //               We texted you a code to verify your phone number
    //               <b> +1 9876543210</b>
    //             </p>
    //           </div>
    //          <MyButton href='/recoveryPhrase' title="Next" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div style={{backgroundColor:'#F8F8F8'}} className="flex w-full items-center ">
    <div className="block w-6/12 sideImage">
      <Image src={woman_img} alt="woman image" className="h-full" />
    </div>

    <div className="block w-6/12 px-16">
      <div className="rounded-3xl bg-white p-6 flex justify-center">
        <div className="px-18 py-5 centar formContainer">
          <Image src={logo_white} alt="logo" className="logo my-8" />
         
         <div className="flex mt-12 items-center">
             <Link href={'/signUp'}>   <BsArrowLeftShort size={40} /></Link>
               <h2 className="welcome-text px-4">OTP Verification</h2>
             </div>

             <div className="my-2 px-10">
               <h4 className=" font-semibold"> Enter OTP</h4>
               <div className="flex justify-center">
                 <OTPInput />
                 <OTPInput />
                 <OTPInput />
                 <OTPInput />
               </div>
               <div className="ResendCodeContainer my-4">
                 <p className="">Resend code</p>
                 <p className="text-red-600">02:45</p>
               </div>

               <div>
                 <p>
                   We texted you a code to verify your phone number
                   <b> +1 9876543210</b>
                 </p>
              <div className="w-half">
              <MyButton href='/recoveryPhrase' title="Next" />
              </div>
               </div>
             </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default page;
