import axios from "axios";
import { use, useEffect, useState } from "react";

export function useFetch(api){

    console.log(api)

    const [data,setData] = useState(null)
    const [error , setError] = useState(null)

    useEffect(()=>{
        axios.get(api)
        .then((res)=>{setData(res.data)})
        .catch((err)=>{setError(err)})
    },[api])

    return{data,error}
}