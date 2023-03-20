
import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const Copuright = () => {
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
            
        })
      }, [screenSize])
      const [prayertimes,setprayertimes] = useState({})
    useEffect(()=>{
  
    
        var navbar = document.getElementById("mynavbar");
        var navbarmini = document.getElementById("mynavbarmini");
        
        function myFunction() {
         
          if(window.pageYOffset > 99){
            navbar.classList.add("sticky");
          }else{
            navbar.classList.remove("sticky");
          }
          // if(window.pageYOffset > 59){
          //   navbarmini.classList.add("stickymini");
          // }else{
          //   navbarmini.classList.remove("stickymini");
          // }
       
        }
        window.onscroll = function() {myFunction()};
        
       
      },[])
  return (
    <>
        <div className="copyrightsection">
        <div style={{height:"100px"}} className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

            <Row style={{height:"100%",alignItems:"center"}} >
                <Col lg={4}>
                    <div className="left">
                        <p>© 2023. BSSIT. All right reserved</p>
                    </div>
                </Col>
                <Col lg={4} className="text-center">
                <div className="socials text-center">
                       
                       <a href="https://www.facebook.com/Bssit"><BsFacebook/></a>
                       <div className="icondiv">
                           <BsYoutube/>
                       </div>
                       <div className="icondiv">
                           <BsTwitter/>
                       </div>
                       <div className="icondiv">
                           <FaLinkedinIn/>
                       </div>
                       </div>
                       
                </Col>
                <Col lg={4}>
                
                </Col>
            </Row>
        </div>
        </div>
    </>
  )
}

export default Copuright