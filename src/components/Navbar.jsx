import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imgProfile from '../assets/img.jpeg';
import Container from './Container';

export default function Navbar({nav}) {
const location = useLocation();

const [showNavbar, setShowNavbar] = useState(true);

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const handleScroll = () => {
//   if (window.scrollY > 0) {
//     setShowNavbar(false);
//   } else {
//     setShowNavbar(true);
//   }
// };

let lastScroll = 0;

useEffect(() => {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset
    
        if (currentScroll <= 0) {
            setShowNavbar(true)
        }
    
        if (currentScroll > lastScroll && showNavbar == true ) {
            setShowNavbar(false)
        }
        if (currentScroll < lastScroll && showNavbar == false ) {
            setShowNavbar(true)
        }
    
        lastScroll = currentScroll
    })
}, [])

  return (
    <>
    <header className='pointer-events-none relative z-50 flex flex-col h-16 mb-0' >
        <div className='top-0 z-10 h-16 pt-6'>
            <div className={clsx(!showNavbar ? "-translate-y-16" : "",'fixed transition duration-500 ease-in-out sm:px-8 top-[24px] w-full')}>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="relative flex gap-4">
                                <div className="flex flex-1">
                                    <div className="h-10 w-10 rounded-full bg-zinc-800/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10">
                                        <Link to="/" className='pointer-events-auto' >
                                            <img src={imgProfile} className="rounded-full bg-zinc-800 object-cover h-9 w-9" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-end md:justify-center">
                                    <div className="pointer-events-auto md:hidden">
                                        <button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20" id="headlessui-popover-button-:Rqb6:" type="button">Menu
                                            <svg viewBox="0 0 8 6" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400">
                                                <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <nav className="pointer-events-auto hidden md:block">
                                        <ul className='flex rounded-full bg-zinc-800/90 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur'>
                                            {
                                                nav.data.map((item, i) => (
                                                    <li key={i}>
                                                        <Link to={item.url} className={clsx( location.pathname.startsWith(item.url) ? "text-teal-400" : "hover:text-teal-400","relative block px-3 py-2 transition capitalize")}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex justify-end md:flex-1">
                                    <div className="pointer-events-auto">
                                        <button className='group rounded-full bg-zinc-800/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur transition'>
                                            <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
                                                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                                                <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
                                                <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {
        location.pathname == "/" 
        ?
        <div style={{ height: "116px" }}></div>
        :
        null
    }
    </>
    // <header className='pointer-events-none relative z-50 flex flex-col' style={{ height: "64px", marginBottom: "0px" }} >
    //     <div className='top-0 z-10 h-16 pt-6' style={{ position: "sticky" }}>
    //         <div className='sm:px-8 top-0 w-full'>
    //             <div className="mx-auto max-w-7xl lg:px-8">
    //                 <div className="relative px-4 sm:px-8 lg:px-12">
    //                     <div className="mx-auto max-w-2xl lg:max-w-5xl">
    //                         <div className="relative flex gap-4">
    //                             <div className="flex flex-1">
    //                                 <div className="h-10 w-10 rounded-full bg-zinc-800/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-white">
    //                                     <Link to="/" className='pointer-events-auto' >
    //                                         <img src={imgProfile} className="rounded-full bg-zinc-800 object-cover h-9 w-9" alt="" />
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                             <div className="flex flex-1 justify-end md:justify-center">
    //                                 <div className="pointer-events-auto md:hidden">
    //                                     <button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20" id="headlessui-popover-button-:Rqb6:" type="button">Menu
    //                                         <svg viewBox="0 0 8 6" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400">
    //                                             <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                         </svg>
    //                                     </button>
    //                                 </div>
    //                                 <nav className="pointer-events-auto hidden md:block">
    //                                     <ul className='flex rounded-full bg-zinc-800/90 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur'>
    //                                         {
    //                                             props.data.map((item, i) => (
    //                                                 <li key={i}>
    //                                                     <Link to={item.url} className={clsx( location.pathname.startsWith(item.url) ? "text-teal-400" : "hover:text-teal-400","relative block px-3 py-2 transition capitalize")}>
    //                                                         {item.name}
    //                                                     </Link>
    //                                                 </li>
    //                                             ))
    //                                         }
    //                                     </ul>
    //                                 </nav>
    //                             </div>
    //                             <div className="flex justify-end md:flex-1">
    //                                 <div className="pointer-events-auto">
    //                                     <button className='group rounded-full bg-zinc-800/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur transition'>
    //                                         <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
    //                                             <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
    //                                             <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
    //                                         </svg>
    //                                         <svg viewBox="0 0 24 24" className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
    //                                             <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                         </svg>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </header>
  )
}
