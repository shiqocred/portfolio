import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function App(props) {
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
  return (
    <div>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
            <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20"></div>
            </div>
        </div>
        <div className='relative'>
            <Navbar nav={props} />
            <main>
                <Outlet />
            </main>
            <Footer {...props} />
        </div>
    </div>
  )
}
