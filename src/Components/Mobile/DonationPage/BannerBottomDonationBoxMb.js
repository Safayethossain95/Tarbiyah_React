import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from '../../Desktop/SubComponents/CommonButton'
import { motion } from "framer-motion";
import Select from 'react-select';
const BannerBottomDonationBoxMb = () => {
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
        <div className="bannerboxdonaitonmb">
            <div className="myContainermb">
                <div className="bmbbar">
                    <h3>Care for a donation!</h3>

                    <Row>
                        <Col xs={12}>
                            <div className="basicinputmb">
                                    <motion.div className="basicinputdrp" initial={{ y : 30,opacity:0 }}
                                    animate={{ y:0,opacity:1}}
                                    transition={{delay:0,duration:1.5,type: "tween",
                                    stiffness: 30,
                                    }}>
                                   
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={handleSelectoption}
                                    options={options}
                                />

                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="basicinputmb">
                                <input type="text" placeholder="Phone/Email"  name="phemail" value={phemail} onChange={(e)=>setphemail(e.target.value)}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="basicinputmb">
                                <input type="text" placeholder="Type in Amount" name="number" value={number} onChange={(e)=>setnumber(e.target.value)}/>
                            </div>
                        </Col>
                    </Row>
                    <div className="mybutton">
                        <CommonButton func={func2} text="Proceed" />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default BannerBottomDonationBoxMb