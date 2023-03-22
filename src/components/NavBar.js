import {Navbar, Container} from "react-boostrap"
import {useState} from "react";



export const NavBar = () =>{

    // To manage what link we are on - we create a class that will hold this information 
    const [activeLink, setActiveLink] = useState('home');
    




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
            <Nav.Link href="#about-me">About-Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
                <a href="https://twitter.com/FatimahwithaH"><img src={''} alt=""/></a>
                <a href="https://twitter.com/FatimahwithaH"><img src={''} alt=""/></a>
                <a href="https://twitter.com/FatimahwithaH"><img src={''} alt=""/></a>
            </div>
            <button className="contact-us-button" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}