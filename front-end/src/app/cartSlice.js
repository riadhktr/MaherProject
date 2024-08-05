
import {createSlice} from "@reduxjs/toolkit";


const initialState ={

    
    cart :[],
    show:false
   
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
                }else{
                    return item
                }
            })
        },
        setShow:(state ,action)=>{
             state.show = !state.show
        }
        

    }

})

export const {addToCart, increase , decreese,setShow} = cartSlice.actions ;

export default cartSlice.reducer ;