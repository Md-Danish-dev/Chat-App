import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { set } from "mongoose";
import toast from "react-hot-toast";

const useLogin =()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login =async(username,password)=>{
        const success=handleInputError(username,password);
        if(!success){
            return false;
        }
        setLoading(true);
        try {
            const res=await fetch("/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password}),
            })
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading,login};
}

export default useLogin;

function handleInputError(username,password){
    if(!username || !password){
        toast.error('All fields are required');
        return false;
    }
    return true;
}