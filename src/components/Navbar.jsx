import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imgProfile from '../assets/img.jpeg';

export default function Navbar({nav}) {
const location = useLocation();
const [isHidden, setHidden] = useState(false)
const [showNavbar, setShowNavbar] = useState(true);
const [theme, setTheme] = useState('light');

const handleHidden =() => {
    setHidden(!isHidden)
    if (isHidden) {
        document.body.style.overflow = 'auto'
    } else {
        document.body.style.overflow = 'hidden'
    }
}

let lastScroll = 0;

useEffect(() => {
    if (theme == "dark") {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
}, [theme])

const handleSwitch = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
}

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
    <header className='pointer-events-none relative z-50 flex flex-col h-16 mb-0' >
        <div className='top-0 z-10 h-16 pt-6'>
            <div className={clsx(!showNavbar ? "-translate-y-16" : "",'fixed transition duration-500 ease-in-out sm:px-8 top-[24px] w-full')}>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="relative flex gap-4">
                                <div className="flex flex-1">
                                    <div className="h-10 w-10 rounded-full bg-white/90 dark:bg-zinc-800/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-white/10">
                                        <Link to="/" className='pointer-events-auto' >
                                            <img src={imgProfile} className="rounded-full bg-zinc-800 object-cover h-9 w-9" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-end md:justify-center">
                                    <Menu as="div" className="pointer-events-auto md:hidden">
                                        <Menu.Button onClick={handleHidden} className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">Menu
                                            <svg viewBox="0 0 8 6" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400">
                                                <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </Menu.Button>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                            <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100">
                                                <Menu.Items as='div' className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                                                    <div className="px-1 py-1">
                                                        <Menu.Item as="div" className="flex flex-row-reverse items-center justify-between mb-5 ml-3">
                                                            {
                                                                ({close}) => (
                                                                    <>
                                                                    <button className='-m-1 p-1' onClick={close && handleHidden} >
                                                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-zinc-500 dark:text-zinc-400"><path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                                    </button>
                                                                    <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>Navigation</h2>
                                                                    </>
                                                                )
                                                            }
                                                        </Menu.Item>
                                                        {
                                                            nav.data.map((item, i) => (
                                                                <Menu.Item key={i}>
                                                                    <Link to={item.url} onClick={handleHidden} className={clsx( location.pathname.startsWith(item.url) ? "text-teal-400 " : "hover:text-teal-400","relative block px-3 py-2.5 transition capitalize", i !== nav.data.length - 1 ? 'border-b-[1px] border-zinc-100 dark:border-zinc-800' : '')}>
                                                                        {item.name}
                                                                    </Link>
                                                                </Menu.Item>
                                                            ))
                                                        }
                                                    </div>
                                                </Menu.Items>
                                            </div>
                                        </Transition>
                                    </Menu>
                                    <nav className="pointer-events-auto hidden md:block">
                                        <ul className='flex rounded-full bg-white/90 dark:bg-zinc-800/90 px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-white/10 backdrop-blur'>
                                            {
                                                nav.data.map((item, i) => (
                                                    <li key={i}>
                                                        <Link to={item.url} className={clsx( location.pathname.startsWith(item.url) ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-400","relative block px-3 py-2 transition capitalize")}>
                                                            {item.name}
                                                            {
                                                                location.pathname.startsWith(item.url) ? 
                                                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span> : null
                                                            }
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex justify-end md:flex-1">
                                    <div className="pointer-events-auto">
                                        <button onClick={handleSwitch} className='group rounded-full bg-white/90 dark:bg-zinc-800/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20 backdrop-blur transition'>
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
  )
}
