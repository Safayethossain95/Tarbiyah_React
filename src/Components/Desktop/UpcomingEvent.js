import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import CommonButton from './SubComponents/CommonButton';
import { Link } from 'react-router-dom';
import { upcomingEventApi } from '../../utils/UpcomingEventAPI';
import { Accordion, Card } from 'react-bootstrap';
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
                    <Col lg={10} className="m-auto">
                    {
                         upcomingEventApi.slice(0,4).map((item,key)=>{
                            const counter = 0;
                             return(
                                <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
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
                                            
                                        </div>
                                    </div>
                                    <div className="right">
                                        
                                    </div>
                                </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                {item.detailsbig}
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                            )
                            
                         })
                    }
               
                </Col>
                       
                    </Row>
                </div>
            </div>
    </>
  )
}

export default UpcomingEvent