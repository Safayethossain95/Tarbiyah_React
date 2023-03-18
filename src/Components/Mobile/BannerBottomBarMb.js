import React from 'react'
import {Row,Col} from "react-bootstrap"
import CountUp from 'react-countup';
import { motion } from "framer-motion";
const BannerBottomBarMb = (props) => {

  return (
    <>
        <div className="mycontainermb">
        <div className="bannerbottompart">
            <motion.div className="animatedbannerbottom">
         <Row>
            {
                props.myprops.map((item,key)=>{
                    return(
                        <Col xs={6}>
                        <motion.div className="smcard" initial={{ y : 40,opacity:0 }}
                        animate={{ y:0,opacity:1}}
                        transition={{delay:0.25,duration:1}}>
                            <img src={item.img} alt="" />
                            <h4><span><CountUp end={item.counternumber} />{item.suffix?item.suffix:""}</span><span>+</span>{item.name}</h4>
                        </motion.div>
                    </Col>
                    )
                })
            }
               
              
            </Row>

            </motion.div>

         </div>
        </div>
    </>
  )
}

export default BannerBottomBarMb