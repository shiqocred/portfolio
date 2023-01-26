import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import data from '../../utils/data.json'

export default function Show() {
    const { slug } = useParams()
    const article = data[0].data.find(article => article.slug == slug)
  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
        <Container>
            <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                    <button onClick={() => window.history.back()} className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md bg-zinc-800 shadow-zinc-700/5 ring-0 ring-white/10 transition border border-zinc-700/50 hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0'>
                        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <article>
                        <header className='flex flex-col'>
                            <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>
                                {article.title}
                            </h1>
                            <time className='order-first flex items-center text-base text-zinc-500' dateTime={article.dateTime}>
                                {article.time}
                            </time>
                        </header>
                        <p className='prose-invert mt-7 text-zinc-400 space-y-7'>{article.inti}</p>
                        <div className='prose-invert mt-7 text-zinc-400 space-y-7' dangerouslySetInnerHTML={{ __html: article.value}} />
                    </article>
                </div>
            </div>
        </Container>
    </div>
  )
}
