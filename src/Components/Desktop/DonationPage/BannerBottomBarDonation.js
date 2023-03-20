import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";
import Select from 'react-select';
import CommonButton from '../SubComponents/CommonButton';
const BannerBottomBarDonation = () => {
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
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);
      const [phemail,setphemail] = useState("");
      const [number,setnumber] = useState("")
      

      const handleSelectoption=(e)=>{
        // setSelectedOption(e.)
        setSelectedOption(e.value)
      }
      function func2(){
        console.log(selectedOption,number,phemail)
      }
  return (
    <>
        <div className="bannerbottombardonation">
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                <div className="bbar">
                <Row style={{width:"100%"}}>
                    <Col lg={4}>
                        <motion.div className="basicinputdrp" initial={{ y : 30,opacity:0 }}
                            animate={{ y:0,opacity:1}}
                            transition={{delay:0,duration:1.5,type: "tween",
                            stiffness: 30,
                            }}>
                            <h3>Care for a donation!</h3>
                        <Select
                            defaultValue={selectedOption}
                            onChange={handleSelectoption}
                            options={options}
                        />

                        </motion.div>
                    </Col>
                    <Col lg={4}>
                        <motion.div className="basicinput" initial={{ y : 30,opacity:0 }}
                            animate={{ y:0,opacity:1}}
                            transition={{delay:0,duration:1.5,type: "tween",
                            stiffness: 30,
                            }}>
                            <h3></h3>
                            <input type="text" placeholder='Phone/Email' name="phemail" value={phemail} onChange={(e)=>setphemail(e.target.value)}/>
                        </motion.div>
                    </Col>
                    <Col lg={4}>
                        <motion.div className="basicinput" initial={{ y : 30,opacity:0 }}
                            animate={{ y:0,opacity:1}}
                            transition={{delay:0,duration:1.5,type: "tween",
                            stiffness: 30,
                            }}>
                            <h3></h3>
                            <input type="number" placeholder='Type An Amount' name="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
                        </motion.div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="text-center">
                            <motion.div className="mybutton" initial={{ y : 30,opacity:0 }}
                            animate={{ y:0,opacity:1}}
                            transition={{delay:0,duration:1.5,type: "tween",
                            stiffness: 30,
                            }}>
                                <CommonButton func={func2} text="Proceed"/>
                            </motion.div>

                    </Col>
                </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default BannerBottomBarDonation