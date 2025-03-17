import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todo = () => {

    var [data,setData] = useState([])
    
    

  useEffect(()=>{
    const apicalling = async ()=>{
        var response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(response.data)
    }
    apicalling()
    console.log(data)
    },[])


  return (
    <div>
        <button className='bg-blue-500 rounded-xl p-2 m-4'>Fetch</button>
    </div>
  )
}

export default Todo