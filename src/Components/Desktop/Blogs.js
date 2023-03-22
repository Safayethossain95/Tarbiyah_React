import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import CommonButton from './SubComponents/CommonButton';
import { blogsAPI } from '../../utils/BlogsCardAPI';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {

    const navigate= useNavigate()
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
      const handleSingleBlog=(mykey)=>{
        navigate(`/blog/${mykey}`)
      }
  return (
    <>
            <div className="blogssection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                    <MediumHeading text="Blogs"/>
                    <div className="bigblogbox" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                        {
                            blogsAPI.slice(0,1).map((item,key)=>{
                                return( 
                            <Row key={key} onClick={()=>handleSingleBlog(item.id)} style={{cursor:"pointer"}}>
                            <Col lg={6}>    
                                <div className="img">
                                    <img src={item.imgurl} alt="" />
                                </div>
                            </Col>
                                        <Col lg={6} >
                                        <div className="textside">
                                            <h3>{item.title}</h3>
                                            <p>{item.paragraph.substring(0,195)} <span>Read More</span></p>

                                            <div className="iconspart">
                                                <div className="icon">
                                                    <img src={item.icon1} alt="" />
                                                </div>
                                                <div className="textp">
                                                    <p>{item.courseType}</p>
                                                </div>
                                                <div className="icon2">
                                                <img src={item.icon2} alt="" />
                                                </div>
                                                <div className="textp">
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <div className="teacherpart">
                                                
                                                    <div className="icon">
                                                        <img src={item.teacherpic} alt="" />
                                                    </div>
                                                    <div className="name">
                                                        <h3>{item.teachername}</h3>
                                                        <p>{item.designation}</p>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </Col>
                            
                        </Row>
                                    )
                        })
                            }
                    </div>

                    <Row className='smallcards'>
                        {
                            blogsAPI.slice(1,4).map((item,key)=>{
                                return(

                                    <Col lg={4} key={key} data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="smcard" onClick={()=>handleSingleBlog(item.id)} style={{cursor:"pointer"}}>
                                        <div className="img">
                                            <img className='w-100' src={item.imgurl} alt="1.png" />
                                        </div>
                                        <div className="textside">
                                            <h3>{item.title}</h3>
                                            <p>{item.paragraph.substring(0,50)} <span>Read More</span></p>
        
                                            <div className="iconspart">
                                                <div className="icon">
                                                    <img src={item.icon1} alt="" />
                                                </div>
                                                <div className="textp">
                                                    <p>{item.courseType}</p>
                                                </div>
                                                <div className="icon2">
                                                <img src={item.icon2} alt="" />
                                                </div>
                                                <div className="textp">
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <div className="teacherpart">
                                                
                                                    <div className="icon">
                                                        <img src={item.teacherpic} alt="" />
                                                    </div>
                                                    <div className="name">
                                                        <h3>{item.teachername}</h3>
                                                        <p>{item.designation}</p>
                                                    </div>
                                                
                                            </div>
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

export default Blogs