import React from 'react';
    import Slider from './Slider.js'
import './App.css';

function App() {

 const [val,setVal] = React.useState({
   'first': 0,
   'second':0,
   'third':0
 });
 function setSlider(event)
 {
   const {name,value} = event.target;
   setVal(prevVal=>{
     return ({
       ...prevVal,
       [name]: value
     })
   });

 }
const p =[];
Object.keys(val).forEach(function(x){
  p.push(parseInt(val[x]));

})



  return (
    <div>
      <div className="container bars">
        <Slider SetSlider= {setSlider} Value={val.first} Name="first" Color="Red"/>

        <Slider SetSlider= {setSlider} Value={val.second} Name="second" Color="Green"/>

        <Slider SetSlider= {setSlider} Value={val.third} Name="third" Color="Blue"/>

      </div>
      <div style={{color : 'rgb(f,g,h)'}} className="container color">
       hello
      </div>

    </div>
  );
}

export default App;
