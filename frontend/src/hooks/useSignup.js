import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
    const[loading, setLoading] = useState(false);
    const {setAuthUser} =useAuthContext();

    const signup=async({fullName,username,password,confirmpassword,gender})=>{
        const success=handleInputError({fullName,username,password,confirmpassword,gender});
        if(!success){
            return false;
        }

        setLoading(true);
        try {
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{
                   "Content-Type":"application/json"
                },
                body:JSON.stringify({fullName,username,password,confirmpassword,gender}),
            });
            const data=await res.json();

            if(data.error){
                throw new Error(data.error)
            }
            // localstorage
            localStorage.setItem("chat-user",JSON.stringify(data))

            // context
            setAuthUser(data);
            
            
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading,signup};
}

export default useSignup;

function handleInputError({fullName,username,password,confirmpassword,gender}){
    if(!fullName || !username || !password || !confirmpassword || !gender){
        toast.error('All fields are required')
        return false
    }

    if(password!==confirmpassword){
        toast.error('Password and confirm password do not match')
        return false
    }

    if(password.length<6){
        toast.error('Password should be atleast 6 characters long')
        return false
    }

    return true;
}