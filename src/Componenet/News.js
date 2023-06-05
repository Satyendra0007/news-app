import React from 'react'

export default function News(props) {
  const { name, author, title, description, url, imgurl, publishedAt } = props
  return (
    <div className='relative m-auto px-3 pb-6 border-2 border-gray-400 shadow-md md:flex md:gap-4'>
      <div className="image m-auto md:order-2 md:w-1/4 " >
        <img className='mx-auto' src={imgurl} alt="" />
        <p className='px-1 py-0.5 bg-gradient-to-tr from-orange-600 to-pink-600 inline rounded-lg text-[10px] font-bold text-white absolute top-0 right-0'>{name}</p>
      </div>
      <div className=" content mt-4 md:order-1 md:mt-0 md:w-3/4">
        <h2 className='mt-3 font-bold text-[14px] text-blue-900 text-justify lg:text-[16px]'>{title}</h2>

        <p className=' mt-1 font-semibold text-xs lg:text-sm'>{author}</p>
        <p className='mt-1 text-xs lg:text-sm'>{publishedAt}</p>
        <p className='my-3 text-xs lg:text-sm'>{description}</p>
        <a href={url}>
          <span className='text-xs py-2 px-3 bg-gradient-to-r from-orange-700 to bg-pink-700 text-white rounded-md text-center align-middle '>Read More</span>
        </a>
      </div>
    </div>
  )
}
