import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const CopyrightMb = () => {
  return (
    <>

        <div className="copyrightsectionmb">
            <div className="mycontainermb">
            

                <Row style={{height:"100%",alignItems:"center"}} >
                   
                    <Col xs={12} className="text-center pt-4">
                    <div className="socials text-center">
                        
                        <a href="https://www.facebook.com/Bssit"><BsFacebook/></a>
                        <div className="icondiv">
                            <BsYoutube/>
                        </div>
                        <div className="icondiv">
                            <BsTwitter/>
                        </div>
                        <div className="icondiv">
                            <FaLinkedinIn/>
                        </div>
                        </div>
                        
                    </Col>
                    <Col xs={12}>
                        <div className="left text-center">
                            <p>© 2023. BSSIT. All right reserved</p>
                        </div>
                    </Col>
                    
                </Row>
                </div>
           
        </div>


    </>
  )
}

export default CopyrightMb