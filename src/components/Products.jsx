import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

const Products = () => {
    var products = [
        {title: "arquitel", 
        description:"Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customer that", 
        live: true, 
        case: false},

        {title: "cula", 
        description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, 
        case: false},

        {title: "layout land", 
        description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", 
        live: true, 
        case: false},

        {title: "TTR", 
        description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", 
        live: true, 
        case: true},

        {title: "Maniv", 
        description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", 
        live: true, 
        case: true},
    ];

  const [position, setPosition] = useState(0);
  const moving = (val) => {
    setPosition(val*23);
  }
  return (
    <div className='mt-32'>
      {products.map((val, index)=> 
      <Product key={index} val={val} moving={moving} count={index}/>)}
      <div className='absolute top-0 w-full h-full pointer-events-none'>
        <motion.div 
        initial = {{y: position, x: "-50%"}}
        animate = {{y: position+`rem`}}
        transition={{ease: [0.76,0,0,24,1], duration: 0.5}}
        className='window absolute w-[32rem] h-[23rem] left-[44%] bg-white -translate-x-[50%] overflow-hidden'>
          <motion.div transition={{ease: [0.76,0,0,24,1], duration: 0.5}} animate={{y: -pos+`rem`}} className='w-full h-full'></motion.div>
          <motion.div transition={{ease: [0.76,0,0,24,1], duration: 0.5}} animate={{y: -pos+`rem`}} className='w-full h-full'></motion.div>
          <motion.div transition={{ease: [0.76,0,0,24,1], duration: 0.5}} animate={{y: -pos+`rem`}} className='w-full h-full'></motion.div>
          <motion.div transition={{ease: [0.76,0,0,24,1], duration: 0.5}} animate={{y: -pos+`rem`}} className='w-full h-full'></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products