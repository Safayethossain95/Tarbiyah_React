import React from 'react'
import {Row,Col} from 'react-bootstrap'
const AboutUsGalleryMb = (props) => {
  return (
    <>
        <div className="aboutusgallerymb"  >
            <Row className='mx-0'>
                {
                    props.myprops.map((item,key)=>{
                        return(
                            <Col lg={12} className="px-0" key={key}>
                            <div className="visionmissioncardmb" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
                                <div className="img">
                                    <img className='w-100' src={item.img} alt="" />
                                </div> 
        
                                    <div className={item.flip?" d-flex flex-column justify-content-center textmb":"textmb d-flex flex-column justify-content-center"}>
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
                            </div>
                        </Col>
                        )
                    })
                }
               
            </Row>
        </div>
    </>
  )
}

export default AboutUsGalleryMb