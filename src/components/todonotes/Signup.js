import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [user,setUser]=useState({name:'',password:''});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
};
const submitHandler=(e)=>
{
  e.preventDefault();
  if(user.password.length<6)
  {
    alert('password must contain 6 letters');
  }
  try{
    const response= await axios.post('',user).then(
      response=>{ 
        alert("Signed in succesfully");
        window.location.href='/Notes';

      }
    )
  }
  catch(error)
  {
    console.log('error occured:',error);
  }

}

  return (
    <div className='signup-div'>
      <center>
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='Enter User Id'
        value={user.name}
        name="name"
        onChange={changeHandler}/>
        <br/>
         <input 
        type="password"
        placeholder='Enter Password'
        value={user.password}
        name="password"
        onChange={changeHandler}/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
      <br/>
      <Link to='/'>Not Registred? Go to register</Link>
      </center>
    </div>
  )
}

export default Signup;