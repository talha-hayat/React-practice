import React from 'react'

import { logo } from '../images'
import { Input } from '@heroui/input'
import MyInput from '../components/Myinput'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/button'

const Signin = () => {
    return (
        <div className='min-h-screen flex sm:flex-row md:flex-wrap lg:mx-auto'>

            <div className='w-[50%] h-[100vh]'>
                <img className='h-[100vh]' src={logo} alt="" />
            </div>


            <div className='w-[50%] flex items-center justify-center min-h-screen'>
                <form className=' w-[60%] h-[400px]'>
                    <h1 className='text-3xl font-semibold text-center'>
                        Login <span className='text-4xl text-red-600'>Account</span>
                    </h1>

                    <Input className='border-2 border-zinc-400 p-3 rounded-xl mt-4' type='email' placeholder='Email Here'/>
                    <MyInput className='  rounded-xl ' type='Password' placeholder='Password' />

                    <div className='flex justify-between px-4'>
                    <p className='text-lg mt-2'>Don't have an <span className='text-red-600 font-bold cursor-pointer hover:underline'><Link to='/signup'>Account</Link></span></p>
                    <p className='text-lg mt-2'>Forget <span className='text-red-600 font-bold cursor-pointer hover:underline'>Password</span></p>
                    </div>

                    <Button className='hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600  font-bold rounded-lg p-4 w-[100%] mt-4 text-white text-lg bg-red-600'>
                        Create Account
                    </Button>

                </form>
            </div>

        </div>
    )
}

export default Signin