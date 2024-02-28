// import './Application.css'

import { useEffect, useState } from "react";
import { Button , EditableText,InputGroup,Toaster} from "@blueprintjs/core";

const AppToster = Toaster.create({
    position:"top"
})
function Application() {
    const [users, setUser] = useState([]);
    const [newName, setnewName] = useState("");
    const [newEmail, setnewEmail] = useState("");
    const [newWebsite, setnewWebsite] = useState("");
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((json)=> setUser(json))
    },[])
    function addUser(){
        const name= newName.trim();
        const email= newEmail.trim();
        const website= newWebsite.trim();
        
        if(name && email && website){
            fetch("https://jsonplaceholder.typicode.com/users",
            {
                method : "POST",
                body: JSON.stringify({
                    name,
                    email,
                    website,
                }),
                headers:{
                    "Content-type": "application/json;charset=UTF-8" 
                }
            }
            ).then((response)=>response.json())
            .then(data => {
                setUser([...users,data])
                AppToster.show({
                    message:"user added successfully",
                    intent : 'success',
                    timeout:3000
                })
                setnewName("")
                setnewEmail("")
                setnewWebsite("")

            })
                
        }
    }
    function onChangeHandler(id,key,value){
        setUser((users)=>{
           return users.map(user=>{
                return user.id===id?{...user,[key]:value}:user;
            })
        })
    }
    function updateUser(id){
        const user=users.find((user)=>user.id===id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
            method : "PUT",
            body: JSON.stringify(user),
            headers:{
                "Content-type": "application/json;charset=UTF-8" 
            }
        }
        ).then((response)=>response.json())
        .then(data => {
            AppToster.show({
                message:"user updated successfully",
                intent : 'success',
                timeout:3000
            })

        })
    }
    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
            method : "DELETE",
            
        })
        .then(response => response.json())
        .then(data => {
            setUser((users)=>{
               return users.filter(user=>user.id !== id)
            })
            AppToster.show({
                message:"user deleted successfully",
                intent : 'success',
                timeout:3000
            })

        })
    }
    return (
        <div className="Application">
            <table className='bp4-html-table modifier'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {users.map(user=>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td><EditableText onChange={value=> onChangeHandler(user.id,'email',value)}value={user.email}/></td>
                        <td><EditableText onChange={value=> onChangeHandler(user.id,'website',value)}value={user.website}/></td>
                            <td>
                                <Button intent='primary' onClick={()=> updateUser(user.id)}>Update</Button>
                                &nbsp;
                                <Button intent='danger' onClick={()=> deleteUser(user.id)}>Delete</Button> 
                            </td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td><InputGroup
                            value={newName}
                            onChange={(e)=>setnewName(e.target.value)}
                            placeholder="Enter name..."
                             />
                        
                        </td>
                        <td><InputGroup
                            value={newEmail}
                            onChange={(e)=>setnewEmail(e.target.value)}
                            placeholder="Enter email..." />
                             
                        
                        </td>
                        <td><InputGroup
                            value={newWebsite}
                            onChange={(e)=>setnewWebsite(e.target.value)}
                            placeholder="Enter Website..."
                             />
                        
                        </td>
                        <td >
                            <Button intent='success'onClick={addUser}>Add User</Button>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )

}
export default Application;