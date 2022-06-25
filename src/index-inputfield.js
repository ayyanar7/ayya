import React from 'react';
import ReactDOM from 'react-dom/client';
 
import InputFieldsUsage from './InputFieldsUsage';
import Themeusage from './Themeusage';

 //theme settings 

 import * as themes from './Themes/globals/schema.json';
 import { setToLS } from './Themes/globals/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Themes = () => {
  setToLS('all-themes', themes.default);
  return(
   <div></div>
  )
}
root.render(
 
  <React.StrictMode>
    <Themes />
    <Themeusage />
    <InputFieldsUsage />
    
  </React.StrictMode>
);

 