import React,{useEffect,useState,useRef} from 'react'
import {Row,Col} from 'react-bootstrap'
import { motion } from "framer-motion";
import { courseCardAPI } from '../../../utils/CoursesCardAPI';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import CoursesFirstTabSubComp from '../SubComponents/CoursesFirstTabSubComp';
import Accordion from 'react-bootstrap/Accordion';
const CourseDetailsRecentComp = (props) => {

    const videoRef = useRef(null); // reference to video element
    const [playing, setPlaying] = useState(false);
    
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

      const handleOverlayClick=()=>{
        setPlaying(true);
        videoRef.current.play();
      }
  return (
    <>
        <motion.div className="coursedetailsrecentcomp" initial={{ y : 40,opacity:0.4 }}
        whileInView={{ y:0,opacity:1}}
        transition={{delay:0,duration:1.2}}>
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                {
                    courseCardAPI.map((item,key)=>{
                        if(item.id==props.myid){
                            return(
                                <Row key={key}>
                                    <Col lg={8}>
                                        <div className="video">
                                            <video ref={videoRef} width="100%" height="auto" controls >
                                            <source src="/assets/videos/singlecoursevideo.mp4" type="video/mp4"/>
                                            </video>
                                            {!playing && (
                                            <div className="overlay" onClick={handleOverlayClick}>
                                            <img src="/assets/images/CourseDetailsPage/play.png" alt="Play Button" />
                                            </div>
                                        )}
                                        </div>
                                        <div className="restofthecontent">
                                            <h3>{item.head}</h3>

                                            <Row style={{alignItems:"center",marginBottom:"30px"}}>
                                                <Col style={{flex:"1 1 40%"}}>
                                                    <div className="flexwrap myborderright">
                                                        <div className="teacherimg">
                                                            <img src={item.imgurl} alt="" />
                                                        </div>
                                                        <div className="teachername">
                                                            <p>{item.instructorname}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col style={{flex:"1 1 30%"}}>
                                                    <div className="flexwrap">

                                                    <div className="enrolled">
                                                        <p>902 Enrolled Student</p>
                                                    </div>
                                                    </div>
                                                </Col>
                                                <Col style={{flex:"1 1 30%"}}>
                                                <div className="rating">
                                                <div className="wrapper d-flex">
                                                    <span>{item.rating}</span>
                                                    {
                                                        item.rating>4?
                                                        <>
                                                        <div className="stars">
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                        </div>
                                                        
                                                        
                                                        </>
                                                        :
                                                        ""
                                                    }
                                                    <span> &#40;30&#41;</span>
                                                    </div>
                                                </div>
                                                </Col>
                                            </Row>

                                            <div className="mytabs">
                                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                <Row>
                                                    <Col sm={12}>
                                                    <div className="navtabswrapper">
                                                        <Nav variant="pills" style={{justifyContent:"center"}}>
                                                            <Nav.Item>
                                                            <Nav.Link eventKey="first">Description</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                            <Nav.Link eventKey="second">Instructors</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                            <Nav.Link eventKey="third">Reviews</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </div>
                                                    </Col>
                                                    <Col sm={12}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="first" className="firsttabcontent">
                                                            <CoursesFirstTabSubComp heading={item.description.title} paragraph={item.description.detail}/>

                                                            <div className="content">
                                                                <h2>Course Content</h2>
                                                            </div>
                                                            <Accordion defaultActiveKey="0">
                                                            {
                                                                item.coursecontent.map((item2,key2)=>{
                                                                    return(
                                                                        <Accordion.Item eventKey={key2}>
                                                                        <Accordion.Header>{item2.heading}</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <ul>
                                                                        {item2.body.map((item3,key3)=>{
                                                                            return(
                                                                                <li key={key3}>
                                                                                {item3.name}
                                                                            </li>
                                                                            )
                                                                        })}

                                                                            </ul>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                    )
                                                                })
                                                            }
                                                            </Accordion>

                                                            <CoursesFirstTabSubComp heading={item.curriculum.title} paragraph={item.curriculum.detail}/>
                                                            <CoursesFirstTabSubComp heading={item.certification.title} paragraph={item.certification.detail}/>
                                                            
                                                            
                                                        
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                        abcdrf
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third">
                                                        abcdrfsdf
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                    </Col>
                                                </Row>
                                                </Tab.Container>

                                            </div>

                                                
                                                
                                            
                                        </div>

                                    </Col>
                                </Row>
                            )
                        }
                    })
                }
                
            </div>


        </motion.div>
    </>
  )
}

export default CourseDetailsRecentComp