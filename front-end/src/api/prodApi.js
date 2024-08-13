import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";



// get all products

export const allProducts = async()=>{

    let {data} = await axios.get("http://localhost:7000/auth/allProd");
    return data
};
// every user will get his own products
export const myProd = async()=>{
    let token = getLocalStorage('token')
    let {data} = await axios.get("http://localhost:7000/auth/myProd",{headers:{
        "Authorization":token
    }});
    return data
};
// get product with _id from params 

export const singleProd = async(ID)=>{
    let {data} = await axios.get(`http://localhost:7000/auth/prodById/${ID}`)
    return data
}
// add a new product
export const addProds = async (values)=>{

    let token = getLocalStorage('token')
    let {data} = await axios.post("http://localhost:7000/auth/addprod" , values,{headers:{
        "Authorization":token,
        'Content-Type': 'multipart/form-data'
    }}) ;
    return data
} ;

export const getCategory = async ()=>{
   
    
    let{data} = await axios.get("http://localhost:7000/auth/allCatt")
    return data
} ;

// get card

export const bagCart = async (values)=>{
    let token = getLocalStorage('token')   
    let{data} = await axios.post("http://localhost:7000/auth/creeteCart" , values,{headers:{
        "Authorization":token
    }})
    return data
} ;


export const userCart =async()=>{
    let token = getLocalStorage('token')   
    let{data} = await axios.get("http://localhost:7000/auth/userCart" ,{headers:{
        "Authorization":token
    }})
    return data
   
}



// remove a product 

export const deleteProd = async(id)=>{
 

    let token = getLocalStorage('token');
    let {data} = await axios.delete(`http://localhost:7000/auth/deleteprod/${id}`,{
        headers:{
            "Authorization":token
        }
    })

    return data
     
}