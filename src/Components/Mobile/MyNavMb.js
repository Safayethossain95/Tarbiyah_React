import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,Button,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonButton from '../Desktop/SubComponents/CommonButton';
import { navbarmbAPI } from '../../utils/NavbarMbAPI';
import Accordion from 'react-bootstrap/Accordion';
const MyNavMb = () => {
  
  return (
    <>
        <Navbar className='mynavbarmb' id="mynavbar2" expand="lg">

        <div className="mycontainermb flexwrapnav">

        <Link to="/"><img src="/assets/images/Common/logo/mainlogo.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          </div>
          <div className="mycontainermb">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/aboutus">About Us</Link>
            <Link className="nav-link" to="/notice">Notice</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/donation">Donation</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
            </Nav>
           
            
              {

                navbarmbAPI.map((item,key)=>{
                  if(item.dropdwn==true){

                    return (
                  <Accordion defaultActiveKey="0" >
                                  <Accordion.Item eventKey={item.id} style={{border:"0"}}>
                                  <Accordion.Header><Link className="nav-link" to="/courses">{item.heading}</Link></Accordion.Header>
                                  
                       { item.dropdowndata.map((item2,key2)=>{
                        if(item2.length!==0){
                          return(
                                        <Accordion.Body key={key2}>
                                        <img className='w-100' src={item2.img} alt="" />
                                        </Accordion.Body>                     
                                 
                                 )
                                 
                                }
                                else{
                                  return(
                                    <Card>{item.heading}</Card>
                          )
                        }
                      })
                    }
                      </Accordion.Item>
                    </Accordion>
  
  
                    )
                  }
                  else{
                    return(
                      
                        <Card eventKey={item.id} style={{border:"0"}}>
                        <Link className="nav-link" style={{height:"53px",paddingLeft:"20px",lineHeight:"53px"}} to={item.link}>{item.heading}</Link>
                        
                      </Card>
                    
                    )
                  }
                })
                  
                
                      
                         
              }
            
                    
               
              
           
           
            
            
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