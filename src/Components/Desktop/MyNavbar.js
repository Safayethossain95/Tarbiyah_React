import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonButton from './SubComponents/CommonButton';
const MyNavbar = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
        console.log(screenSize.dynamicWidth)
    })
  }, [screenSize])
  return (
    <>
        <Navbar className='mynavbar' id="mynavbar" expand="lg">

        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini d-flex":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896 d-flex":"myContainerMini d-flex"}>

        <Link to="/"><img src="./assets/images/Common/logo/mainlogo.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Link className="nav-link" to="/">Courses</Link>
            <Link className="nav-link" to="/aboutus">About Us</Link>
            <Link className="nav-link" to="/services">Notice</Link>
            <Link className="nav-link" to="/portfolio">Blog</Link>
            <Link className="nav-link" to="/pricing">Donation</Link>
            <Link className="nav-link" to="/blog">Contact Us</Link>
            
            
            </Nav>
            <div className="buttonsdiv d-flex">
                <Button>Login</Button>
                <CommonButton text="Sign Up"/>
            </div>
        </Navbar.Collapse>

          </div>
        
        
        
        </Navbar>
    </>
  )
}

export default MyNavbar