import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";


// register api call 

export const signUp =async(values)=>{

   let {data}= await axios.post("http://localhost:7000/auth/register",values)
  return data
} ;


export const updatePass =async(values)=>{
  let token = getLocalStorage('token')
  let {data}= await axios.put("http://localhost:7000/auth/updatePwd",values, {headers:{
    "Authorization":token
  }})
  return data
}

export const login = async (values)=>{
    let {data}= await axios.post("http://localhost:7000/auth/login",values)
    return data
  } ;