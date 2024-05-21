import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'> 
            <h1 className='text-[10rem] font-semibold leading-none tracking-tighter'>refokus.</h1></div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {["Instagram","Twitter","LinkedIn"].map((item, index) => <a className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>site map</h4>
                    {["Home","Work","Careers","Contact"].map((item, index) => <a className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" className='w-52 mt-10'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer