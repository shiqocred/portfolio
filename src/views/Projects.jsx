import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import LinkURL from '../assets/svg/LinkURL';
import { Link } from 'react-router-dom';

export default function Projects(props) {
  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
      <Container>
        <Header>
          <Header.Title>Things I’ve made trying to put my dent in the universe.</Header.Title>
          <Header.Subtitle>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</Header.Subtitle>
        </Header>
        <div className="mt-16 sm:mt-20">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {
              props.data.map(item => (
                <li className='group relative flex flex-col items-start' key={item.id}>
                  <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                    <img src={`/logo/${item.image}.jpeg`} alt="" decoding='async' loading='lazy' className='h-8 w-8 rounded-full' />
                  </div>
                  <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                    <div className='absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
                    <Link to={item.url.to}>
                      <span className='absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
                      <span className='relative z-10'>{item.name}</span>
                    </Link>
                  </h2>
                  <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>{item.value}</p>
                  <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
                    <LinkURL className="h-6 w-6 flex-none" />
                    <span className='ml-2'>{item.url.name}</span>
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </div>
  )
}
