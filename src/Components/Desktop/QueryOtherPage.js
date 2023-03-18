import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import CommonButton from './SubComponents/CommonButton';
const QueryOtherPage = () => {
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
        <div className="queryotherpage" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
            <div className="otherpagesubheading">
                <h4>
                Send Us Query
                </h4>
            </div>

            <div className="myform">
                <Row>
                    <Col lg={6} className="basicinput">
                        <input type="text" placeholder='Subject*'/>
                        <input type="text" placeholder='Name*'/>
                        <input type="text" placeholder='Mobile*'/>
                        <input type="text" placeholder='Email*'/>
                        
                    </Col>
                    <Col lg={6} className="basicinput d-flex flex-column" >
                        <textarea style={{flex:"1 1 78%"}} placeholder='Message*'></textarea>
                        <input style={{flex:"1 1 22%"}} type="text" placeholder='Capcha*'/>
                    </Col>
                </Row>
                <div className="submitbuttonbox">
                    <CommonButton text="Send Message"/>

                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default QueryOtherPage