import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import user_icon from "../assets/userIcon.png";
import key_icon from "../assets/keyIcon.png";
import phone_icon from "../assets/phoneIcon.png";
import Input from "../components/input";
import MyButton from "../components/button";

import Link from "next/link";

const page = () => {
  return (
    <div className="flex w-full items-center">
      <div className="block w-6/12 sideImage">
        <Image src={woman_img} alt="woman image" className="h-full" />
      </div>
      <div className="block w-6/12 px-16">
        <div className="box-shadow p-4 flex justify-center">
          <div className="px-8 formContainer">
            <Image src={logo_white} alt="logo" className="logo my-8" />
            <h2 className="welcome-text mt-12 px-4">Welcome Back</h2>
            <h4 className="my-2 px-4"> Sign in to continue</h4>

            <Input icon={user_icon} label="USERNAME" type="text" />
            <Input icon={phone_icon} label="PHONE NUMBER" type="number" />
            <Input icon={key_icon} label="PASSWORD" type="password" />

            <div className="mt-1 p-4">
              <input type="checkbox" className="checkBox mx-3" color="red" />
              <label>By creating an account your aggree to our</label>
              <br />
              <span className="text-blue-600 p-4">Term and Condtions</span>
            </div>
            <Link href={'/mainHome'}>
            <div className="inputContainer flex items-center mt-1 p-4 hover:cursor-pointer">
              <div className="btn my-4 text-white">Sign In</div>
            </div>
            </Link>
            <div className="inputContainer flex items-center justify-center px-2">
              <span className="SignUpLastText">
                Don’t Have An Account?
               <Link href={'/signUp'}> <span className="text-[#3c3896]"> Sign Up </span> </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
