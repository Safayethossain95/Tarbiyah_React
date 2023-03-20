import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import MPCcard from '../SubComponents/MPCcard'
import { courseCardAPI,popularCoursesCardAPI,featuredCoursesCardAPI } from '../../../utils/CoursesCardAPI'
import CommonButton from '../SubComponents/CommonButton'
import {Nav,Tab} from 'react-bootstrap'
import MediumHeading from '../SubComponents/MediumHeading'
import { motion } from "framer-motion";
const PopularCoursesSection = () => {
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
        <motion.div className="coursespage" initial={{ y : 40,opacity:0.4 }}
        whileInView={{ y:0,opacity:1}}
        transition={{delay:0,duration:1}} >
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
            <Row>
                <Col lg={12}>
                    <div className="mostpopcoursesheading">
                        <MediumHeading text="Our Most Popular Courses"/>
                        <p>10,000+ unique online course list designs</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    popularCoursesCardAPI.map((item,key)=>{
                        return(
                            <Col lg={4} key={key} >
                                <motion.div initial={{ opacity:0.4 }}
                                whileInView={{ opacity:1}}
                                transition={{delay:0,duration:1}}>
                                    
                                <MPCcard apiprops={item}/>
                                </motion.div>
                            </Col>
                        )
                    })
                }
            
            </Row>
        </div>
        </motion.div>
    </>
  )
}

export default PopularCoursesSection