import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router";
function NavBar({ categories }) {
  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm">
 
     
      <Container>
     
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark fs-3">
          
          TecnoFast 🚀
        </Navbar.Brand>

       
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-dark"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown
              title={<span className="text-dark fw-bold">Categorias</span>}
              id="basic-nav-dropdown"
            >
              {categories.map((category) => (
                <NavDropdown.Item
                  as={NavLink}
                  to={`/category/${category.categoryName}`}
                  key={category.id}
                  
                  className="text-dark"
                >
                  {category.categoryName}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

  
        <CartWidget quantity={5} />
      </Container>
    </Navbar>
  );
}

export default NavBar;
