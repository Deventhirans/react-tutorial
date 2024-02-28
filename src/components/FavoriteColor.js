import {useState}from "react";
function FavoriteColor(){
    //let color = 'Blue'
    const [color, setColor]= useState('Blue')
    return<>
     <h1>My favorite color is {color}</h1>
            <button onClick={()=>{setColor('red')}}>Change color</button>
            </>
}  
export default FavoriteColor;   
