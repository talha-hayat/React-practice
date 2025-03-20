import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    let [arr,setArr] = useState("0")

    function increment(){
        setArr(++arr)
        console.log(arr)
    }

    // function run(){
    //     console.log("run")
    // }
    // // run()

    // useEffect(()=>{
    //     run()
    // },[])

    async function apicalling(){
       let value = await axios.get("https://jsonplaceholder.typicode.com/todos")
       console.log(value.data)
    }

    useEffect(()=>{
        apicalling()
    },[])

    
  return (
    <div>
        <h1>{arr}</h1>
        <button onClick={increment}>Count</button>

        {/* fetch data  */}
        <h1>Fetch data</h1>

    </div>
  )
}

export default Home