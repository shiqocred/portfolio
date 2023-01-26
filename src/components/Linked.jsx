import clsx from 'clsx';
import React from 'react'
import { useLocation } from 'react-router-dom';

export const Linked = ({href, children}) => {
    const location = useLocation()

    const handleClick = (event) => {
      event.preventDefault();
      window.open(href, "_blank")
    }
  
    return(
      <a href={href} onClick={handleClick} className={clsx(location.pathname == '/about' && 'group flex text-sm items-center font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500', location.pathname == '/' && 'group -m-1 p-1')}>
        {children}
      </a>
    )
  }
