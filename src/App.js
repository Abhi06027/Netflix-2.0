
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
import {Helmet} from "react-helmet";

function App() {
  return (
   

   <div className=' bg-goli' >
    <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <link rel="canonical" href="http://mysite.com/example" />
         <meta name="description" content="
Netflix - Watch TV Shows Online, Watch Movies Online" />
            </Helmet>
   
    <div className=' bg-black ' >
    <div className='  w-full      md:min-h-[700px] lg:min-h-[700px] bg-bottom bg-cover lg:bg-center  '  style  ={{ backgroundImage: `url(${herobgs})`  }}> 
   
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
