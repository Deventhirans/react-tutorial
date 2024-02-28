import React from "react";

class Bike extends React.Component{  
    constructor(){
        super();
        this.state = {color:"Red",Brand:"Honda"}
    }
    render(){
            return<>
            <h1>My color is{this.state.color} and model is {this.state.Brand}</h1>
                <button onClick={()=>{this.setState(previousState=>{return{...previousState,color:"Blue"}})}} >Change</button></>
        }
}
export default Bike;