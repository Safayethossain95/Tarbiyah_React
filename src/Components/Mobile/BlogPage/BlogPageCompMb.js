import React from 'react'
import Slider from "react-slick";
import { blogsAPI } from '../../../utils/BlogsCardAPI';
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const BlogPageCompMb = () => {

    const navigate = useNavigate()
    const handleSingleBlog=(mykey)=>{
        navigate(`/blog/${mykey}`)
      }
  return (
    <>
        <div className="blogsectionmb" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <h4 className='subheading'>Blogs</h4>


                <Row className='smallcards'>
                
                        {
                            blogsAPI.map((item,key)=>{
                                return(

                                    <Col xs={12} key={key} data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="smcard" onClick={()=>handleSingleBlog(item.id)} style={{cursor:"pointer"}}>
                                        <div className="img">
                                            <img className='w-100' src={item.imgurl} alt="1.png" />
                                        </div>
                                        <div className="textside">
                                            <h3>{item.title}</h3>
                                            <p>{item.paragraph.substring(0,61)}...</p>
        
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

export default BlogPageCompMb