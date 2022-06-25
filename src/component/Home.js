import React from 'react'
import {NavLink} from 'react-router-dom';
import homeimg from './images/logo.jpg';
import './css/homeabout.css';

  const Home=()=>{
     

    return (
      <div className ='mainSection'>
       <div className ='contentbox'>
       


      <h1>Learning today!</h1>
      <p> Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn </p>
      <div className ='btnbox'><div className = 'btn'>
        <NavLink to="/About" className = "readMore">Read More</NavLink>
        </div>
        </div>
       
        </div>
 <div className = 'imgContainer'>
          <img src={homeimg} alt='home' />
        </div>
      </div>
      
    ) 
 
};
    

export default Home;