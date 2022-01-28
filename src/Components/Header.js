import React from 'react';

export default function Header() {
  return <div>



<div className=' flex justify-between px-8 items-center ' >
<a href="https://www.netflix.com/in/">
  <img className=" w-56 brightness-100  shadow-2xl   "src="./images/netflix.png" alt=""/>
  </a>
  
<div className=' flex space-x-6 px-6 items-center  ' >
  <select className='bg-black text-white py-2 rounded-sm border' name="cars" id="cars">
    <option value="English">🌍English</option>
    <option value="Hindi">Hindi</option>
   </select>
  <div> 
  <a href="https://www.netflix.com/in/">
   <button className='  bg-netflixred  font-bold py-2 px-4  rounded-sm  text-sm text-white ' > Sign in     
  </button>
  </a>
  </div>
  </div>
 
  </div>







  </div>;
}
