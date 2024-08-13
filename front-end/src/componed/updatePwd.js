import React, { useState } from 'react'
import { updatePass } from '../api/authApi'
import {toast} from "react-toastify"
import { removeLocalStorage } from '../helpers/localStorage'
import {useNavigate} from "react-router-dom"
const UpdatePwd = () => {

    const [values , setValues] = useState({
        password:"",
        confirmPassword:""
    })
    const navigate = useNavigate();

    const handelChange =(e)=>{
        setValues({...values , [e.target.name] : e.target.value})
        
    }

  const handelUpdate =()=>{

    updatePass(values)
    .then(()=>{
        toast.success("password updated with sucess ")
        removeLocalStorage('token')
        removeLocalStorage('User')
        navigate('/')
    })
    .catch((err)=>{
        console.log(err);
        toast.error(err.response.data.msg)  
        
    })
  }
    
  return (
    <div>
        <label>password</label>
        <input type='password' name="password" onChange={handelChange}/>
        <label>confirm</label>
        <input type='password' name="confirmPassword" onChange={handelChange}/>
        <button onClick={()=>handelUpdate()}>Save</button>

    </div>
  )
}

export default UpdatePwd