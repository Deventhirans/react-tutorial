import { useState } from "react";

function MyForm(){
    //const [name,setName] = useState("")
    //const [age,setAge] = useState("")
    //const [email,setMail] = useState("")
    const [Inputs,setInput] = useState({phone :"+91",email:"@gmail.com",about:"I am a Student"})
    //console.log("current name",name)
     function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted')
       // console.log("current name",name,age,email);
       console.log("current name",Inputs);
     }
     function handleChange(e){
        const name =e.target.name
        const value = e.target.value
        setInput((previousState)=> {return{...previousState,[name] :value } })

     }
    return <form onSubmit={handleSubmit}>
        <label>enter your name<input type="text" name="name" onChange={handleChange}/></label><br/>
        <label>enter your age<input type="text" name="age" onChange={handleChange}/></label><br/>
        <label>enter your Email<input type="text" name="email" onChange={handleChange}value ={Inputs.email}/></label><br/>
        <label>enter your phone<input type="text" name="phone" onChange={handleChange} value={Inputs.phone}/></label><br/>
        <label>enter your country<select type="text" name="country" onChange={handleChange} value={Inputs.country}>
           <option value="">select</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Chaina">Chaina</option></select></label><br/>
        <label>enter about you<textarea name = "about" value={Inputs.about} onChange={handleChange}/></label>


        <input type="submit" value="submit form"/>
    </form>
}
export default MyForm;