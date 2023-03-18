import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";
import Select from 'react-select';
import CommonButton from './CommonButton';
const DrpDonate = (props) => {
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
      const [number,setnumber] = useState(0)
      

      const handleSelectoption=(e)=>{
        // setSelectedOption(e.)
        setSelectedOption(e.value)
      }
      function func2(){
        console.log(selectedOption,number,phemail)
      }
  return (
    <>
        <div className="drpdonate">

        <motion.div onMouseLeave={()=>props.func("")} className={`megamenu drpdonation`}  initial={{ y : 20,opacity:0 }}
        animate={{ y:0,opacity:1}}
        transition={{delay:0,duration:0.3}}>
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini d-flex":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896 d-flex":"myContainerMini d-flex"}>

                <Row style={{width:"100%",paddingTop:"80px"}}>
                    <Col lg={4}>
                        <div className="basicinputdrp">
                            <h3>Care for a donation!</h3>
                        <Select
                            defaultValue={selectedOption}
                            onChange={handleSelectoption}
                            options={options}
                        />

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="basicinput">
                            <h3></h3>
                            <input type="text" placeholder='Phone/Email' name="phemail" value={phemail} onChange={(e)=>setphemail(e.target.value)}/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="basicinput">
                            <h3></h3>
                            <input type="number" placeholder='Type An Amount' name="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
                        </div>
                    </Col>
                </Row>
            </div>
                <Row>
                    <Col lg={12} className="text-center">
                            <div className="mybutton">
                                <CommonButton func={func2} text="Proceed"/>
                            </div>

                    </Col>
                </Row>
        </motion.div>
        </div>
    </>
  )
}

export default DrpDonate