import React from 'react'
import {Row,Col} from "react-bootstrap"
import CountUp from 'react-countup';
import $ from 'jquery'
import { motion } from "framer-motion";
const BannerBottomBarMb = () => {

    // $( window ).load(function() {
        
    //   });

  return (
    <>
        <div className="mycontainermb">
        <div className="bannerbottompart">
            <motion.div className="animatedbannerbottom">
         <Row>
                <Col xs={6}>
                    <motion.div className="smcard" initial={{ y : 40,opacity:0 }}
                    animate={{ y:0,opacity:1}}
                    transition={{delay:0.25,duration:1}}>
                        <img src="./assets/images/Homepage/banner/bannerbar/icon1.png" alt="" />
                        <h4><span><CountUp end={6} /></span><span>+</span>Courses</h4>
                    </motion.div>
                </Col>
                <Col xs={6}>
                    <motion.div className="smcard" initial={{ y : 40,opacity:0 }}
                    animate={{ y:0,opacity:1}}
                    transition={{delay:0.25,duration:1}}>
                        <img src="./assets/images/Homepage/banner/bannerbar/icon2.png" alt="" />
                        <h4><span><CountUp end={30} /></span><span>+</span>Teachers</h4>
                    </motion.div>
                </Col>
                <Col xs={6}>
                    <motion.div className="smcard" initial={{ y : 40,opacity:0 }}
                    animate={{ y:0,opacity:1}}
                    transition={{delay:0.25,duration:1}}>
                        <img src="./assets/images/Homepage/banner/bannerbar/icon3.png" alt="" />
                        <h4><span><CountUp end={3846} /></span><span>+</span>Members</h4>
                    </motion.div>
                </Col>
                <Col xs={6}>
                    <motion.div className="smcard" initial={{ y : 40,opacity:0 }}
                    animate={{ y:0,opacity:1}}
                    transition={{delay:0.25,duration:1}}>
                        <img src="./assets/images/Homepage/banner/bannerbar/icon4.png" alt="" />
                        <h4><span><CountUp end={12} /></span><span>+</span>Countries</h4>
                    </motion.div>
                </Col>
            </Row>

            </motion.div>

         </div>
        </div>
    </>
  )
}

export default BannerBottomBarMb