import React from 'react'
import './css/servicestyle.css';
import Card from './utils/card'
import ServiceData from './data/ServiceData'
  const Services=()=>{
    return (
      <>
      <h1>Services Page</h1>
      <div className='services'>
        {ServiceData.map((values)=>{
          return (<Card
          ctitle ={values.title}
          cimgsrc ={values.imgsrc}
          cdesc = {values.desc}
          cbtnservice = {values.btnservice}
          />
            );
        })}

 
      </div>
      </>
    ) 
 
};
    

export default Services;