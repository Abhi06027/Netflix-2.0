import React from 'react';

export default function TvMain() {
  return <div >
<main className=' flex flex-col  justify-center items-center sm:flex sm:flex-col  sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center  lg:flex lg:flex-row  lg:justify-center lg:items-center mt-2 text-white  min-h-[450px] sm:min-h-[500px] md:sm:min-h-[650px]  lg:min-h-[500px] bg-black space-x-5 px-6 '  > 
<div   >
<h1 className='  text-2xl sm:text-2xl  md:text-4xl lg:text-5xl text-center sm:text-center lg:text-left mb-3 sm:mb-3 md:mb-3 lg:mb-5  font-bold ' >  Enjoy on your TV. </h1>
<p className=' text-lg sm:text-lg md:text-xl  lg:text-2xl lg:max-w-lg text-center lg:text-left font-bold leading-tight  ' > Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.  </p>

</div>

<img className=" max-w-[320px] sm:max-w-[300px] md:max-w-[500px]  lg:max-w-[500px]   pb-6 "src="./images/tv.png" alt=""/>

</main>




  </div>;
}
