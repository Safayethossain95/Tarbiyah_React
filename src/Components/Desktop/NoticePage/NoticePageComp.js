import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from '../SubComponents/MediumHeading';
import { upcomingEventApi } from '../../../utils/UpcomingEventAPI';
import { Link } from 'react-router-dom';
import {AiFillCaretDown} from "react-icons/ai"
import $ from 'jquery'
import {faChevronUp,faChevronDown} from 'react-icons/fa'
import { Accordion, Card } from 'react-bootstrap';
const NoticePageComp = () => {
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

      
  return (
    <>
        <div className="noticepageComp upcomingevent">
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
            <MediumHeading text="Notice"/>
            <Row>
                <Col lg={10} className="m-auto">
                    {
                         upcomingEventApi.map((item,key)=>{
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

export default NoticePageComp