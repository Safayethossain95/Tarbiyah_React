import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import $ from 'jquery'
import CountUp from 'react-countup';
const BannerbottomBar = (props) => {
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
         <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

         <div className="bannerbottompart"  >
         <Row  data-aos-delay="200" data-aos="fade-up" data-aos-duration="1500">
            {
                props.myprops.map((item,key)=>{
                    return(
                        <Col lg={3} key={key}>
                            <div className="smcard">
                                <img src={item.img} alt="" />
                                <h4><span><CountUp end={item.counternumber} />{item.suffix?item.suffix:""}</span><span>+</span>{item.name}</h4>
                            </div>
                        </Col>
                    )
                })
            }
               
                {/* <Col lg={3}>
                    <div className="smcard">
                        <img src="./assets/images/Homepage/banner/bannerbar/icon2.png" alt="" />
                        <h4><span><CountUp end={30} /></span><span>+</span>Teachers</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="smcard">
                        <img src="./assets/images/Homepage/banner/bannerbar/icon3.png" alt="" />
                        <h4><span><CountUp end={3846} /></span><span>+</span>Members</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="smcard">
                        <img src="./assets/images/Homepage/banner/bannerbar/icon4.png" alt="" />
                        <h4><span><CountUp end={12} /></span><span>+</span>Countries</h4>
                    </div>
                </Col> */}
            </Row>

         </div>
            
        </div>
    </>
    
  )
}

export default BannerbottomBar