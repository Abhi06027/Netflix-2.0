
import './App.css';
import herobgs from './herobgs.jpg';
import Header from './Components/Header';
import Main from './Components/Main';
import TvMain from './Components/TvMain';
import Phone from './Components/Phone';
import Appletv from './Components/Appletv';
import Children from './Components/Children';
import Asked from './Components/Asked';
import Footer from './Components/Footer';


function App() {
  return (
   

   <div className=' bg-goli' >
  
   
    <div className=' bg-black  '  >
    <div className='  w-full min-h-[700px]    '  style  ={{ backgroundImage: `url(${herobgs})`  }}> 
   
    <Header/>
     <Main/>
    
   <head>
          <title>   Netflix clone</title>
          
           <link rel="icon" href="/images/favicon.png"  />
        </head>
        
        </div>
    </div>
    <TvMain/>
    <Phone/>
    <Appletv/>
    <Children/>
    <Asked/>
    <Footer/>
    </div>
   
   
   
   
   
   
   
   
 



   
  
  );
}

export default App;