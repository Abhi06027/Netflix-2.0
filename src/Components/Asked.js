import React from 'react';

export default function Asked() {
  return <div>
     
      <main className=' flex justify-center items-center flex-col  mt-2 min-h-[300px] bg-black  '  > 
   
<h1 className='  text-white  pb-4  text-xl font-bold ' > Ready to watch? Enter your email to create or restart your membership. </h1>



<div className=' flex justify-center items-center '  > 
<input className='min-w-[500px]  mt-4 h-16  pl-3 ' type="email" placeholder="Email address"/>

<div className='  mt-4 ' >
<a href="https://www.netflix.com/in/">
<button className=' flex justify-center items-center bg-netflixred  hover:bg-red-600 h-16 w-48 text-2xl text-white ' > Get Started     
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1 ml-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
</button>
</a>
</div>
</div>

</main>

  </div>;
}
