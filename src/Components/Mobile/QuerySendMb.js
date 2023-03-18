import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from '../Desktop/SubComponents/CommonButton'
const QuerySendMb = () => {
  return (
    <>
        <div className="querysendmb"  data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <div className="subheadingmb">

                    <h4>Send Us Query</h4>
                </div>

                <Row>
                    <Col lg={12} className="basicinput basicinputmb">
                        <input type="text" placeholder='Subject*'/>
                        <input type="text" placeholder='Name*'/>
                        <input type="text" placeholder='Mobile*'/>
                        <input type="text" placeholder='Email*'/>
                        <textarea style={{flex:"1 1 78%"}} placeholder='Message*'></textarea>
                        <input style={{flex:"1 1 22%"}} type="text" placeholder='Capcha*'/>
                        
                    </Col>
                    
                    
                </Row>
                <div className="sendbutton">
                    <CommonButton text="Send Message"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuerySendMb