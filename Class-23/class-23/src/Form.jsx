import { Formik, useFormik } from 'formik'
import React from 'react'
import *as Yup from 'yup'

const Form = () => {

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },

        validationSchema: Yup.object(
            {
                name: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                password: Yup.string().required("Required")
            }
        ),

        onSubmit: (value)=>{
                console.log(value)
        }
    })

  return (
    <div>
        <form className='mx-auto w-[60%] mt-[8%] p-4' onSubmit={formik.handleSubmit}>
            <h1 className='text-center text-3xl font-bold text-green-500'>Formik and Yup</h1>

            <input onChange={formik.handleChange} name='name' type="text" placeholder='Name here' className='border-2 border-black w-[100%] p-3 rounded-xl mt-4'/>
            <br />
            {
                formik.touched.name && formik.errors.name && (
                    <p className='text-red-500 pl-2'>{formik.errors.name}</p>
                )
            }

            <input onChange={formik.handleChange} name='email' type="email" placeholder='Email' className='border-2 border-black w-[100%] p-3 rounded-xl mt-4'/>
            {
                formik.touched.email && formik.errors.email &&(
                    <p className='text-red-500 pl-2'>{formik.errors.email}</p>
                )
            }
            <input onChange={formik.handleChange} name='password' type="password" placeholder='Password' className='border-2 border-black w-[100%] p-3 rounded-xl mt-4'/>
            {
                formik.touched.password && formik.errors.password && (
                    <p className='text-red-500 pl-2'>{formik.errors.password}</p>
                )
            }
            <button type='submit' className='border-2 border-green-500 w-[120px] p-2 rounded-xl mt-4 text-green-500 text-xl'>Add</button>
        </form>
    </div>
  )
}

export default Form