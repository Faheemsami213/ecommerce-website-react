
import React from 'react'
import img3 from '../images/img3.png'
import { GrLinkNext } from "react-icons/gr";

const Home = () => {
  return (
    <div className=' bg-sky-100 px-10 h-130 flex flex-col  justify-end mb-10 lg:flex  lg:relativ  md:relative '>
       
          <div className=' w-full  flex items-center md:justify-center border md:mt-10'>
                <p className=' reg font-bold text-5xl md:text-7xl'>
                  <span className=' ml-52 md:ml-0'>Feel</span>  <br />
                     <span className='ml-11 md:ml-0' >  Authentic </span> <br />
                 <    span className=' ml-44 md:ml-0'>Peace </span></p>
            </div>
            <img src={img3} alt='model' />
            <button className=' text-white text-lg font-bold h-12 w-40   bg-black ml-32 
                                  flex items-center justify-center  md:absolute md:bottom-52 md:left-80'>
                              Shop Now 
                                <GrLinkNext className=' text-lg font-bold' style={{color:"white",}} /> 
            </button>
    </div>
  )
}

export default Home
