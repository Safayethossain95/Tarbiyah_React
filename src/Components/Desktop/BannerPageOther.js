import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import {BsFillPlayFill} from 'react-icons/bs'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"

import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const BannerPageOther = (props) => {
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
    <div className="bannersection bannersectionotherpage">
        <div className="left">
            <img className='w-100' src="./assets/images/Homepage/banner/bannerleftimg.png" alt="bannerleftimg.png" />
        </div>
        <div className="right">
        <img className='w-100' src="./assets/images/Homepage/banner/bannerrightimg.png" alt="bannerrightimg.png" />    
        </div>
        <div style={{height:"100%"}} className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
        
          <div className="mysubpagetitle">
            <h3 data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">{props.subpagetitle}</h3>

          </div>
        
        </div>
        

       
       
        
    </div>
  )
}

export default BannerPageOther