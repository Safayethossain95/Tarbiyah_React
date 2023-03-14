import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import CommonButton from './SubComponents/CommonButton';

const BrandsLogos = () => {
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
        <div className="brandslogossection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                {/* <marquee behavior="smooth" direction="left"> */}
                    <MediumHeading text="Our Network"/>
                        <div className="marquee">
                            <div className="track">
                            <Row>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                <Col lg={2}>

                                    <img src="./assets/images/Homepage/brands/Spotify.png" alt="" />
                                </Col>
                                
                                
                            </Row>

                            </div>
                        </div>

                        
                    
                {/* </marquee> */}
            </div>
        </div>
    </>
  )
}

export default BrandsLogos