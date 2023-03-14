import React from 'react'
import Slider from "react-slick";

import {courseCardAPI} from '../../utils/CoursesCardAPI';
import MPCcard from '../Desktop/SubComponents/MPCcard';
const MostPopularCoursesMb = () => {
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
        <div className="mostpopularcoursesmb" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <h4 className='subheading'>Our Most Popular Courses</h4>

            </div>
                <Slider {...settings}>
                            {
                                courseCardAPI.map((item,key)=>{
                                    return(
                                        <div key={key} data-aos-delay="400" data-aos="fade-in" data-aos-duration="1800">
                                            <MPCcard apiprops={item}/>
                                        </div>
                                    )
                                })
                            }
                    
                
                </Slider>
        </div>
    </>
  )
}

export default MostPopularCoursesMb