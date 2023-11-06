"use client"
// import Main  from "./mainHome/page";
// import SignIn from "/signin"
import React, { useEffect, useState } from "react";
import logo_white from "./assets/logo-white.png";
import user_icon from "./assets/userIcon.png";
import key_icon from "./assets/keyIcon.png";
import phone_icon from "./assets/phoneIcon.png";
import Input from "./components/input";
import MyButton from "./components/button";
import woman_img from "./assets/womanImg.png";
import Image from "next/image";
import Link from "next/link";
import MainHome from "./mainHome/page";

export default function Home() {

  return (
    <>
      <MainHome />
    </>
  );
}
