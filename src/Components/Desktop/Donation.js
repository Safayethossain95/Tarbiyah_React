import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import CommonButton from './SubComponents/CommonButton';
const Donation = () => {
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
            <div className="donationsection"  >
                <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                    <Row className='align-items-center'>
                        <Col lg={6} data-aos-delay="400" data-aos="fade-right" data-aos-duration="1800">                        
                            <div className="img">
                                <img src="./assets/images/Homepage/donation/mainimg.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={6} data-aos-delay="400" data-aos="fade-left" data-aos-duration="1800" style={{paddingLeft:"35px"}}>                        
                            <MediumHeading text="Care for a donation!"/>
                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.</p>
                            <div className="iconwithtext">
                                <div className="icon">
                                    <img src="./assets/images/Homepage/donation/smallicon1.png" alt="smallicon1.png" />
                                </div>
                                <div className="textpartright">
                                    <p>Ut et imperdiet tempor eget sed. Eu augue consectetur adipiscing neque mauris placerat nec diam.</p>
                                </div>
                            </div>
                            <div className="iconwithtext">
                                <div className="icon">
                                    <img src="./assets/images/Homepage/donation/smallicon1.png" alt="smallicon1.png" />
                                </div>
                                <div className="textpartright">
                                    <p>Sit etiam sed egestas enim. Turpis sed ante facilisi sapien dictum. Ultrices elementum</p>
                                </div>
                            </div>
                            <div className="buttondiv d-flex">
                                <CommonButton text="Donate Now"/>
                                <Button>Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                 
                </div>
            </div>
    </>
  )
}

export default Donation