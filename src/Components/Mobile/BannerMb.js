import React from 'react'
import CommonButton from '../Desktop/SubComponents/CommonButton'
import {Row,Col,Button} from 'react-bootstrap'
import {BsFillPlayFill} from 'react-icons/bs'
const BannerMb = () => {
  return (
    <>
        <div className="bannermb">
            <div className="mycontainermb">
                <img src="./assets/images/Mobile/HomepageMb/banner/bannerbg.png" alt="" />

                <img className='teacherpic' src="./assets/images/Mobile/HomepageMb/banner/teacherpicforbanner.png" alt="" />

                <div className="bottompart">
                  <h4>Find Your Preferred Courses</h4>
                  <p>Build skills with courses, certificates and degree online from world-class universities and companies</p>

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
            </div>
        </div>
    </>
  )
}

export default BannerMb