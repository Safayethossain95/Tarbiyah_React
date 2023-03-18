import React from 'react'
import {Row,Col} from "react-bootstrap"
import {MdLocationOn} from "react-icons/md"
import {FaPhone} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { motion } from "framer-motion";
const BannerbotttomBoxMb = () => {
  return (
    <>
         <div className="bannerbottompart bannerbottompartother bannerbottompartothermb">
         <Row>
         <Col xs={12} >
                        <motion.div className="contactbarcard" initial={{ y : 40,opacity:0 }}
                        animate={{ y:0,opacity:1}}
                        transition={{delay:0.25,duration:1}}>
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><MdLocationOn style={{fontSize:"25px"}}/> Location</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                    <p> <a target="_blank" href="https://goo.gl/maps/5gk4AizmgMPtehgP6">40/1, WEST CHAND MIA HOUSING, MOHAMMADPUR.</a> </p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} >
                        <motion.div className="contactbarcard" initial={{ y : 40,opacity:0 }}
                        animate={{ y:0,opacity:1}}
                        transition={{delay:0.25,duration:1}}>
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><FaPhone style={{transform:"rotate(90deg)",fontSize:"20px"}}/> Phone Number</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                 <p><a href="tel:+88 01841512525">+88 01841512525</a></p>
                                 <p><a href="tel:+88 01841517575">+88 01841517575</a></p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12}  >
                        <motion.div className="contactbarcard margindrop" initial={{ y : 40,opacity:0 }}
                        animate={{ y:0,opacity:1}}
                        transition={{delay:0.25,duration:1}}>
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><AiOutlineMail  style={{fontSize:"25px"}}/> Email Us</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                            <p><a href="mailto:INFO@TARBIYAHINST.COM">INFO@TARBIYAHINST.COM</a></p>
                            <p><a href="mailto:TARBIYAHONLINEMADRASAH@GMAIL.COM">TARBIYAHONLINEMADRASAH@GMAIL.COM</a></p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                   
                </Row>

         </div>
    </>
  )
}

export default BannerbotttomBoxMb