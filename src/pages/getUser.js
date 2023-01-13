import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetUser() {
    const [data,setData] = useState('')
    useEffect(()=> {

        axios.get("http://localhost:8008/api/users")
        .then((res) => {
            console.log("res:",res.data)
            setData(res.data)
        }).catch((err) => {
            console.log(err.message)
        });
    })

    const Table = data.map((data,index)=> {
        return(
            <tr>
                <td>{data.id}</td>
                <td>{data.battery}</td>
                <td>{data.device}</td>
                <td>{data.profile}</td>
                <td>{data.temperature}</td>
            </tr>
        )
    })

   

    return (
    <div>

<table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Battery</th>
              <th>Device</th>
              <th>Temperature</th>
             
          </tr>
        </thead>
        <tbody>
          {Table}
        </tbody>
        
      </table>

    </div>
  )
}
