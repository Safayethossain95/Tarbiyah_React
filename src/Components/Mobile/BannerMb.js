import React from 'react'
import CommonButton from '../Desktop/SubComponents/CommonButton'
import {Row,Col,Button} from 'react-bootstrap'
import {BsFillPlayFill} from 'react-icons/bs'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
const BannerMb = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  };
  return (
    <>
        <div className="bannermb">
          
        <Slider {...settings}>

        {
          props.myprops.map((item,key)=>{
            return(
                 <div className="div"  data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">
                   <img  src="./assets/images/Mobile/HomepageMb/banner/bannerbg.png" alt="" />
                    <div className="techerpicdiv">

                    <img className='teacherpic' src={item.img} alt="" />
                    </div>

                    <div className="bottompart">
                      <div className="wrap">
                      <h4>{item.heading}</h4>
                      <p>{item.paragraph}</p>

                      <div className="buttons">
                        <Row>
                          <Col xs={6} className="text-end">
                            <CommonButton text="Explore Courses"/>
                          </Col>
                          <Col xs={6}>
                            <div className='secondbutton'>
                              <Button><BsFillPlayFill/></Button>
                              <a href="#" style={{fontSize:"12px"}}>Watch Video</a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      </div>
                    </div>
                 </div>
            )
          })
        }
        </Slider>

              {/* <div className="div" style={{position:"relative"}}>
                   <img src="./assets/images/Mobile/HomepageMb/banner/bannerbg.png" alt="" />

                    <img className='teacherpic' src="./assets/images/Mobile/HomepageMb/banner/teacherpicforbanner.png" alt="" />

                    <div className="bottompart">
                      <h4>Mokhtar ahmed</h4>
                      <p>hello</p>

                      <div className="buttons">
                        <Row>
                          <Col xs={6}>
                            <CommonButton text="Explore Courses"/>
                          </Col>
                          <Col xs={6}>
                            <div className='secondbutton'>
                              <Button><BsFillPlayFill/></Button>
                              <a href="#">Watch Video</a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                 </div> */}
        
            
        </div>
    </>
  )
}

export default BannerMb