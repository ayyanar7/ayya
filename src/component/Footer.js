import React from 'react'
import {Twitter, Facebook, Instagram, LinkedIn} from '@mui/icons-material'
  import './css/footerstyle.css'
const Footer=()=>{
    return (
       
      <footer>
        <div className ='container container-flex'>
          <div className='footericons'>
<Twitter className ='icon'/>
<Facebook className ='icon'/>
<Instagram className ='icon'/>
<LinkedIn className ='icon'/>
        </div>
        <div className='copyright'>
<p> All rights reserved &copy;</p>
        </div>
        </div>
      </footer>
     
    ) 
 
}
    

export default Footer;