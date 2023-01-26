import React from 'react'
import Container from '../components/Container'

export default function Thanks() {
  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
        <Container>
            <header className="max-w-2xl">
                <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>Thanks For Subcribing</h1>
                <p className='mt-6 text-base text-zinc-400'>I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings.</p>
            </header>
        </Container>
    </div>
  )
}
