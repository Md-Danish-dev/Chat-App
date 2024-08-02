import React from 'react'

function SignUp() {
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto' >
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
                <span className='text-green-400'> ChatApp</span>
            </h1>
            <form >
                <div>
                    <label className='label p-2'><span className='text-base label-text'>Full Name</span></label>
                    <input type="text" placeholder="Enter Full Name" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text'>Username</span></label>
                    <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text'>Password</span></label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text'>Confirm Password</span></label>
                    <input type="password" placeholder="Enter Confirm password" className="input input-bordered w-full h-10" />
                </div>

                <div className='flex gap-10'>
                    <label className='label gap-2 cursor-pointer '><span>Male</span>
                    <input type="checkbox" className='checkbox white'/>
                    </label>
                    <label className='label gap-2 cursor-pointer '><span>Female</span>
                    <input type="checkbox" className='checkbox white'/>
                    </label>
                    
                </div>
                <a href="#" className='text-sm hover:underline hover:text-red-600 mt-2 inline-block'>Already have an account?</a>

                <div>
                <button className="btn btn-block btn-sm mt-2 hover:bg-green-700">SignUp</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;