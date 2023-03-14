import React from 'react'
import Slider from "react-slick";
import { blogsAPI } from '../../utils/BlogsCardAPI';
const BlogsMb = () => {

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
        <div className="blogsectionmb" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <h4 className='subheading'>Blog</h4>



            </div>
                <div className='smallcards'>
                <Slider {...settings}>
                        {
                            blogsAPI.map((item,key)=>{
                                return(

                                    <div key={key} data-aos-delay="400" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="smcard">
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
                                </div>
                                )
                            })
                        }
                       </Slider>
                    </div>
        </div>
    </>
  )
}

export default BlogsMb