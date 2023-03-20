import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonButton from '../Desktop/SubComponents/CommonButton';
const MyNavMb = () => {
  
  return (
    <>
        <Navbar className='mynavbarmb' id="mynavbar2" expand="lg">

        <div className="mycontainermb flexwrapnav">

        <Link to="/"><img src="./assets/images/Common/logo/mainlogo.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          </div>
          <div className="mycontainermb">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/aboutus">About Us</Link>
            <Link className="nav-link" to="/notice">Notice</Link>
            <Link className="nav-link" to="/portfolio">Blog</Link>
            <Link className="nav-link" to="/donation">Donation</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
            
            
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

export default MyNavMb