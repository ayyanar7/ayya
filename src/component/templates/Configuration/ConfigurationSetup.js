import React from 'react'
 import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
 import Card from '../../utils/card'
import { DB_CONFIG_ITEM_DATA, DB_CONFIG_ITEM_IMG } from '../../utils/constants/Global'
//import ServiceData from './data/ServiceData'
  const ConfigurationSetup =()=>{
    let configJsondata =  localStorage.getItem(DB_CONFIG_ITEM_DATA);
    let configdata = JSON.parse(configJsondata);
    console.log("getting resp: "+configdata);
let rows =  configdata.rows;
console.log("getting rows: "+rows);
let cols =  configdata.cols;
console.log("getting cols: "+cols);
let jsonimags =  localStorage.getItem(DB_CONFIG_ITEM_IMG);
let imagsformdata = JSON.parse(jsonimags);
console.log(imagsformdata);
 
let imgsrc = null;
let temparray = null;
let binaryData = null;
//if(imagsformdata.key == 'jsonarry'){
  console.log("------"+imagsformdata.value)
  temparray =imagsformdata.value;
  console.log("---***--"+temparray)
 var size = Object.keys(rows).length;

 rows.forEach(row => {
  console.log("row[0] "+row[0])
  var objprod = temparray.find(element => element.name === row[0]);
  row.push(objprod.data);          
  
});

  
  temparray.forEach(element => {
    console.log("---6666---"+element)
    console.log("---7777---"+element.name)
    console.log("---7777---"+element.data)

    imgsrc = element.data;//Buffer.from(element)
      
  });
 
//}
//imagsformdata = JSON.parse(imagsformdata);
//console.log(imagsformdata);
//console.log(imagsformdata[0]+ ', '+ imagsformdata[1]);


//URL.createObjectURL(binaryData);
console.log(imgsrc);
// let imgsrc = null;
// for(var pair of imagsformdata.entries()) {
//   console.log(pair[0]+ ', '+ pair[1]);
//   imgsrc = URL.createObjectURL(binaryData);
// }
 
//imagsformdata.getItem(key);
    return (
      <>
      <h1>Configuration Setup</h1>
      <div className='services'>
        {rows.map((row)=>{

// if(row.imgsrc == null){
//   row.imgsrc = AddPhotoAlternateRoundedIcon;
// }

          return (<Card
          ctitle ={row[3] +' '+row[1]}
          cimgsrc = {row[10]}
          cdesc = {row[8]+' '+row[9]} 
          cbtnservice = {row[2]}
          />
            );
        })}

 
      </div>
      </>
    ) 
 
};
    

export default ConfigurationSetup;