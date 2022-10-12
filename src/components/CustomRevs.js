import React from 'react'
import modelGirl from '../images/modelGirl.png'
const CustomRevs = () => {
  return (
    <div className=' h-80 bg-pink-100 flex  justify-around items-center pt-6 mb-10' >
        <img src={modelGirl} alt="Model-Girl" className=' w-52' />

        <div  className=' px-3'>
            <div className='  flex justify-around items-center '>
                <p  className=' text-2xl font-bold reg' >True Story</p>
                <p  className=' font-bold'>
                    01
                </p>
            </div>
            <p className=' text-base font-bold'>"We pride ourselves on our unique product
                        a range created by our in-house design team
                        and global brand partnerships, all of which are
                        individuality, design, and quality."</p>
            <p className=' text-2xl font-bold reg'>Julia Cameron<span></span></p>

        </div>

    </div>
  )
}

export default CustomRevs