import React,{useEffect,useState} from 'react'

import { blogsAPI } from '../../../utils/BlogsCardAPI';
import {Row,Col} from 'react-bootstrap';
import {SiFacebook} from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const BlogPageDetailsCompMb = (props) => {
 
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
        <div className="blogpagedetailscomp">
            

                {
                    blogsAPI.map((item,key)=>{
                        if(item.id==props.id){
                            return(
                                <div className="blogpagedetailsinner">
                                  <img className='bigimg' src={item.imgurl} alt="" />
                                  <div className="mycontainermb">

                                  <div className="textcontent">
                                    <Row>
                                      <Col xs={12} style={{flex:"1 1 70%"}}>
                                        <div className="heading">
                                          <h2>{item.title} </h2>
                                          
                                        </div>
                                        <div className="detail">
                                          <p>{item.paragraph}</p>
                                        </div>
                                      </Col>
                                      <Col xs={12} style={{flex:"1 1 30%"}}>
                                        <div className="teacherpart">
                                                
                                                <div className="icon">
                                                    <img src={item.teacherpic} alt="" />
                                                </div>
                                                <div className="name">
                                                    <h3>{item.teachername}</h3>
                                                    <p>{item.designation}</p>
                                                </div>
                                            
                                        </div>
                                        <div className="iconspart">
                                                <div className="wrap">
                                                  <div className="icon">
                                                      <img src={item.icon1} alt="" />
                                                  </div>
                                                  <div className="textp">
                                                      <p>{item.courseType}</p>
                                                  </div>
                                                </div>
                                                <div className="wrap">
                                                  <div className="icon2">
                                                  <img src={item.icon2} alt="" />
                                                  </div>
                                                  <div className="textp">
                                                      <p>{item.date}</p>
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="sharepart">
                                              <h4>Share Blog:</h4>
                                              <div className="flexwrap d-flex">
                                                <a href="#"><SiFacebook/></a>
                                                <div className="othericon">
                                                    <a href="#"><BsTwitter/></a>
                                                </div>
                                                <div className="othericon">
                                                    <a href="#"><FaLinkedinIn/></a>
                                                </div>
                                               
                                              </div>
                                            </div>
                                      </Col>
                                    </Row>
                                  </div>
                                  </div>

                                </div>
                            )
                        }
                    })
                }
            
         
        </div>
    </>
  )
}

export default BlogPageDetailsCompMb