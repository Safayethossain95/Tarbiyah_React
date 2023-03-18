import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import {MdLocationOn} from "react-icons/md"
import {FaPhone} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
const BannerbottombarContact = () => {
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
         <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

         <div className="bannerbottompart bannerbottompartother">
         <Row>
         <Col lg={4} data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><MdLocationOn style={{fontSize:"25px"}}/> Location</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                    <p> <a target="_blank" href="https://goo.gl/maps/5gk4AizmgMPtehgP6">40/1, WEST CHAND MIA HOUSING, MOHAMMADPUR.</a> </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><FaPhone style={{transform:"rotate(90deg)",fontSize:"20px"}}/> Phone Number</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                 <p><a href="tel:+88 01841512525">+88 01841512525</a></p>
                                 <p><a href="tel:+88 01841517575">+88 01841517575</a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><AiOutlineMail  style={{fontSize:"25px"}}/> Email Us</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                            <p><a href="mailto:INFO@TARBIYAHINST.COM">INFO@TARBIYAHINST.COM</a></p>
                            <p><a href="mailto:TARBIYAHONLINEMADRASAH@GMAIL.COM">TARBIYAHONLINEMADRASAH@GMAIL.COM</a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                   
                </Row>

         </div>
            
        </div>
    </>
    
  )
}

export default BannerbottombarContact