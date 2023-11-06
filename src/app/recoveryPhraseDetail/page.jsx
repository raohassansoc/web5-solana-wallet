"use client";
import React,{useEffect , useState} from "react";
import Image from "next/image";
import woman_img from "../assets/womanImg.png";
import logo_white from "../assets/logo-white.png";
import Icon_color from "../assets/Icon-color.png";
import { BsArrowLeftShort } from "react-icons/bs";
import RecoveryPhraseList from "../components/RecoveryPhraseList";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useAuth } from "../AuthContext";
import Link from "next/link";

import { useRouter } from "next/navigation";

const page = () => {
  const auth = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  useEffect(()=>{
    if(auth?.mnemonicWords == null){
        router.push(`/`)
    }

  },[])

  const wordElements = auth?.mnemonicWords?.map((word, index) => (
    <>
    {index == 3 || index == 5 || index == 7 ? 
      <li key={index} className="px-2 my-4 text-sm Phrase-list-input">
        <input
          id={index}
          type="text"
          className=" bg-transparent text-sm h-9 font-light placeholder:text-indigo-500"
          placeholder="Enter The value"
        />
      </li>
       : 
       <li key={index} className="px-2 my-4 text-sm">{word}</li>
      }
    </>
  ));

  const handleClickOpen = () => {

    if(auth){
      let m3 = auth?.mnemonicWords[3]
      let m5 = auth?.mnemonicWords[5]
      let m7 = auth?.mnemonicWords[7]

      let i3 = document.getElementById('3').value
      let i5 = document.getElementById('5').value
      let i7 = document.getElementById('7').value
      if(i3 == m3 && i5 == m5 && i7 == m7){
        setOpen(true);
        auth.addMultiAccount(auth.mainAccount);
      }else{
        alert("Please enter the correct recovery phrase")
      }
    }

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{backgroundColor:'#F8F8F8'}} className="flex w-full items-center ">
    <div className="block w-6/12 sideImage">
      <Image src={woman_img} alt="woman image" className="h-full" />
    </div>

    <div className="block w-6/12 px-16">
      <div className="rounded-3xl bg-white p-6  justify-center">
        <div className="px-18 py-5 centar formContainer">
          <Image src={logo_white} alt="logo" className="logo my-8" />
         
          <div className="flex mt-12 items-center">
                <Link href={'/'}>
                  <BsArrowLeftShort size={40} />
                </Link>
              <h2 className="welcome-text px-4">Recovery Phrase</h2>
            </div>

            <div className="my-2 px-2 md:w-[80%] center">
              <h4 className=" font-semibold"> Enter Recovery Phrase</h4>
              <div className="flex flex-row flex-wrap  justify-start m-6 ">
                <RecoveryPhraseList>
                {wordElements}
                </RecoveryPhraseList>
              </div>
              <div
                className="inputContainer flex items-center mt-1 p-4 hover:cursor-pointer"
                onClick={handleClickOpen}
              >
                <div className="btn my-4 text-white">Next</div>
              </div>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogContent>
                  <Image src={Icon_color} className="m-auto" />
                  <DialogContentText className="text-center my-4 font-bold text-black">
                    Account created successfully!
                  </DialogContentText>
                <Link href={'/mainHome'}>
                  <button type="button" className="center bg-gray-100 w-full">Next</button>
                  </Link>
                </DialogContent>
              </Dialog>
            </div>
       
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default page;
