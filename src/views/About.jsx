import React from 'react'
import Container from '../components/Container'
import imgProfile from '../assets/profil.jpeg'
import { Link } from 'react-router-dom'
import Twitter from '../assets/svg/Twitter';
import Instagram from '../assets/svg/Instagram';
import Github from '../assets/svg/Github';
import LinkedIn from '../assets/svg/LinkedIn';
import Email from '../assets/svg/Email';
import { Linked } from '../components/Linked';

  const About = () => {
  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
      <Container>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='lg:pl-20'>
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <img src={imgProfile} width="800" height="800" alt="" className='aspect-square rotate-3 rounded-2xl bg-zinc-800 object-cover' loading='lazy' />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>
              I'm Miftahudin Isro. I live in Pati City, where I design the future.
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-400'>
            <p>I'm a talented individual with a passion for both design and programming. I've a strong background in graphic design, with experience in creating visually appealing and user-friendly designs for websites and applications. I also have a solid understanding of front-end development and is proficient in HTML, CSS, and JavaScript.</p>
            <p>My passion for design and programming began in high school where i took a class in web design and fell in love with the creative process of designing and building websites. I went on to study computer science and graphic design in college, where i honed my skills and gained a deeper understanding of the industry.</p>
            <p>Throughout my career, I've worked on a variety of projects, from small websites to large-scale web applications. I'm known for his ability to create visually stunning designs that are also highly functional and user-friendly. I'm always eager to take on new challenges and am dedicated to staying current with the latest design and development trends.</p>
            <p>In my free time, I enjoys experimenting with new design techniques and technologies and am always looking for ways to improve his skills. I'm also a member of several design and programming communities and am passionate about sharing my knowledge and experience with others.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <li className='flex'>
                <Linked href="https://twitter.com/isromiftahudin">
                  <Twitter className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                  <span className='ml-4'>Follow on Twitter</span>
                </Linked>
              </li>
              <li className='flex mt-4'>
                <Linked href="https://instagram.com/sro.miftah/" >
                  <Instagram className="sosial-media" />
                  <span className='ml-4'>Follow on Instagram</span>
                </Linked>
              </li>
              <li className='flex mt-4'>
                <Linked href="https://github.com/shiqocred" >
                  <Github className="sosial-media" />
                  <span className='ml-4'>Follow on Github</span>
                </Linked>
              </li>
              <li className='flex mt-4'>
                <Linked href="https://linkedin.com/in/isro-miftahudin-06b2781a7" >
                  <LinkedIn className="sosial-media" />
                  <span className='ml-4'>Follow on LinkedIn</span>
                </Linked>
              </li>
              <li className='mt-8 border-t border-zinc-700/40 pt-8 flex'>
                <Linked href="mailto:manisro09@gmail.com" >
                  <Email className="sosial-media" />
                  <span className='ml-4'>manisro09@gmail.com</span>
                </Linked>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About