import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import CommonButton from './SubComponents/CommonButton';
import { Link } from 'react-router-dom';
import { upcomingEventApi } from '../../utils/UpcomingEventAPI';
const UpcomingEvent = () => {
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
            <div className="upcomingevent" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
            
                <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                    <MediumHeading text="Upcoming Event"/>

                    <Row>
                        {
                            upcomingEventApi.map((item,key)=>{
                                return(
                                    <Col lg={10} key={key} className="m-auto" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="upcomingCard">
                                        <div className="left">
                                                <div className="flexwrap">
                                                    <h3>{item.date}</h3>
                                                    <p>{item.month}</p>
                                                </div>
                                        </div>
                                        <div className="middle">
                                            <div className="flexwrapmiddle">
                                                <h3>{item.mainheading}</h3>
                                                <p>{item.details}</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <Link to='/'>{item.readmoretext}</Link>
                                        </div>
                                    </div>
                                   
                                
                                     </Col>
                                )
                            })
                        }
                       
                    </Row>
                </div>
            </div>
    </>
  )
}

export default UpcomingEvent