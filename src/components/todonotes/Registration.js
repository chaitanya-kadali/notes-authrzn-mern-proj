import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import {Link} from 'react-router-dom';  
const Registration = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(user.password.length<6)
        {
            alert('password must contain 6 letters');
         }
        try{
            axios.post('',user).then(response=>{
                    alert("registered Succesfully!");
                    setUser({name:'',email:'',password:'',dob:''});
                })
        }
        catch(error){
            console.log('Error sending registration request',error);
        }
       
    };

    return (
        <center>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter the username"
                    onChange={changeHandler}
                    value={user.name}
                    name="name"
                /><br />
                <input
                    type="email"
                    placeholder="Enter the email id"
                    onChange={changeHandler}
                    value={user.email}
                    name="email"/>
                    <br/>
                <input
                    type="password"
                    placeholder="Enter the password"
                    onChange={changeHandler}
                    value={user.password}
                    name="password"/>

                    <br/>
                <input
                    type="date"
                    placeholder="Enter the dob"
                    onChange={changeHandler}
                    value={user.dob}
                    name="dob"
                /><br />
                <button type="submit" >Submit</button>
            </form>
            <Link to='/Signup'>Already logged in? click here to sign in</Link>
        </center>
    );
};

export default Registration;