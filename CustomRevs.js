import React from 'react'
import modelGirl from '../images/modelGirl.png'
const CustomRevs = () => {
  return (
    <div className=' h-96 md:md:h-120 bg-pink-100 flex flex-col   justify-around items-center pt-6 mb-10 md:flex md:p-24' >
        <img src={modelGirl} alt="Model-Girl" className=' w-52 md:w-80 ' />

        <div  className=' flex flex-col items-center px-3 md:w-1/2'>
            <div className='  flex justify-around items-center '>
                <p  className=' text-2xl font-bold reg' >True Story</p>
                <p  className=' font-bold'>
                    01
                </p>
            </div>
            <p className=' w-3/5 text-center  text-sm font-bold px-6 border  md:pt-10 md:h-60 md:w-3/5'>"We pride ourselves on our unique product
                        a range created by our in-house design team
                        and global brand partnerships, all of which are
                        individuality, design, and quality."</p>
            <p className=' text-2xl font-bold ml-8 reg md:ml-10'>Julia Cameron<span></span></p>

        </div>

    </div>
  )
}

export default CustomRevs