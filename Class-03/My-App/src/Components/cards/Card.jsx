import { useState } from 'react'
import './Card.css'


export function Card(){
    let price = 899
    let [count , setCount] = useState(0)

    function increment(){
        setCount(++count)
        // console.log(count)
    }
    return(
        <div className='container'>

            <div className='Img-C'>
                <img className='Img' src="https://img.drz.lazcdn.com/static/pk/p/33828ea0c8a49d66af723784c830b833.jpg_400x400q80.jpg" alt="" />
            </div>

            <div className='ctn'>
                <p>M19 Airpods TWS (True Wireless Stereo) Bluetooth Earphones Headset With HiFi Stereo Sound & Touch Control System (Connected With All Bluetooth Devices).</p>
                <div className="price-ctn">
                <p className='price'>Price:{price}</p>
                <p>Veiws:{count}</p>
                </div>
                <button className='btn' onClick={increment}>Buy</button>
            </div>
        </div>
    )
}