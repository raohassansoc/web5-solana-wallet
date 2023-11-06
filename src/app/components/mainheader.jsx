"use client"
import Link from 'next/link';
import React, { useState , useEffect } from 'react';
import { useAuth } from "../AuthContext";

export default function MainHeader() {
    const auth = useAuth();
    const [isAccountOpen, setAccountOpen] = useState(false);
   
    const toggleAccount = () => {
        setAccountOpen(!isAccountOpen);
    };

    useEffect(()=>{
      
    })
    return (
        <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="w-full md:w-[50%] left">
                <button
                    type="button"
                    className="w-full nonCollorButton inline-flex justify-center gap-x-1.5 rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    // id="menu-button"
                >
                    Solana
                    {/* <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg> */}
                </button>

            </div>
            <div className="w-full md:w-[50%] center">
                <button
                    type="button"
                    className="w-full collorButton inline-flex justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    onClick={toggleAccount}
                >
                    Accounts
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isAccountOpen && (
                    <div className='relative'>
                    <div className=" absolute center right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    {auth.multiAccount?.map((crypto, index) => (
                           <div className='justify-around flex p-1'>
                           <a key={index} onClick={()=>{auth.setMain(crypto)}} className="cursor-pointer text-gray-700 block px-4 py-2 text-sm">{crypto.publicKey ? crypto?.publicKey.substring(0, 9)+'****' : ''}</a>
                           <>
                           {index === 0 ? 
                           <img width="30" height="20" src="https://img.icons8.com/color/48/chain.png" alt="chain"/>
                           :
                            <svg onClick={()=> {auth.removeAccount(index)}} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#b39ddb" d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"></path><path fill="#9575cd" d="M28 6L20 6 14 12 34 12z"></path><path fill="#7e57c2" d="M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z"></path>
                            </svg>
                            }
                            </>
                            </div>
                   ))}
                    </div>
                    </div>
                )}
                {/* <div className="relative inline-block text-left right">
                <div
                    className=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                        >
                            Edit
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                        >
                            Duplicate
                        </a>
                    </div>
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-2"
                        >
                            Archive
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-3"
                        >
                            Move
                        </a>
                    </div>
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-4"
                        >
                            Share
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-5"
                        >
                            Add to favorites
                        </a>
                    </div>
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-6"
                        >
                            Delete
                        </a>
                    </div>
                </div>
                </div> */}
            </div>
            <div className="right">
             <Link href={'/'} >
               <div className='mt-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <circle cx="2.22827" cy="2.54321" r="1.77173" fill="black"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <circle cx="2.22827" cy="2.54321" r="1.77173" fill="black"/>
                </svg>         <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <circle cx="2.22827" cy="2.54321" r="1.77173" fill="black"/>
                </svg>

               </div>
            </Link>
            </div>
        </div>
    );
}


// export default function MainHeader() {
//     return (


//         <div className="grid grid-cols-3 gap-4 mb-5">
//             <div className="w-full md:w-[50%] left">
//                 <button
//                     type="button"
//                     className="w-full nonCollorButton inline-flex justify-center gap-x-1.5 rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                     id="menu-button"

//                 >
//                     Solana
//                     <svg
//                         className="-mr-1 h-5 w-5 text-gray-400"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </button>

//             </div>
//             <div className="w-full md:w-[50%] center">
//                 <button
//                     type="button"
//                     className="w-full collorButton inline-flex justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                     id="menu-button"
// onClick={toggleAccount}

//                 >
//                     Account 1
//                     <svg
//                         className="-mr-1 h-5 w-5 text-gray-400"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </button>
// {isAccountOpen && (
//     <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//         <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Option 1</a>
//         <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Option 2</a>
//         <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Option 3</a>
//     </div>
// )}

//                 <div
//                     className="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="menu-button"
//                     tabIndex={-1}
//                 >
//                     <div className="py-1" role="none">
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-0"
//                         >
//                             Edit
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-1"
//                         >
//                             Duplicate
//                         </a>
//                     </div>
//                     <div className="py-1" role="none">
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-2"
//                         >
//                             Archive
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-3"
//                         >
//                             Move
//                         </a>
//                     </div>
//                     <div className="py-1" role="none">
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-4"
//                         >
//                             Share
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-5"
//                         >
//                             Add to favorites
//                         </a>
//                     </div>
//                     <div className="py-1" role="none">
//                         <a
//                             href="#"
//                             className="text-gray-700 block px-4 py-2 text-sm"
//                             role="menuitem"
//                             tabIndex={-1}
//                             id="menu-item-6"
//                         >
//                             Delete
//                         </a>
//                     </div>
//                 </div>
//                 <div className="relative inline-block text-left ">
//                 </div>
//             </div>
//             <div className="right">
//                 <img style={{marginTop:'11px'}} width="23" height="23" src="https://img.icons8.com/ios/50/menu-2.png" alt="menu-2" />
//             </div>
//         </div>

//     )
// }
