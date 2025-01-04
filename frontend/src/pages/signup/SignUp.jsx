import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

function SignUp() {
    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmpassword:'',
        gender:''
    });

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender});
    }
    const {loading,signup}=useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);
        await signup(inputs);
    }
    
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto' >
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
                <span className='text-green-400'> ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'><span className='text-base label-text text-black'>Full Name</span></label>
                    <input type="text" placeholder="Enter Full Name" className="input input-bordered w-full h-10 text-white" 
                    value={inputs.fullName}
                    onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text text-black'>Username</span></label>
                    <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10 text-white"
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs,username:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text text-black'>Password</span></label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10 text-white"
                    value={inputs.password}
                    onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text text-black '>Confirm Password</span></label>
                    <input
                      type="password"
                      placeholder="Enter Confirm password"
                      className="input input-bordered w-full h-10 text-white"
                      value={inputs.confirmpassword}
                      onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})} />
                </div>

                <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender}/>

                {/* <div className='flex gap-10'>
                    <label className='label gap-2 cursor-pointer text-black'><span>Male</span>
                    <input type="checkbox" className='checkbox black outline-2'/>
                    </label>
                    <label className='label gap-2 cursor-pointer text-black'><span>Female</span>
                    <input type="checkbox" className='checkbox white'/>
                    </label>
                    
                </div> */}
                
                <Link to='/login' className='text-sm hover:underline hover:text-red-600 mt-2 inline-block text-yellow-100'>Already have an account?</Link>

                <div>
                <button className="btn btn-block btn-sm mt-2 hover:bg-green-700" disabled={loading} >
                    {loading?<span className='loading loading-spinner'></span>:'SignUp'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;