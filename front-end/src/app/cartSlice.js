
import {createSlice} from "@reduxjs/toolkit";


const initialState ={

    
    cart :[]
   
}


const cartSlice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        addToCart:(state,action)=>{
            let exist = state.cart.findIndex((item)=> item._id === action.payload._id);

            if(exist >= 0 && state.cart[exist].quantity >= 1 ){
                state.cart[exist].count += 1 ;
                state.cart[exist].quantity -= 1;
            }if(exist === -1){
                state.cart.unshift(action.payload)
                state.cart[0].quantity -=1
            }
            
        
        },
        increase:(state,action)=>{
            state.cart.map((item)=>{
                if(item._id === action.payload._id && action.payload.quantity >= 1 ){
                    item.count+=1
                    item.quantity -=1
                    return item
                }else {
                    return item
                }
            })
        },
        decreese:(state,action)=>{
            state.cart.map((item)=>{
                if(item._id === action.payload._id ){
                    item.count -=1
                    item.quantity +=1
                    return item
                }else{
                    return item
                }
            })
        },
        emptyCart :(state,action)=>{
            state.cart =[]
        },  
        deleteElement:(state,action)=>{
            state.cart =state.cart.filter((item)=> item._id !== action.payload)
        }
        

    }

})

export const {addToCart, increase , decreese,emptyCart,deleteElement} = cartSlice.actions ;

export default cartSlice.reducer ;