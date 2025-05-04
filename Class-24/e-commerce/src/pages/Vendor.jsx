import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'
import React, { useState } from 'react'
import { supabase } from '../Supabase/supabase'

const Vendor = () => {
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        const { error } = await supabase
            .from('carlist')
            .insert({ 
                name,
                model,
                price,
                description
             })
        if(error){
            console.log(error)
        }else{
            alert("Added")
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmit} className='w-[70%] mx-auto mt-[5%]'>
                <h1 className='text-5xl text-black text-center font-bold '>Sell Your car here</h1>
                <Input onChange={(e) => setName(e.target.value)} placeholder='Car Name' className='mt-4' />
                <Input onChange={(e) => setModel(e.target.value)} placeholder='Car Model' className='mt-4' />
                <Input onChange={(e) => setPrice(e.target.value)} placeholder='Car Price' className='mt-4' />
                <Textarea onChange={(e) => setDescription(e.target.value)} placeholder='Description...' className='mt-4' />
                <Button type='submit' className='mt-4 '>ADD</Button>
            </form>
        </div>
    )
}

export default Vendor