import React from 'react';

export default function Header() {
  return <div>



<div className=' flex justify-between px-5 pl-2 items-center ' >
<a href="https://www.netflix.com/in/">
  <img className=" w-32 sm:w-36 md:w-52 lg:w-56 brightness-100  shadow-2xl   "src="./images/netflix.png" alt=""/>
  </a>
  
<div className=' flex space-x-4  items-center  ' >
  <select className='bg-black text-white w-24 h-8 sm:w-24 sm:h-8 md:w-24 md:h-9 lg:w-24 lg:h-9 rounded-sm border' name="cars" id="cars">
    <option value="English">🌍English</option>
    <option value="Hindi">Hindi</option>
   </select> 
  <div> 
  <a href="https://www.netflix.com/in/">
   <button className='  bg-netflixred  font-bold  w-16 h-8 sm:16 sm:h-8 md:w-20 md:h-9 lg:w-20 lg:h-9 rounded-sm  text-sm text-white ' > Sign in     
  </button>
  </a>
  </div>
  </div>
 
  </div>







  </div>;
}
