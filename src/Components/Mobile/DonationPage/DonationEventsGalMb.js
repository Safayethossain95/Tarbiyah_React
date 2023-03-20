import React,{useState,useEffect} from 'react'
import MediumHeading from '../../Desktop/SubComponents/MediumHeading';
import {Row,Col} from 'react-bootstrap'
import { donationAPI } from '../../../utils/DonationPageAPI';
const DonationEventsGalMb = () => {
   
  return (
    <>
        <div className="donationevents" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="mycontainermb">
                <MediumHeading text="Donation Events"/>

                <div className="donationgalllery">
                    <Row>
                        {
                            donationAPI.galleryimg.map((item,key)=>{
                                return(
                                    <Col xs={6}>
                                        <div className="imgcard">
                                            <img className='w-100' src={item.img} alt="" />
                                        </div>
                                    </Col>

                                )
                            })
                        }
                       

                    </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default DonationEventsGalMb