import { FiSend } from 'react-icons/fi'
import { LuArrowRight } from 'react-icons/lu'

const ContactForm = () => {
  return (
   <section className='bg-[var(--secondary)] p-8 space-y-4 rounded-md '>
    <div className='flex items-center gap-2 text-xl '><FiSend /> <h2 className='text-2xl font-bold'>Send Me A Message</h2> </div>
    <div className='space-y-6'>

 
   <div className='grid md:grid-cols-2 grid-cols-1 gap-6 '>
    <div>
        <label htmlFor="input1">Name</label>
        <input type="text" id='input1'  className=' bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1 rounded-md' placeholder='your name'/>
    </div>
     <div>
        <label htmlFor="input2">Email</label>
        <input type="text" id='input2'  className='bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md' placeholder='Your Email'/>
    </div>
      </div>



     <div>
        <label htmlFor="input3"className='text-sm font-medium text-gray-300 ' >Subject</label>
        <input type="text" id="input3"  className=' bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md' placeholder='Subject' />
    </div>

       <div>
        <label htmlFor="input4" className='text-sm font-medium text-gray-300 '>Message</label>
        <textarea id='input4' className=' bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md' placeholder='your name' ></textarea>
    </div>

     <button className='p-3  bg-gradient-to-r from-[#2866e1] to-[#1d69fd]/50 font-medium rounded-lg px-6 cursor-pointer flex items-center gap-2 '>
        Send Message <LuArrowRight />
    </button>



</div>
   </section>
  )
}

export default ContactForm