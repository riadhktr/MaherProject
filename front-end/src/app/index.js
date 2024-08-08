import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


export default configureStore({
    reducer:{
        "shopCart":cartSlice,
        "produit": productSlice
    }
})