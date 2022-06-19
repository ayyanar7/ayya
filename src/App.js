 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Policy from './component/Policy';
import About from './component/About';
import Services from './component/Services';
import Error from './component/Error';
import Header from './component/Header';
import LeftPanel from './component/LeftPanel';
import {Helmet} from 'react-helmet'
import Footer from './component/Footer';
import Login from './component/templates/Login';
import Search from './component/templates/Search';
 import ConfigurationMain from './component/templates/Configuration/ConfigurationMain'
 import ConfigurationSetup from './component/templates/Configuration/ConfigurationSetup'
 import Settings from './component/templates/Settings'
 import GlobalContextProvider from './component/utils/constants/GlobalContext'
import Combx from './component/utils/ComboBox/Combx';
 function App() {
    
  return (
     
    <> 
  
    <Helmet>
 <meta charSet='utf-8'/>
<title> GST VYAPAR Power</title>
<meta name='viewport' content = 'width=device-width, initial-scale=1'></meta>
</Helmet>
 
<GlobalContextProvider>
<Header /> 
    <LeftPanel />
</GlobalContextProvider>
     
  
   <Routes>
   <Route   exact path= "/" element = {<Home/>} />
    <Route   path= "/Home" element = {<Home/>} />
    <Route   path= "/Policy" element = {<Policy/>} />
    <Route   path= "/Contact" element = {<Contact/>} />
    <Route   path= "/About" element = {<About/>}/>
    <Route   path= "/Services" element = {<Services/>}/>
    <Route   path= "/Search" element = {<Search/>}/>
    <Route   path= "/Login" element = {<Login/>}/>
    <Route   path= "/ConfigurationSetup" element = {<ConfigurationSetup/>}/>
    <Route   path= "/ConfigurationMain" element = {<ConfigurationMain/>}/>
    <Route   path= "/Settings" element = {<Settings/>}/>
    <Route     element = {<Error/>}/>
    {/* <Route    element = {<Error/>}/> */}
  </Routes>
   <Footer/>
   </>
  )
}

export default App;
