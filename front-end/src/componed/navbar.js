import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../helpers/localStorage';




function NavbarScroll() {
    

const navigate = useNavigate();
const {pathname} = useLocation();
const token = getLocalStorage('token')
  return (
   
    // <Navbar expand="lg" className="bg-body-tertiary" sticky='top' >
    //   <Container fluid style={{border:"1px solid red", display:"flex", justifyContent:"space-around"}}> 
    //     <div>
    //     <Navbar.Brand >MyStore</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link as={Link}  to='/'>Home</Nav.Link>
    //        {!token ? <Nav.Link as={Link} to = '/login'>Login</Nav.Link> : null } 
    //      </Nav>
    //      </Navbar.Collapse>
    //      </div>
        
    //       {pathname === "/" &&<Form style={{border:"1px solid red"}} className="d-lg-flex">
                       
    //       <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button> 
    //         </Form>} 
    //     <div>
    //     <Navbar.Collapse id="navbarScroll">
    //     <ShoppingBasketIcon sx={{ fontSize: 40 }} style={{cursor:"pointer"}} onClick={()=>navigate('/cart')}/>

    //     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Navbar.Collapse>
    //       </div> 
    //   </Container>
    // </Navbar>
  

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand >MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ display:"flex", justifyContent:"space-between",flexWrap:"wrap"}} >
          <Nav >
          <Nav.Link as={Link}  to='/'>Home</Nav.Link>
          </Nav>
          <Nav>
          {!token ? <Nav.Link as={Link} to = '/login'>Login</Nav.Link> :  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;