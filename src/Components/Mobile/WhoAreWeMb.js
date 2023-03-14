import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const WhoAreWeMb = () => {
  return (
    <>

    <div className="whowearemb">
        <div className="mycontainermb">
            <Row>
          
                <Col xs={12} className="d-flex flex-column justify-content-center">
                    <div className="text" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
                        <h4>Who Are We</h4>
                        <div className="picframe ms-auto">
                        <img className='w-100' src="./assets/images/Homepage/whoarewe/wrwimg.png" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.Lorem ipsum dolor sit amet consectetur.</p>
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
               
            </Row>

        </div>
    </div>
    </>
  )
}

export default WhoAreWeMb