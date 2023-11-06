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

const page = () => {

  return (
  //   <div style={{backgroundColor:'#F8F8F8'}} className="flex w-full items-center ">
  //   <div className="block w-6/12 sideImage">
  //     <Image src={woman_img} alt="woman image" className="h-full" />
  //   </div>

  //   <div className="block w-6/12 px-16">
  //     <div className="rounded-3xl bg-white p-6 flex justify-center">
  //       <div className="px-18 py-5 centar formContainer">
  //         <Image src={logo_white} alt="logo" className="logo my-8" />
         
          
  //         <h2 className="welcome-text mt-12 ">Get Started</h2>
  //           <h4 className=""> Sign up to continue</h4>

  //           <div className="bg-white p-1 rounded-lg max-w-[350px]">

  //             <div className="relative mt-2  w-full text-gray-500 border-b-2 border-[#3b3795]">
  //               <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
  //                 <select className="text-sm outline-none rounded-lg h-full">
  //                   <option>US</option>
  //                   <option>ES</option>
  //                   <option>MR</option>
  //                 </select>
  //               </div>
  //               <input
  //                 type="number"
  //                 placeholder="+1 (555) 000-000"
  //                 className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none  focus:border-slate-600 shadow-sm rounded-lg"
  //               />
  //             </div>
  //           <p className="mt-1">Enter your Phone number to continue</p>
  //           </div>

  //        <MyButton href="/verification" title="Next" />
    
       
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
        <h2 className="welcome-text mt-12 px-4">Create New Account</h2>
        <h4 className="px-4"> Sign Up to continue</h4>

        <Input icon={user_icon} label="USERNAME" type="text" />
        <Input icon={phone_icon} label="E-MAIL" type="number" />
        <div className="inputContainer flex items-center mt-1 p-4">
        <div className="inputIcon">
          <Image src={key_icon} alt="icon" className="w-12" />
        </div>
        <div className="inputs mx-4">
          <input
            type='password'
            placeholder='PASSWORD'
            className="text-lg border-b-2 border-[#3c3896] mt-1 "
            id="key"
          />
        </div>
      </div>
      <div className="inputContainer flex items-center mt-1 p-4">
        <div className="inputIcon">
          <Image src={key_icon} alt="icon" className="w-12" />
        </div>
        <div className="inputs mx-4">
          <input
            type='password'
            placeholder='CONFIRM PASSWORD'
            className="text-lg border-b-2 border-[#3c3896] mt-1 "
            id="key"
          />
        </div>
      </div>

        <div className="mt-1 p-4 flex">
          {/* <input type="checkbox" className="checkBox mx-3" color="red" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7222 13.2976C18.7222 12.8069 19.1204 12.4087 19.6111 12.4087C20.1018 12.4087 20.5 12.8069 20.5 13.2976V18.2451C20.5 19.5198 19.4627 20.5571 18.1889 20.5571H6.81111C5.53733 20.5571 4.5 19.5198 4.5 18.2451V6.86824C4.5 5.59357 5.53733 4.55713 6.81111 4.55713H15.3151C15.8058 4.55713 16.204 4.95446 16.204 5.44602C16.204 5.93668 15.8058 6.33491 15.3151 6.33491H6.81111C6.51689 6.33491 6.27778 6.57402 6.27778 6.86824V18.2451C6.27778 18.5394 6.51689 18.7794 6.81111 18.7794H18.1889C18.4831 18.7794 18.7222 18.5394 18.7222 18.2451V13.2976ZM10.1092 11.6201C10.4648 11.2805 11.0266 11.2947 11.3661 11.6494L12.7039 13.0521L18.0844 7.49383C18.4248 7.14183 18.9875 7.13116 19.3412 7.47339C19.6941 7.81472 19.703 8.37739 19.3617 8.73028L13.3377 14.9525C13.1706 15.1258 12.9404 15.2236 12.6995 15.2236H12.6959C12.4541 15.2227 12.223 15.1232 12.0559 14.9481L10.0799 12.8769C9.74035 12.5214 9.75457 11.9587 10.1092 11.6201Z" fill="black"/>
        </svg>
          <div>
          <span>By creating an account your aggree to our</span>
        <div>
        <span className="text-blue-600 ">Term and Condtions</span> 
        </div>
          </div>
        </div>
        <Link href={'/'}>
          <div  className="inputContainer flex items-center mt-1 p-4  hover:cursor-pointer">
            <div className="btn my-4 text-white">Sign Up</div>
          </div>
        </Link>
          
        <div className="inputContainer flex items-center justify-center px-2">
          <span className="SignUpLastText">
            Don’t Have An Account?
           <Link href={'/'}> <span className="text-[#3c3896]"> Sign in </span> </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
 
  );
};

export default page;
