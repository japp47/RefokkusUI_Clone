import React from 'react'

const Marquee = ({imageurl}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imageurl.map((url, index) => <img key={index} src={url} className='w-[6vw] flex-shrink-0'/>)}
        {imageurl.map((url, index) => <img key={index} src={url} className='flex-shrink-0'/>)}
    </div>
  )
}

export default Marquee
