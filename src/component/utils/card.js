import React from 'react';
import {NavLink} from 'react-router-dom';

const Card=(props)=>{
  // console.log('priniting props img: '+{props.cimgsrc}); 
return(
<>
<div className='card'>
          <h2> {props.ctitle}</h2>
          {console.log('printing image url')}
          {console.log(props.cimgsrc)}
          <img src= {props.cimgsrc} alt='service1' className='cardImg' />
          <p> {props.cdesc}</p>
        <div className='btnbox'>
          <div className='btn'>
            <NavLink to='/About' className='readMore'> {props.cbtnservice}</NavLink>
          </div>
        </div>
        </div>
</>
)


}

export default Card;