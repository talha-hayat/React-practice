import React from 'react'
import { useFetch } from '../hooks/useFecth'

const Test = () => {
   const {data,error} = useFetch("https://jsonplaceholder.typicode.com/users")
   console.log(data)
   console.log(error)
  return (
    <div>test</div>
  )
}

export default Test