import 'bootstrap/dist/css/bootstrap.min.css';
import "./app1.css"
import React from 'react';
import Navigation from './components/Navigation';
import Name from './components/Name';
import Address from './components/Address';
import Contact from './components/Contact';
import Photo from './components/Photo';
    function  APP () {
      return (
        <div className="red">
      
      <Navigation></Navigation> 
      
       <h1 className='b'>PORTFILO</h1> 
       <h2 className='c'>WELCOME TO MY PAGE</h2>
      <Photo></Photo>
       <Name></Name>  
       <Address></Address>  
       <Contact></Contact>
       
    
    
    
   
       </div>
      );
    }
    
    export default APP;
