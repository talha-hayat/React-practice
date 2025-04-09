import axios from 'axios'
import React, { useState } from 'react'

const Weater = () => {
  let [city,setCity] = useState("")
  let [weather , setWeather] = useState(null)
  let [error,setError] = useState(null)
  let API = "6264c2af55653a7b45fcff5bd1cabf4e&units=metric" 

  

  async function search(){
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
      setWeather(response.data)
      setError("")
    }catch{
      setError("Please Enter Correct City Name!")
      setWeather(null)
    }

  }

  return (
    <div className='m-2 h-[97vh] rounded-xl'>

    <div className='relative  mx-1 ml-[-40px] mt-2 h-fit lg:h-auto sm:h-auto'>
         {/*  Search Bar - absolutely positioned over the image */}
         <div className='relative top-4 left-1/2 transform -translate-x-1/2 z-10 w-[80%] flex m-7'>
           <input onChange={(e) =>setCity(e.target.value)} className='border-2 border-blue-500 flex-grow p-2 rounded-l-md' type="text" placeholder="Search..."
           />
           <button onClick={search} className='bg-blue-500 text-white px-4 rounded-r-md'>Search</button>
         </div>
    </div>

        {error && (
          <div className='m-[8%] lg:mx-[25%]  h-auto rounded-lg  lg:w-[50%] border-2 bg-red-300 border-red-700 text-center text-red-900 lg:py-2'>
            {error}
          </div>
        )}

        {weather && (
          <div>
             <div className='m-[7.5%]  h-auto rounded-3xl w-auto  px-[30%]  justify-center  pt-2'>
          <img  className='lg:w-[50%] h-auto  rounded-[50%] object-cover' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>

          </div>
          <div className='m-[1%] my-4 h-auto flex flex-wrap justify-center align-item-center  gap-2'>
          <div className='border-2 border-blue-500  text-blue-500  rounded-lg w-full sm:w-1/2 lg:w-1/3  text-center justify-center text-[1rem] sm:text-[1.5rem] pt-2'>
            Temperature <br />
            <h1 className='text-[1.5rem] sm:text-[3.5rem] text-blue-500 rounded-xl border-blue-500'>{Math.round(weather.main.temp)}°C</h1>
          </div>

          <div className='border-2 border-blue-500  text-blue-500  rounded-lg w-full sm:w-1/2 lg:w-1/3  text-center justify-center text-[1rem] sm:text-[1.5rem] pt-2'>
            Location <br />
            <h1 className='text-[1.5rem] sm:text-[3.5rem] text-blue-500 rounded-xl border-blue-500'>{weather.name}</h1>
          </div>


          
          {/* <div className='border-2 rounded-xl  w-full sm:w-full lg:w-1/3  border-blue-500  text-blue-500'>
            <h1 className='text-[2rem] sm:text-[4.5rem] text-center pt-4'>Friday</h1>
          </div> */}
      </div>
          </div>
        )}
         
    
        


    </div>
  )
}

export default Weater

