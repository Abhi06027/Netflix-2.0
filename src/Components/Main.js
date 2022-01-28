import React from 'react';

export default function Main() {
  return <div>

<main className='flex justify-center mt-32 items-center flex-col flex-1 text-center px-20   '  >
<h1 className=' text-6xl  font-bold text-white max-w-2xl  brightness-200  '  > Unlimited movies, TV shows and more.</h1>
<h2 className=' text-2xl mt-5  text-white brightness-200 '  > Watch anywhere. Cancel anytime..</h2>
<p className=' text-xl mt-5  text-white  brightness-200'  >Ready to watch? Enter your email to create or restart your membership.</p>

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
