import React,{useEffect,useState,useRef} from 'react'
import {Row,Col} from 'react-bootstrap'
import { motion } from "framer-motion";
import { courseCardAPI,popularCoursesCardAPI } from '../../../utils/CoursesCardAPI';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import CoursesFirstTabSubComp from '../SubComponents/CoursesFirstTabSubComp';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from "@ramonak/react-progress-bar";
import Slider from "react-slick";
import CommonButton from '../../../Components/Desktop/SubComponents/CommonButton'
const CourseDetailsFeaturedComp = (props) => {

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
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
        )
      };
  return (
    <>
        <motion.div className="coursedetailsrecentcomp" initial={{ y : 40,opacity:0.4 }}
        whileInView={{ y:0,opacity:1}}
        transition={{delay:0,duration:1.2}}>
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                {
                    popularCoursesCardAPI.map((item,key)=>{
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
                                                        item.rating>=4?
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
                                                        item.rating>=3?
                                                        <>
                                                        <div className="stars">
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                        </div>
                                                        
                                                        
                                                        </>
                                                        :
                                                        item.rating>=2?
                                                        <>
                                                        <div className="stars">
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                        </div>
                                                        
                                                        
                                                        </>
                                                        :
                                                        item.rating>=1?
                                                        <>
                                                        <div className="stars">
                                                        <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                        <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
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
                                                        <Tab.Pane eventKey="second" className="secondtabcontent">
                                                            
                                                            <div className="content">
                                                                <h2>{item.instructors.heading}</h2>
                                                            </div>
                                                            <Row className='align-items-center'>
                                                                <Col lg={3} >
                                                                    <div className="imgofins">
                                                                        <img className='w-100' src="/assets/images/CourseDetailsPage/instructorpic.png" alt="" />
                                                                    </div>
                                                                   
                                                                </Col>
                                                                <Col lg={9}>
                                                                <div className="detailofins">
                                                                    <div className="rating">
                                                                    <div className="wrapper d-flex">
                                                                        <span>{item.rating}</span>
                                                                        {
                                                                            item.rating>=4?
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
                                                                            item.rating>=3?
                                                                            <>
                                                                            <div className="stars">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            item.rating>=2?
                                                                            <>
                                                                            <div className="stars">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            item.rating>=1?
                                                                            <>
                                                                            <div className="stars">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            ""
                                                                        }
                                                                        <span> &#40;30&#41;</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3>Professor Mokhter Ahmad</h3>
                                                                    <p className='designation'>Tarbiyah Ins, Instructor</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={12}>
                                                                    <div className="content">
                                                                        <h2>Rating</h2>
                                                                    </div>
                                                                    <div className="ratingboxbig">
                                                                        <div className="heading">
                                                                        <h4>{item.instructors.ratingsection.rating} <img src="/assets/images/CourseDetailsPage/filledstar.png" alt="" /></h4>
                                                                        <p>Rating (4k+)</p>
                                                                        </div>
                                                                       
                                                                        <Row className='starstogether align-items-center mt-3'>
                                                                            <Col lg={4}>
                                                                                <img src="/assets/images/CourseDetailsPage/5s.png" alt="" />
                                                                            </Col>
                                                                            <Col lg={8}>
                                                                            <ProgressBar 
                                                                                completed={item.instructors.ratingsection.fivestarpercent}
                                                                                bgColor="#00ADD2"
                                                                                height="10px"
                                                                                isLabelVisible={false}
                                                                                labelColor="#000000"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className='starstogether align-items-center mt-3'>
                                                                            <Col lg={4}>
                                                                                <img src="/assets/images/CourseDetailsPage/4s.png" alt="" />
                                                                            </Col>
                                                                            <Col lg={8}>
                                                                            <ProgressBar 
                                                                                completed={item.instructors.ratingsection.fourstarpercent}
                                                                                bgColor="#00ADD2"
                                                                                height="10px"
                                                                                isLabelVisible={false}
                                                                                labelColor="#000000"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className='starstogether align-items-center mt-3'>
                                                                            <Col lg={4}>
                                                                                <img src="/assets/images/CourseDetailsPage/3s.png" alt="" />
                                                                            </Col>
                                                                            <Col lg={8}>
                                                                            <ProgressBar 
                                                                                completed={item.instructors.ratingsection.threestarpercent}
                                                                                bgColor="#00ADD2"
                                                                                height="10px"
                                                                                isLabelVisible={false}
                                                                                labelColor="#000000"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className='starstogether align-items-center mt-3'>
                                                                            <Col lg={4}>
                                                                                <img src="/assets/images/CourseDetailsPage/2s.png" alt="" />
                                                                            </Col>
                                                                            <Col lg={8}>
                                                                            <ProgressBar 
                                                                                completed={item.instructors.ratingsection.twostarpercent}
                                                                                bgColor="#00ADD2"
                                                                                height="10px"
                                                                                isLabelVisible={false}
                                                                                labelColor="#000000"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className='starstogether align-items-center mt-3'>
                                                                            <Col lg={4}>
                                                                                <img src="/assets/images/CourseDetailsPage/1s.png" alt="" />
                                                                            </Col>
                                                                            <Col lg={8}>
                                                                            <ProgressBar 
                                                                                completed={item.instructors.ratingsection.onestarpercent}
                                                                                bgColor="#00ADD2"
                                                                                height="10px"
                                                                                isLabelVisible={false}
                                                                                labelColor="#000000"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third" className='thirdtabcontent'>
                                                            <div className="content">
                                                                <h2>Student Review:</h2>
                                                            </div>
                                                            <Slider {...settings}>
                                                                {
                                                                    item.studentreview.data.map((item4,key4)=>{
                                                                        return(
                                                                <div className="sliderbox" key={key4}>
                                                                <div className="topdiv d-flex">
                                                                    <div className="leftdiv">
                                                                        <img src={item4.img} alt="" />
                                                                    </div>
                                                                    <div className="rightdiv">
                                                                        <h4>{item4.name}</h4>
                                                                        <p>{item4.designation}</p>                                                                        
                                                                        {
                                                                            item4.rating>=4?
                                                                            <>
                                                                            <div className="stars d-flex">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            item4.rating>=3?
                                                                            <>
                                                                            <div className="stars d-flex">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            item4.rating>=2?
                                                                            <>
                                                                            <div className="stars d-flex">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            item4.rating>=1?
                                                                            <>
                                                                            <div className="stars d-flex">
                                                                            <img src="/assets/images/Common/ratingpart/starfilled.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />
                                                                            <img src="/assets/images/Common/ratingpart/starempty.png" alt="" />

                                                                            </div>
                                                                            
                                                                            
                                                                            </>
                                                                            :
                                                                            ""
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="bottomdiv">
                                                                    <p>{item4.paragraph}</p>
                                                                </div>
                                                            </div>

                                                                        )
                                                                    })
                                                                }
                                                            
                                                            
                                                            </Slider>
                                                            <div className="writereviewbutton text-center">
                                                               <CommonButton text="Write a review"/>
                                                                
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                    </Col>
                                                </Row>
                                                </Tab.Container>

                                            </div>

                                                
                                                
                                            
                                        </div>

                                    </Col>
                                    <Col lg={4}>
                                        <div className="pricebox">
                                            <div className="toppart">
                                                <h4>৳{item.pricebox.price}</h4>
                                            </div>
                                            <div className="bottompart">
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricinimg1.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Instructor</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.instructor}</p>
                                                    </div>
                                                </div>
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricintimg2.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Duration</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricingimg3.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Lecture</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.lectures}</p>
                                                    </div>
                                                </div>
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricingimg4.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Level</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.level}</p>
                                                    </div>
                                                </div>
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricingimg5.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Language</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.language}</p>
                                                    </div>
                                                </div>
                                                <div className="commkonli d-flex">
                                                    <div className="left d-flex align-items-center">
                                                        <div className="img">
                                                            <img src="/assets/images/CourseDetailsPage/pricingimg6.png" alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <p>Certificate</p>
                                                        </div>
                                                    </div>
                                                    <div className="right ms-auto">
                                                        <p>{item.pricebox.certificate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="enrollnowbutton text-center">
                                                <CommonButton text="Enroll Now"/>
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

export default CourseDetailsFeaturedComp