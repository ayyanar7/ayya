import React, {useContext } from 'react' 

import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import { NavLink } from 'react-router-dom';
import {GlobalContext} from './utils/constants/GlobalContext'

import './css/leftpaneStyle.css'
const LeftPanel =()=>{
    const { variableOne, Url } = useContext(GlobalContext);
    console.log(" variableOne : "+variableOne);
    console.log(" Url : "+Url);
    return (
         <>
          
         <nav>
         <div className = "tab">        
           
               <NavLink to="/Settings" className= "tablinks"> <SettingsIcon /> </NavLink>
               <NavLink to="/Search" className= "tablinks" > <SearchIcon /> </NavLink>

               <NavLink to="/ConfigurationMain" className= "tablinks"> <PhonelinkSetupIcon /> </NavLink>
             
         </div>
         </nav>  
        
         </>
      
    ) 
 
};
    

export default LeftPanel;

