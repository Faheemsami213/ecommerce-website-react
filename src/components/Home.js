
import React from 'react'
import img3 from '../images/img3.png'
import { GrLinkNext } from "react-icons/gr";

const Home = () => {
  return (
    <div className=' bg-sky-100 px-10 h-screen mb-10 relative'>
        <div className=' bg-sky-100 h-96 w-4 absolute right-10 top-36'>

        </div>
          <div className=' w-2/3  flex items-center'>
                <p className=' reg font-bold text-5xl '>Feel  <br />
                     <span className='ml-11' >  Authentic </span> <br />
                 <    span className=' ml-44'>Peace </span></p>
            </div>
            <img src={img3} alt='model' />
            <button className=' text-white text-lg font-bold h-12 w-40   bg-black ml-32 flex items-center justify-center'>Shop Now 
                                <GrLinkNext className=' text-lg font-bold'/> 
            </button>
    </div>
  )
}

export default Home
