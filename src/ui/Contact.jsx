import React from 'react'
import Container from './Container'

export default function Contact() {
  return (
    <Container id='contact' className='py-10 lg:py-24 flex flex-col justify-center items-center gap-2'>
      <p className='text-designColor text-lg font-semibold tracking-wide'>
        04. What's next?
      </p>
        <h1 className='text-5xl font-semibold'>Get in touch</h1>
        <p className='max-w-lg mx-auto text-center text-darkText'>Although I'm not currently looking for any new opportunities, my inbox is always open. Whather you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a href="mailto:sarowar2287@gmail.com">
          <p className='w-32 h-12 text-md border border-designColor rounded-md flex justify-center items-center mt-8 text-designColor hover:bg-textBg duration-200 tracking-wider'>
          Say Hello
          </p>
           </a>
    </Container>
  )
}
