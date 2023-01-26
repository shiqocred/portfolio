import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/svg/ArrowRight';
import Container from '../../components/Container';
import Header from '../../components/Header';

export default function Index(props) {
  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
      <Container>
        <Header>
          <Header.Title>Writing on graphic design, software design, and company building</Header.Title>
          <Header.Subtitle>All of my long-form thoughts on progamming, product design, leadership, and more, collected in chronological order.</Header.Subtitle>
        </Header>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-700/40 md:pl-6">
            <div className="flex max-w-3xl flex-col space-y-16">
              {
                props.data.map((item, i)=>(
                  <article className='md:grid md:grid-cols-4 md:items-baseline' key={i}>
                    <div className='md:col-span-3 group relative flex flex-col items-start'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-100'>
                        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link to={`/articles/${item.slug}`}>
                          <span className='absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
                          <span className='relative z-10'>
                            {item.title}
                          </span>
                        </Link>
                      </h2>
                      <time className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5' dateTime={item.dateTime}>
                        <span className='absolute inset-y-0 left-0 flex items-center'>
                          <span className='h-4 w-0.5 rounded-full bg-zinc-500'></span>
                        </span>
                        {item.time}
                      </time>
                      <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                        {item.inti}
                      </p>
                      <div className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'>
                        Read article
                        <ArrowRight className="ml-1 h-4 w-4 stroke-current" />
                      </div>
                    </div>
                    <time className='mt-1 hidden md:flex relative z-10 order-first mb-3 items-center text-sm text-zinc-500' dateTime={item.dateTime}>{item.time}</time>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
