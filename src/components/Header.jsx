import React from 'react'

function Header({children}) {
  return (
    <header className='max-w-2xl'>
        {children}
    </header>
  )
}

function Title({children}) {
    return (
        <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>{children}</h1>
    )
}

function Subtitle({children}) {
    return (
        <p className='mt-6 text-base text-zinc-400'>{children}</p>
    )
}

Header.Title = Title;
Header.Subtitle = Subtitle;

export default Header