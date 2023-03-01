import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import Twitter from '../assets/svg/Twitter';
import Instagram from '../assets/svg/Instagram';
import Github from '../assets/svg/Github';
import LinkedIn from '../assets/svg/LinkedIn';
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';
import home3 from '../assets/home3.jpeg';
import home4 from '../assets/home4.jpeg';
import home5 from '../assets/profil.jpeg';
import clsx from 'clsx';
import Card from '../components/Card';
import Email from '../assets/svg/Email';
import Work from '../assets/svg/Work';
import { Linked } from '../components/Linked';
import Download from '../components/Download';

export default function Home({articles, jobs}) {
  const home = [
    {
      "img": home1,
      "rotate": "rotate-2"
    },
    {
      "img": home2,
      "rotate": "-rotate-2"
    },
    {
      "img": home3,
      "rotate": "rotate-2"
    },
    {
      "img": home4,
      "rotate": "rotate-2"
    },
    {
      "img": home5,
      "rotate": "-rotate-2"
    }
  ]
  return (
    <>
      <div className='sm:px-8 mt-16 sm:mt-32'>
        <Container>
          <Header>
            <Header.Title>Software designer and development.</Header.Title>
            <Header.Subtitle>I’m Isro', a software designer and web development based in Pati City. I’m the web development in Mina Tani Farm company, where I develop web with high technology for Hydroponic education.</Header.Subtitle>
            <div className='mt-6 flex gap-6'>
                  <Linked href="https://twitter.com/isromiftahudin">
                    <Twitter className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                  </Linked>
                  <Linked href="https://instagram.com/sro.miftah/">
                    <Instagram className="sosial-media" />
                  </Linked>
                  <Linked href="https://github.com/shiqocred">
                    <Github className="sosial-media" />
                  </Linked>
                  <Linked href="https://linkedin.com/in/isro-miftahudin-06b2781a7">
                    <LinkedIn className="sosial-media" />
                  </Linked>
            </div>
          </Header>
        </Container>
      </div>
      <div className='mt-16 sm:mt-20'>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {
            home.map((item, i) => (
              <div className={clsx(item.rotate, "image-home")} key={i}>
                <img src={item.img} alt="" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <Container>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {
                articles.map(item => (
                  <Card.Article key={item.id}>
                    <Card.NameH2>
                      <Card.Hover />
                      <Card.To route={`/articles/${item.slug}`}>{item.title}</Card.To>
                    </Card.NameH2>
                    <Card.Time time={item.dateTime}>
                      <Card.Line />
                      {item.time}
                    </Card.Time>
                    <Card.Value>{item.inti}</Card.Value>
                    <Card.More>Read article</Card.More>
                  </Card.Article>
                ))
              }
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <form action="/thank-you" className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
                <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                  <Email.First />
                  <span className='ml-3'>Stay up to date</span>
                </h2>
                <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>Get notified when I publish something new, and unsubscribe at any time.</p>
                <div className='mt-6 flex'>
                  <input type="email" placeholder='Email address' required className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm' />
                  <button className='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none' type='submit'>Join</button>
                </div>
              </form>
              <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
                <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                  <Work />
                  <span className='ml-3'>Stay up to date</span>
                </h2>
                <ol className='mt-6 space-y-4'>
                  {
                    jobs.map(item => (
                      <li className='flex gap-4' key={item.id}>
                        <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                          <img src={`/logo/${item.image}.jpeg`} width="32" height="32" className="h-7 w-7 rounded-full" decoding='async' loading='lazy' alt="" />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                          <dt className='sr-only'>{item.company.title}</dt>
                          <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{item.company.name}</dd>
                          <dt className='sr-only'>{item.role.title}</dt>
                          <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{item.role.name}</dd>
                          <dt className='sr-only'>{item.company.title}</dt>
                          <dd className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'>
                            <time dateTime={item.date.dateFrom}>{item.date.from}</time>
                            <span aria-hidden="true">&nbsp;&minus;&nbsp;</span>
                            <time dateTime={item.date.dateUntil}>{item.date.until}</time>
                          </dd>
                        </dl>
                      </li>
                    ))
                  }
                </ol>
                <Download fileUrl={home1} fileName="home1.jpeg" className='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full'>
                  Download CV
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"><path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Download>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
