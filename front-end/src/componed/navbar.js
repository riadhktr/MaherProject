import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link,  useNavigate } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../helpers/localStorage';
import { useSelector } from 'react-redux';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));




function NavbarScroll() {
    

const navigate = useNavigate();
// const {pathname} = useLocation();
const token = getLocalStorage('token')
const user = getLocalStorage('User')  

const {cart} = useSelector((state)=>state.shopCart)
console.log(cart);

// logout function 

const logout = ()=>{
  removeLocalStorage('token');
  removeLocalStorage('User');
  navigate('/')
}
return (
   
  
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
      <Navbar.Brand >MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ display:"flex", justifyContent:"space-between",flexWrap:"wrap"}} >
          <Nav >
            { 
            user?.role === "admin" ?<Nav.Link as={Link}  to='/admin'>Admin</Nav.Link>
            :<Nav.Link as={Link}  to='/'>Home</Nav.Link>  
            }
          
          </Nav>
          <Nav style={{width:"30%",display:"flex" ,justifyContent:"space-around", alignItems:"center"}}>
          {!token || user?.role==="admin" ? <Nav.Link as={Link} to = '/login'>Login</Nav.Link>  
          :  <NavDropdown title={`Welcome ${user?.firstName} ${user?.lastName}`} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/addProd">Add Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Update Password
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/myOrder" >My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>logout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown> }
             <IconButton aria-label="cart"onClick={()=>navigate('/cart')}>
             <StyledBadge badgeContent={ cart.length} color="secondary">
             <ShoppingCartIcon  />
             </StyledBadge>
             </IconButton>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;