import React,{useState} from 'react'
import {upcomingEventApi} from '../../utils/UpcomingEventAPI'
import {Row,Col,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
const UpcomingEventMb = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
        arrows:false
      };
      const [textbig,settextbig] = useState("false")
      const handletextenlarge=(myval)=>{
        settextbig(myval)
        
      }
  return (
    <>
        <div className="upcomingeventmb" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <h4 className='subheading'>Upcoming Event</h4>

                    <Row>
                        
                        {
                            upcomingEventApi.slice(0,4).map((item,key)=>{
                                return(
                                    <Col lg={12} key={key} className="m-auto" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="upcomingCard">
                                        <div className="toppart">
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
                                        <div className="bottom">
                                            {
                                                textbig==item.id?
                                                <p>{item.detailsbig}<a onClick={()=>handletextenlarge("")}>Read less</a></p>
                                                :
                                                <p>{item.details}<a onClick={()=>handletextenlarge(item.id)}>{item.readmoretext}</a></p>

                                            }
                                            
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

export default UpcomingEventMb