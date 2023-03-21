import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonButton from './SubComponents/CommonButton';
import {AiOutlineCaretDown} from 'react-icons/ai'
import { coursemenuAPI,blogmenuAPI } from '../../utils/NavDropDownAPI';
import DrpDwn from './SubComponents/DrpDwn';
import DrpDonate from './SubComponents/DrpDonate';
const MyNavbar = (props) => {
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
    })
  }, [screenSize])

  const lifting = (myval)=>{
    setdrpdwn(myval)
  }

  const [drpdwn,setdrpdwn] = useState("")

  const func = (myval)=>{
    setdrpdwn(myval)
  } 
  return (
    <>
        <Navbar className='mynavbar' id="mynavbar" expand="lg">

        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini d-flex":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896 d-flex":"myContainerMini d-flex"}>

        <Link to="/"><img src="/assets/images/Common/logo/mainlogo.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Link className="nav-link" onMouseEnter={() => lifting("course")} onMouseLeave={() => lifting("course")} to="/courses">Courses <AiOutlineCaretDown/></Link>
            <Link className="nav-link" to="/aboutus">About Us</Link>
            <Link className="nav-link" to="/notice">Notice</Link>
            <Link className="nav-link" to="/blog"  onMouseEnter={() => lifting("blog")}  onMouseLeave={() => lifting("blog")} >Blog <AiOutlineCaretDown/></Link>
            <Link className="nav-link" to="/donation" onMouseEnter={() => lifting("donation")}  onMouseLeave={() => lifting("donation")}>Donation <AiOutlineCaretDown/></Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
            
            
            </Nav>
            <div className="buttonsdiv d-flex">
                <Button>Login</Button>
                <CommonButton text="Sign Up"/>
            </div>
        </Navbar.Collapse>

          </div>

          
        
        
        
        </Navbar>
        {
          drpdwn=="course"?
          <DrpDwn func={func} api={coursemenuAPI}/>
          :
          drpdwn=="blog"?
          <DrpDwn func={func} api={blogmenuAPI}/>
          :
          drpdwn=="donation"?
          <DrpDonate func={func}/>
          :
          ""
        }
    </>
  )
}

export default MyNavbar