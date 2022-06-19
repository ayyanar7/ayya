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
let imagsformdata =  localStorage.getItem(DB_CONFIG_ITEM_IMG);
console.log(imagsformdata);
imagsformdata = JSON.parse(imagsformdata);
console.log(imagsformdata);
console.log(imagsformdata[0]+ ', '+ imagsformdata[1]);

let imgsrc = null;
for(var pair of imagsformdata.entries()) {
  console.log(pair[0]+ ', '+ pair[1]);
  imgsrc = URL.createObjectURL(pair[1]);
}
 
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
          cimgsrc = {imgsrc}
          cdesc = {row[9]}
          cbtnservice = {row[2]}
          />
            );
        })}

 
      </div>
      </>
    ) 
 
};
    

export default ConfigurationSetup;