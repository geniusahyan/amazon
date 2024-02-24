import React from 'react'
import Logo from '/Logo.png'

const Signin = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center' >
        <img src={Logo} className='text-center w-40' alt="logo" />
        <form className='flex-col border gap-3 p-2 w-[20rem] rounded flex' action="">
            <h2 className='font-bold mb-3' >Sign Up</h2>

            <label className='text-[0.8rem] ml-1 -mb-1 ' htmlFor="">FullName</label>
            <input type="text" placeholder="write your Name" className=" rounded px-3 placeholder:text-gray-400 h-9 text-sm mb-2 bg-white input-info w-full max-w-xs" />

            <label className='text-[0.8rem] ml-1 -mb-1 ' htmlFor="">Email</label>
            <input type="email" placeholder="write your email" className=" rounded px-3 placeholder:text-gray-400 h-9 text-sm mb-2 bg-white input-info w-full max-w-xs" />

            <label className='text-[0.8rem] ml-1 -mb-1 ' htmlFor="">Password</label>
            <input type="email" placeholder="Enter your password" className=" rounded px-3 placeholder:text-gray-400 h-9 text-sm mb-2 bg-white input-info w-full max-w-xs" />


            <button className="h-8 px-3 text-white w-full ml-auto mr-auto rounded bg-yellow-500 ">Create Account in Amazon</button>

            <p className='text-[0.7rem] ' >
            By continuing, you agree to Amazon's <a href=""> Conditions of Use a</a> and <a href="">Privacy Notice.</a>
            </p>
        </form>
        <div className="flex flex-col w-80">
            <div className="divider divider-accent">Already have an Account ?</div>
        </div>
        <button className="h-8 px-3 text-white w-full ml-auto mr-auto rounded max-w-[14rem] bg-yellow-500 ">Login</button>

    </div>
  )
}

export default Signin