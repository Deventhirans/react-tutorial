import {useState}from "react";

function Scooter(){
//    const[color,setColor]= useState("Red")
//    const[Brand,setBrand]=useState("Honda")
//    const[Module,setModule]=useState("Activa 6G")
//    const[Year,setYear]=useState("2020")
      const [Scooter,setScooter]=useState(
        {
            color:"red",
            Brand:"Honda",
            Module:"Activa 6G",
            Year:"2020"
    }     

)

function updateColor(){
    setScooter(previousState =>{
        return{...previousState,color:"Blue"}
    })
}

console.log('current State',Scooter)

    return<>
    <h1>My Scooter</h1>
    <p>color: {Scooter.color}</p>
    <p>Brand: {Scooter.Brand}</p>
    <p>Module: {Scooter.Module} </p>
    <p>Year: {Scooter.Year}</p>
    <button onClick={updateColor}>Change</button>
    </>


}
export default Scooter;