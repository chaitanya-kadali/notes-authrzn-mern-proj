import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
    const[note, Setnote]=useState('');
    const changeHandler=(e)=>{
        Setnote(e.target.value)
    }
    useEffect(() => {
      getNotes();
    }, []);
    const handlesubmit= async()=>{
            try{
              await axios.post('',note).then(response=>{
                alert('successfully added!');
                Setnote('');
              })
            }
            catch(error)
            {
              console.log("error is",error);
            }
    }
    const getNotes=(async)=>{
      try{
        const response= await axios.get('');
        Setnote(response.data);

      }
      catch(error)
      {
        console.log("error is",error);
      }
    }
  return (
    <>
    <div className="Header">
        <p id='Header-Notes'>Notes</p>
    </div>
    <center>
      <input type='text'
       placeholder='Type the task to perform'
        id="note" 
        onChange={changeHandler}
        value={note}/>
        
        <button id="Submit" onClick={handlesubmit}>Submit</button>
        <br/>
        <br/>
        <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </center>
      
        </>

        
  )
}

export default Notes;