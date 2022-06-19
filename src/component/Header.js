import React from 'react'
import logo from './images/logo-min.svg'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'
import CallIcon from '@mui/icons-material/Call'
import LoginIcon from '@mui/icons-material/Login'
import './css/liststyle.css'
const Header =()=>{
    return (
         <>
         <header>
              <div className= "container container-flex" >
              <div className ="logoContainer">
                   <img src={logo} alt="logo" className = "logo" />
              </div>
              <nav>
              <div className='list'>
                                
<NavLink  to="/" className= {({isActive})=> (isActive ? 'activeItem' : 'listItem')}>Home</NavLink>
<NavLink to="/About" className={({isActive})=> (isActive ? 'activeItem' : 'listItem')}>About</NavLink>
<NavLink to="/Services" className= {({isActive})=> (isActive ? 'activeItem' : 'listItem')}>Services</NavLink>
<NavLink to="/Contact" className= {({isActive})=> (isActive ? 'activeItem' : 'listItem')}>Contact</NavLink>
<NavLink to="/Policy" className= {({isActive})=> (isActive ? 'activeItem' : 'listItem')}>Policy</NavLink>
              
</div>    
              </nav>
              <nav>
              <div className='icons'>
               
               
               <NavLink to="/Search" className= {({isActive})=> (isActive ? 'activeicon' : 'icon')}> <SearchIcon /> </NavLink>
               <NavLink to="/Contact" className= {({isActive})=> (isActive ? 'activeicon' : 'icon')}> <CallIcon /> </NavLink>

               <NavLink to="/Login" className= {({isActive})=> (isActive ? 'activeicon' : 'icon')}> <LoginIcon /> </NavLink>
              </div>
              </nav>

                  
              </div>
             
         </header>
         </>
      
    ) 
 
};
    

export default Header;

