import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const WhoAreWe = () => {
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
  return (
    <>
        <div className="whoarewesection" >
        
           
           <div className={screenSize.dynamicWidth>=1200 && screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
           <Row>
               <Col lg={6} className="d-flex flex-column justify-content-center">
                   <div className="text" data-aos-delay="400" data-aos="fade-right" data-aos-duration="2000">
                       <h4>Who Are We</h4>
                       <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.</p>
                       <div className="socials">
                       <a href="https://www.facebook.com/Bssit"><BsFacebook/></a>
                       <div className="icondiv">
                           <BsYoutube/>
                       </div>
                       <div className="icondiv">
                           <BsTwitter/>
                       </div>
                       <div className="icondiv">
                           <FaLinkedinIn/>
                       </div>
                       </div>
                   </div>
               </Col>
               <Col lg={6}>
                   <div className="picframe ms-auto" data-aos-delay="400" data-aos="fade-left" data-aos-duration="2000">
                       <img className='w-100' src="./assets/images/Homepage/whoarewe/wrwimg.png" alt="" />
                   </div>
               </Col>
           </Row>
       </div>
      
           
        </div>
    </>
  )
}

export default WhoAreWe