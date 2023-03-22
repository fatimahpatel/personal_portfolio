import {Navbar, Container} from "react-bootstrap"
import {useState, useEffect} from "react";
import logo from '../assets/img/logo.png'



export const NavBar = () =>{

    // To manage what link we are on - we create a class that will hold this information 
    const [activeLink, setActiveLink] = useState('home');

    // detect when the user is scrolling and change colour of background
    //to keep the information on whether or not the user has scrolled, we create a new state
    const[scrolled, setScrolled] = useState(false);

    //create a useEffect to determine if it's been scrolled or not 
    //useEffect is triggered once the user starts scrolling

    useEffect(() =>{
        const onScroll = () =>{
            //window.scrollY - if the height of how much has been scrolled is more than 50 pixels
            if (window.scrollY >50){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        //execute onScroll function when the user is scrolling
        window.addEventListener("scroll", onScroll);

        //remove eventlistener when component is removed from dom 
        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }



  return (
    // className based on what condition scrollY is at
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
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
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('about-me')}>About-Me</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
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