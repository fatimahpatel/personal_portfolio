import {Navbar, Container} from "react-boostrap"
export const NavBar = () =>{

    return (
        import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src = {''} alt = "logo"/>
        </Navbar.Brand>

        {/* Images on the mobile menu when image is minimised */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className = "navbar-toggler-icon"></span>
            </Navbar.Toggle>
         
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
    )

}