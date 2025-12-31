import React from 'react'
import GetInTouchComponents from '../components/sections/GetInTouchComponents'

const Contact = () => {
  return (
    <section className='text-white bg-gray-900 min-h-screen px-4 md:px-[10vw] pt-20'>
        <div className='container mx-auto p-4'>
        <h2 className='text-4xl  md:text-5xl uppercase font-bold text-center mb-4'>Get in touch</h2>
        <p className='text-center text-base sm:text-lg md:text-xl text-gray-400 mb-8'>Feel free to reach out through any of the following channels</p>
        <GetInTouchComponents/>

        </div>
    </section>
  )
}

export default Contact
