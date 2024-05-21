import { motion } from 'framer-motion'
import React from 'react'

import {IoIosArrowRoundForward} from 'react-icons/io'
const Card = ({width, start, para, hover="false"}) => {
  return (
    <motion.div 
      whileHover={{backgroundColor: hover==="true"&&"#7443ff", padding: "25px"}}
      className={`w-1/2 bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex justify-between items-center'>
            <h3>Heading</h3>
            <IoIosArrowRoundForward/>
            </div>
            <h1 className='text-3xl font-medium mt-5'>Whatever heading</h1>
        </div>   
        <div className='down w-full'>
          {
            start && (
              <>
                <h1 className='text-6xl font-medium tracking-tight leading-none'>Start a project</h1>
                <button className='rounded-full mt-5 py-2 px-3 border-2 border-zinc-50'>Contact us</button>
              </>
            )
          }   
          {
            para && (
              <>
                <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo perspiciatis accusamus cumque explicabo dignissimos. Veniam laudantium minima, tenetur voluptatibus unde dolorum odit perspiciatis, distinctio itaque reiciendis similique cum ipsa?</p>
              </>
            )
          }
        </div>  
    </motion.div>
  )
}

export default Card