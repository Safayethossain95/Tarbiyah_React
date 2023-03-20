import React from 'react'
import Slider from "react-slick";

import {courseCardAPI} from '../../../utils/CoursesCardAPI';
import MPCcard from '../../Desktop/SubComponents/MPCcard';
import { motion } from "framer-motion";
const RecentCoursesSectionMb = () => {
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
  return (
    <>
        <motion.div className="mostpopularcoursesmb" style={{marginTop:"0px"}} initial={{ y : 40,opacity:0 }}
        whileInView={{ y:0,opacity:1}}
        transition={{delay:0,duration:1.5}}>
            <div className="mycontainermb mostpopcoursesheading">
                <h4 className='subheading'>Recent Courses</h4>
                <p>10,000+ unique online course list designs</p>
            </div>
                <Slider {...settings}>
                            {
                                courseCardAPI.map((item,key)=>{
                                    return(
                                        <div key={key} >
                                            <MPCcard apiprops={item}/>
                                        </div>
                                    )
                                })
                            }
                    
                
                </Slider>
        </motion.div>
    </>
  )
}

export default RecentCoursesSectionMb