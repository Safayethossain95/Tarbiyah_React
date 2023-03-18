import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { motion } from "framer-motion";
const DrpDwn = (props) => {
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
        <motion.div onMouseLeave={()=>props.func("")} className={`megamenu`}  initial={{ y : 20,opacity:0 }}
                    animate={{ y:0,opacity:1}}
                    transition={{delay:0,duration:0.3}}>
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini d-flex":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896 d-flex":"myContainerMini d-flex"}>

        <Tab.Container id="left-tabs-example" defaultActiveKey={`${props.api.defaultActiveKey}`}>
            <Row style={{width:"100%"}}>
                <Col sm={3} className="tabnames" >
                    <h4>Course  Catagory</h4>
                <Nav style={{marginTop:"30px"}} variant="pills" className="flex-column">
                    {
                        props.api.tabname.map((item,key)=>{
                            return(
                                <Nav.Item key={key}>
                                <Nav.Link eventKey={`${item.tabkey}`}>{item.tbname}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                   
                    
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content className="tabcontent">
                    {
                        props.api.tabname.map((item,key)=>{
                             return(
                                <Tab.Pane key={key} eventKey={`${item.tabkey}`}>
                                    <Row>
                                {
                                    item.data.map((item2,key2)=>{
                                        return(
                                                <Col lg={6} key={key2}>
                                                    <div className="smallcard">
                                                        <div className="left">
                                                            <img src={item2.img} alt="" />
                                                        </div>
                                                        <div className="right">
                                                            <h3>{item2.title}</h3>
                                                            <p>{item2.paragraph}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            
                                            )
                                        })
                                    }
                                    </Row>
                               
                            </Tab.Pane>
                             )
                         })
                    }
                    
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
        </motion.div>
    </>
  )
}

export default DrpDwn