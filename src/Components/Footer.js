import React from 'react';

export default function Footer() {
  return <div>

<main className=' flex justify-center items-center min-h-[450px] text-sm text-gray-300 mt-2 pt-10  bg-black    '  > 

<div className='  ' > Questions? Call <span className='cursor-pointer hover:underline '> 000-800-040-1843 </span>   
<div className='py-2 grid grid-cols-2 gap-8 sm:grid sm:grid-cols-3 sm:gap-2 md:grid md:grid-cols-4  md:gap-10    lg:grid lg:grid-cols-4  lg:gap-20    ' >
<ul> 

<li className=' py-2  hover:underline cursor-pointer ' > FAQ  </li>
<li className=' py-2 hover:underline cursor-pointer'> Investor Relations    </li>
<li className=' py-2 hover:underline cursor-pointer'> Privacy    </li>
<li className=' py-2 hover:underline cursor-pointer'> Speed Test    </li>

</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Help Centre   </li>
<li className=' py-2 hover:underline cursor-pointer'> Jobs   </li>
<li className=' py-2 hover:underline cursor-pointer'> Cookie Preferences  </li>
<li className=' py-2 hover:underline cursor-pointer'> Legal Notices   </li>

</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Account     </li>
<li className=' py-2 hover:underline cursor-pointer'> Ways to Watch    </li>
<li className=' py-2 hover:underline cursor-pointer'>  Corporate Information    </li>
<li className=' py-2 hover:underline cursor-pointer'> Only on Netflix    </li>

</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Media Centre  </li>
<li className=' py-2 hover:underline cursor-pointer'> Terms of Use  </li>
<li className=' py-2 hover:underline cursor-pointer'> Contact Us  </li>
</ul>
</div>
   <div className='flex  items-center mt-5  ' >
    <select className='bg-black text-white py-3 px-3  text-center  rounded-sm border' name="cars" id="cars">
    <option value="English">🌍 English</option>
    <option value="Hindi">Hindi</option>
   </select>
   </div>
   <div className=' py-6' > Netflix India</div>  
</div>
</main>




      
  </div>;
}
