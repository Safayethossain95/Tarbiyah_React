import React,{useState,useEffect} from 'react'
import MediumHeading from '../SubComponents/MediumHeading';
import {Row,Col} from 'react-bootstrap'
import { donationAPI } from '../../../utils/DonationPageAPI';
const DonationEvents = () => {
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
        <div className="donationevents" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                <MediumHeading text="Donation Events"/>

                <div className="donationgalllery">
                    <Row>
                        {
                            donationAPI.galleryimg.map((item,key)=>{
                                return(
                                    <Col lg={4}>
                                        <div className="imgcard">
                                            <img className='w-100' src={item.img} alt="" />
                                        </div>
                                    </Col>

                                )
                            })
                        }
                       

                    </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default DonationEvents