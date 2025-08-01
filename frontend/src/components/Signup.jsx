import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className="flex h-screen items-center justify-center ">
        <div  className="w-[600px] border-[2px] shadow-md p-5 rounded-md">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-2">
      <span>Name</span>
      <br />
      <input type="text"
      placeholder="Enter Your Full Name"
      className="w-80 px-3 py-1 border rounded-md ouline-none"
      {...register("name", { required: true })}/>
      <br />
      {errors.name && 
      ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
    <div className="mt-4 space-y-2">
      <span>E-mail</span>
      <br />
      <input type="email"
      placeholder="Enter Your E-mail"
      className="w-80 px-3 py-1 border rounded-md ouline-none"
      {...register("email", { required: true })}/>
      <br />
      {errors.email && 
      ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
    {/*password */}
    <div className="mt-4 space-y-2">
      <span>Password</span>
      <br />
      <input type="password"
      placeholder="Enter Your Password"
      className="w-80 px-3 py-1 border rounded-md ouline-none"
      {...register("password", { required: true })}/>
      <br />
      {errors.password && 
      ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
  {/*button */}
  <div className="flex justify-around mt-4">
    <button className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200">Signup</button>
    
    <p className="text-l ">
       Have Account?{" "} <button  className="underline text-blue-600 cursor-pointer"
       onClick={()=>document.getElementById("my_modal_3").showModal()}>
      Login
      </button>{" "}
      <Login />
    </p>
  </div>
  </form>
  </div>
</div>

    </div>
    </>
  )
}

export default Signup