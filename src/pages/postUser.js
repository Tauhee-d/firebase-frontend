import React, { useState } from 'react'
import axios from 'axios'

export default function PostUser() {
    const [input, setInput] = useState({
        profile:'',battery:'',device:"",temperature:''
    })
    const postInput = (e) => {
     const name = e.target.name
     const value = e.target.value
     setInput({...input , [name]:value})

    }

    const AddDetails = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8008/api/user",
        {id:input.id,profile:input.profile,battery:input.battery,device:input.device,temperature:input.temperature },

       

        )
        .then(res => {
            console.log("res:",res.data)

        })
        .catch(err => {
            console.log("err:",err);
        })    }

  return (
    <>
    
    <div>
        <h3>Add details</h3>

        <input placeholder='profile' type='text' value={input.profile} onChange={postInput} autoComplete='off' name='profile'/>
        <input placeholder='battery' type='text' value={input.battery} onChange={postInput} autoComplete='off' name='battery'/>
        <input placeholder='device' type='text' value={input.device} onChange={postInput} autoComplete='off'  name='device'/>
        <input placeholder='temperature' type='text' value={input.temperature} onChange={postInput} autoComplete='off' name='temperature'/>
    </div>
    <div>
        <button onClick={AddDetails}>Save</button>
    </div>
    
    </>
  )
}




