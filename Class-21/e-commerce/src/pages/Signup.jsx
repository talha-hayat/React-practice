import React, { useState } from 'react'

import { logo } from '../images'
import { Input } from '@heroui/input'
import MyInput from '../Components/MyInput'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/button'
import { supabase } from '../Supabase/supabase'
import { Bounce, toast } from 'react-toastify'
import MyToast from '../Components/MyToast'






const Signup = () => {
    const[user,setUser] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const controll =async (e)=>{
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            // name:user,
            email: email,
            password:password,
        })

        if(error){
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });

        }else{
            toast.success('Signup Sussecfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
    }

    return (
        <div className='md:min-h-screen h-full flex flex-col md:flex-row md:mx-auto'>

            <div className='md:w-[50%] w-full h-[300px] md:h-[100vh]'>
                <img src={logo} alt="" />
            </div>


            <div className='md:w-[50%] flex md:items-center  justify-center md:min-h-screen p-4'>
                <form onSubmit={controll} className=' md:w-[60%] md:h-[400px] h-fit w-full md:p-4'>
                    <h1 className='text-3xl font-semibold text-center'>
                        Create an <span className='text-4xl text-red-600'>Account</span>
                    </h1>

                    <Input onChange={(e)=>setUser(e.target.value)} className='border-2 border-zinc-400  rounded-xl mt-4' type='text' placeholder='First Name'/>
                    <Input onChange={(e)=>setEmail(e.target.value)} className='border-2 border-zinc-400  rounded-xl mt-4' type='email' placeholder='Email Here'/>
                    <MyInput prp={(e)=>setPassword(e.target.value)} className='  rounded-xl ' type='Password' placeholder='Password' />

                    

                    <div className='flex md:justify-between flex-col md:flex-row px-4'>
                    <p className='text-lg mt-2'>Already have an <span className='text-red-600 font-bold cursor-pointer hover:underline'><Link to='/Signin'>Account</Link></span></p>
                    <p className='text-lg mt-2'>Forget <span className='text-red-600 font-bold cursor-pointer hover:underline'>Password</span></p>
                    </div>

                    <Button type='submit' className='hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600 text-lg font-bold rounded-lg p-4 w-[100%] mt-4 text-white bg-red-600'>
                        Create Account
                    </Button>
                    <MyToast />

                </form>
            </div>

        </div>
    )
}

export default Signup