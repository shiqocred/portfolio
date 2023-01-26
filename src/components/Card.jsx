import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRight from '../assets/svg/ArrowRight'

function Card({children}) {
  return (
    <section className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
      <div className='grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4'>
        {children}
      </div>
    </section>
  )
}

function Title({children}) {
  return (
    <h2 className='text-sm font-semibold text-zinc-800 dark:text-zinc-100'>{children}</h2>
  )
}

function Container({children}) {
  return (
    <div className='md:col-span-3'>
      <div className='space-y-16'>
        {children}
      </div>
    </div>
  )
}

function Article({children}) {
  return (
  <article className='group relative flex flex-col items-start'>
    <div className='md:col-span-3 group relative flex flex-col items-start'>
        {children}        
    </div>
  </article>
  )
}

function NameH2({children}) {
  return (
    <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
       {children}
    </h2>
  )
}

function NameH3({children}) {
  return (
    <h3 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
       {children}
    </h3>
  )
}

function Hover() {
  return (
    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
  )
}

function To({children, route}) {
  return (
    <Link to={route}>
        <span className='absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
        <span className='relative z-10'>
        {children}
        </span>
    </Link>
  )
}

function On({children}) {
  return (
    <p className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'>
      {children}
    </p>
  )
}

function Time({children, time}) {
  return (
    <time className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5' dateTime={time}>
      {children}
    </time>
  )
}

function Line() {
  return (
    <span className='absolute inset-y-0 left-0 flex items-center'>
      <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' ></span>
    </span>
  )
}

function Value({children}) {
  return (
    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
      {children}
    </p>
  )
}

function More({children}) {
  return (
    <div className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'>
      {children}
      <ArrowRight className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Title = Title;
Card.Container = Container;
Card.Article = Article;
Card.NameH2 = NameH2;
Card.NameH3 = NameH3;
Card.Hover = Hover;
Card.To = To;
Card.On = On;
Card.Time = Time;
Card.Line = Line;
Card.Value = Value;
Card.More = More;

export default Card