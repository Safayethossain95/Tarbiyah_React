import React from 'react'
import {Row,Col} from "react-bootstrap"
const VisionMissionSubcomp = (prop) => {
  return (
    <>
        <div className="visionmissionsubcomponent">
            {
                prop.myprops.map((item,key)=>{
                    return(
                        <Row key={key} className={item.flip==true?"flex-row-reverse":""}>
                            <Col lg={6} className="px-0" data-aos-delay="400" data-aos="fade-right" data-aos-duration="2000">
                                <div className="img">
                                    <img className='w-100' src={item.img} alt="" />
                                </div>
                            </Col>
                            <Col lg={6} className="px-0" data-aos-delay="400" data-aos="fade-left" data-aos-duration="2000">
                                <div className={item.flip==false?" d-flex flex-column justify-content-center text2":"text d-flex flex-column justify-content-center"}>
                                    <h5>{item.subheading}</h5>
                                    <h3>{item.heading}</h3>
                                    {
                                        item.list==true?
                                        <ul>
                                            <li>Cultivate and educate Muslims with the knowledge Quran.</li>
                                            <li>Impart Quranic knowledge to become constructive contributors in our society.</li>
                                            <li>To present a true understanding of the Qur'an and Sunnah.</li>
                                            <li>The courses are designed to assist students to develop an intimate relationship with ALLAH.</li>
                                            <li>To develop divine peace and good character.</li>
                                        </ul>
                                        :
                                        <p>{item.paragraph}</p>
                                    }
                                   
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
           
        </div>
    </>
  )
}

export default VisionMissionSubcomp