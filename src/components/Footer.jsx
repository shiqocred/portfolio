import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <footer className='mt-32'>
                <div className='sm:px-8'>
                    <div className='mx-auto max-w-7xl lg:px-8'>
                        <div className='border-t border-zinc-100 dark:border-zinc-700/40 pt-10 pb-16'>
                            <div className='relative px-4 sm:px-8 lg:px-12'>
                                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                                    <div className='flex flex-col items-center justify-between gap-6 lg:flex-row'>
                                        <div className='flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                                            {
                                                props.data.map((e, i) => (
                                                    <Link to={e.url} key={i} className="transition hover:text-teal-500 dark:hover:text-teal-400 capitalize" >
                                                        {e.name}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <p className='text-sm text-zinc-400 dark:text-zinc-500'>
                                            &copy; 2023 Miftahudin Isro'. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  )
}
