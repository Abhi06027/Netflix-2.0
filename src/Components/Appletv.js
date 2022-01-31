import React from 'react';
// import pile from './pile.m4v'
export default function Appletv() {
  return <div>

<main className=' flex flex-col justify-center items-center sm:flex sm:flex-col  sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center  lg:flex lg:flex-row  lg:justify-center lg:items-center mt-2 text-white min-h-[450px] sm:min-h-[500px] md:sm:min-h-[650px]  lg:min-h-[500px] bg-black space-x-5 px-5  '  > 
<div>
<h1 className='  text-2xl sm:text-2xl  md:text-4xl lg:text-5xl mb-3 lg:mb-5  font-bold text-center lg:text-left'> Watch everywhere. </h1>
<p className='text-lg sm:text-lg md:text-xl lg:text-2xl  mb-3 sm:mb-3 md:mb-1 lg:mb-5   lg:max-w-lg text-center lg:text-left font-bold leading-tight ' > Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.  </p>

</div>

      <img className=" max-w-[350px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[550px]  z-10    " src="./images/device-pile-in.png" alt="" />
          {/* <video className='   top-[74px] left-[0px] object-fill    ' src={pile} width="370" height="500" controls loop autoPlay muted  > </video> */}
   
</main>





  </div>;
}
