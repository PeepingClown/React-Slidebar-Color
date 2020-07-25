import React from 'react';
    import Slider from './Slider.js'
import './App.css';

function App() {

 const [val,setVal] = React.useState({
   'first': 0,
   'second':0,
   'third':0
 });
 const[hov,setHov] = React.useState(true);
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

 function colorHover(){
   setHov(false);
 }
 function colorHover1(){
   setHov(true);
 }
const p =[];
Object.keys(val).forEach(function(x){
  p.push(parseInt(val[x]));

})

const c = {
  backgroundColor: 'rgb('+p[0]+','+p[1]+','+p[2]+')',
  boxShadow : '10px 10px 40px rgba('+p[0]+','+p[1]+','+p[2]+',0.4)'
}
const t = {
  backgroundColor: 'rgb('+p[0]+','+p[1]+','+p[2]+')',
  boxShadow : '15px 15px 50px rgba('+p[0]+','+p[1]+','+p[2]+',0.45)',
  transform: 'scale(1.01)'
}


  return (
    <div>
      <div className="container bars">
        <Slider SetSlider= {setSlider} Value={val.first} Name="first" Color="Red" num={val.first}/>
        <Slider SetSlider= {setSlider} Value={val.second} Name="second" Color="Green" num={val.second}/>
        <Slider SetSlider= {setSlider} Value={val.third} Name="third" Color="Blue" num={val.third}/>
      </div>
      <div style={hov?c:t} onMouseEnter={colorHover} onMouseLeave={colorHover1} className="container color" />

    </div>
  );
}

export default App;
