import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';


function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {loading,login}=useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        await login(username,password);
    }
  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto' >
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-green-400'>   ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label className='label p-2'><span className='text-base label-text text-black'>Username</span></label>
                    <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className='label p-2'><span className='text-base label-text text-black'>Password</span></label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <Link to='/signUp' className='text-sm hover:underline hover:text-red-600 mt-2 inline-block text-yellow-100'>Don't have any account?</Link>

                <div>
                <button className="btn btn-block btn-sm mt-2 hover:bg-green-700" disabled={loading} >
                {loading?<span className='loading loading-spinner'></span>:'Login'}
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login;


