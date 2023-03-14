import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import MPCcard from './SubComponents/MPCcard'
import { courseCardAPI,popularCoursesCardAPI,featuredCoursesCardAPI } from '../../utils/CoursesCardAPI'
import CommonButton from './SubComponents/CommonButton'
import {Nav,Tab} from 'react-bootstrap'
import MediumHeading from './SubComponents/MediumHeading'
const MostPopularCourses = () => {

    

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
        <div className="mostpopularcoursessection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
           
           


            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="align-items-center">
                <Col sm={6} className="mostpopcoursesheading">
                    <MediumHeading text="Our Most Popular Courses"/>
                    <p>10,000+ unique online course list designs</p>
                </Col>
                <Col sm={6}>
                <Nav variant="pills justify-content-end">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Recent Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Popular Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Featured Courses</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                
            </Row>
            <Row>
            <Col sm={12}>
                <Tab.Content style={{marginTop:"20px"}}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                courseCardAPI.map((item,key)=>{
                                    return(
                                        <Col lg={4} key={key} data-aos-delay="400" data-aos="fade-in" data-aos-duration="1800">
                                            <MPCcard apiprops={item}/>
                                        </Col>
                                    )
                                })
                            }
                        
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                                popularCoursesCardAPI.map((item,key)=>{
                                    return(
                                        <Col lg={4} key={key}>
                                            <MPCcard apiprops={item}/>
                                        </Col>
                                    )
                                })
                            }
                        
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                featuredCoursesCardAPI.map((item,key)=>{
                                    return(
                                        <Col lg={4} key={key}>
                                            <MPCcard apiprops={item}/>
                                        </Col>
                                    )
                                })
                            }
                        
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
                
                <div className="allcoursesbutton">
                    <CommonButton text="View All Courses"/>
                </div>
            </div>
        
           
        </div>
    </>
  )
}

export default MostPopularCourses