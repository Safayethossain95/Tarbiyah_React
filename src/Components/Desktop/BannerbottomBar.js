import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import $ from 'jquery'
import CountUp from 'react-countup';
import { motion } from "framer-motion";
const BannerbottomBar = (props) => {
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
         <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

         <div className="bannerbottompart"  >
         <Row >
            {
                props.myprops.map((item,key)=>{
                    return(
                        <Col lg={3} key={key}>
                            <motion.div className="smcard" initial={{ y : 30,opacity:0 }}
                            animate={{ y:0,opacity:1}}
                            transition={{delay:0,duration:2,type: "tween",
                            stiffness: 30,
                            }}>
                                <img src={item.img} alt="" />
                                <h4><span><CountUp end={item.counternumber} />{item.suffix?item.suffix:""}</span><span>+</span>{item.name}</h4>
                            </motion.div>
                        </Col>
                    )
                })
            }
            
            </Row>

         </div>
            
        </div>
    </>
    
  )
}

export default BannerbottomBar