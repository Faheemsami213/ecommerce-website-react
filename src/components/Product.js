import React from 'react'

import img2 from '../images/img2.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img7 from '../images/img7.png'
const Product = () => {
  return (
    <div className='  bg-sky-100 px-3  mb-10 flex flex-col items-center justify-center'>
            <p className=' font-bold text-5xl text-center'> Featured Collections</p>
            <div className=' flex flex-wrap justify-around  mt-12 w-4/5 '>
                    <div className=' w-36 h-40 mb-2'>
                            <img src={img2} alt='' />
                    </div>
                    <div className=' w-36 h-40 mb-2'>
                    <img src={img4} alt='' />

                    </div>
                    <div className=' w-36 h-40 mb-2'>
                    <img src={img5} alt='' />

                    </div>
                    <div className=' w-36 h-40 mb-2'>
                    <img src={img7} alt='' />

                    </div>
                   
                
            </div>
    </div>
  )
}

export default Product
