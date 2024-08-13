

import Register from './componed/register';
import Login from './componed/login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Product from './componed/registerProd';
import UserRoute from './privateRoutes/userRoute';
import AdminRoute from './privateRoutes/adminRoute';
import AdminDash from './pages/adminDashboard';
import AddProd from './componed/addProduct';
import Detail from './componed/detaille';
// import ShoppingCart from './componed/shoppingCard';

import NavbarScroll from './componed/navbar';
import ShoppingCart from './componed/shoppingCard';
import RegisterCat from './componed/registerCat';
import { getLocalStorage } from './helpers/localStorage';
import ConfirmPay from './componed/confirmPay';
import UserOrder from './componed/userOrder';
import UpdatePwd from './componed/updatePwd';
import MyProducts from './componed/myProducts';
import AdminProdList from './pages/AdminProdList';

function App() {

  let user = getLocalStorage("User");
  let location = useLocation();
  return (
    <div className='app'>

{user?.role ==="user" || !location.pathname.includes('admin') ?
  <NavbarScroll />:null}
      
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>

        <Route element={<UserRoute/>}>
        <Route path="/addProd" element={<AddProd/>}/>
        <Route path="/pay" element={<ConfirmPay/>}/>
        <Route path="/myOrder" element={<UserOrder/>}/>
        <Route path="/updatePwd" element={<UpdatePwd/>}/>
        <Route path='/myprod' element={<MyProducts/>}/>
        </Route>

        <Route element={<AdminRoute/>}>

         <Route path='/admin/*' element={<AdminDash/>}>
         <Route index element={<AdminProdList/>}/>
         <Route path="newProd" element={<AddProd/>}/>
         <Route path='newCat' element={<RegisterCat/>}/>
         
         </Route>
        </Route>
      </Routes>
      </div>
   
  );
}

export default App;
