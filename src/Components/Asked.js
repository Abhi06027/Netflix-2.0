import React from 'react';

export default function Asked() {
  return <div>
     
      <main className=' flex justify-center items-center flex-col  mt-2 min-h-[400px] sm:min-h-[400px] md:sm:min-h-[450px]  lg:min-h-[550px] bg-black  '  > 
   
<h1 className='  text-white text-center px-5 sm:px-5 md:px-44 lg:px-5   text-lg sm:text-lg md:text-xl lg:text-xl max-w-3xl  font-bold leading-tight  ' > Ready to watch? Enter your email to create or restart your membership. </h1>



<div className=' flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center '  > 
<input className='min-w-[300px] sm:min-w-[500px]  md:min-w-[500px]   lg:min-w-[500px] mt-4 h-12  lg:h-16  pl-3 ' type="email" placeholder="Email address"/>

<div className='  mt-4 ' >
<a href="https://www.netflix.com/in/">
<button className=' flex justify-center items-center bg-netflixred  hover:bg-red-600  h-10 w-32 text-base   lg:h-16 lg:w-48 text-2xl text-white ' > Get Started     
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  lg:h-6 lg:w-6 mt-1 ml-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
</button>
</a>
</div>
</div>

</main>

  </div>;
}
