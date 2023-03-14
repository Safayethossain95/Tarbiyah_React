import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from './SubComponents/MediumHeading';
import FooterLinks, { footerLinksAPI } from '../../utils/FooterLinks';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Footer = () => {
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
      const [prayertimes,setprayertimes] = useState({})
      useEffect(() => {
        const d = new Date();
        let day = d.getDate() - 1
        let year = d.getFullYear()
        let month = d.getMonth()
        console.log(day,"- ",year,"- ",month)
        const baseURL = `http://api.aladhan.com/v1/calendarByCity/${year}/${month + 1}?city=Dhaka&country=Bangladesh&method=1`
       
        
        axios.get(baseURL).then((response) => {
          console.log(response.data.data[day].timings)
         
          setprayertimes(response.data.data[day].timings)
        });
      },[]);

  return (
    <>
        <div className="footersection">
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                <div className="topbar">
                    <div className="leftpart">
                        <p>Prayer Time</p>
                    </div>
                    <div className="rightpart">
                        <div className="wrap">
                            <p>Dhaka, Bangladesh</p>
                            <h5>18 Feb,2023</h5>
                        </div>
                    </div>
                </div>

                <div className="prayertimeboxes">
                    <Row>
                        <Col>
                            <div className="prayerbox">
                                <img src="./assets/images/Homepage/footer/prayercard1.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Fajr).substring(1,6)}</h4>
                                    {/* <p>AM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="prayerbox">
                                <img src="./assets/images/Homepage/footer/prayercard2.png" alt="" />
                                <div className="overlay">
                                <h4>{String(prayertimes.Dhuhr).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="prayerbox">
                                <img src="./assets/images/Homepage/footer/prayercard3.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Asr).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="prayerbox">
                                <img src="./assets/images/Homepage/footer/prayercard4.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Maghrib).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="prayerbox">
                                <img src="./assets/images/Homepage/footer/prayercard5.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Isha).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="footermainlinks">
                    <Row>
                        <Col lg={4}>
                            <img className='w-100' src="./assets/images/Homepage/footer/footermain/footerlogo.png" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.</p>
                        </Col>
                        <Col lg={2} className="commonlinkscss" style={{paddingLeft:"4%"}}>
                            {
                                footerLinksAPI.map((item,key)=>{
                                    return(
                                        item.heading=="Sitemap"?
                                        <div key={key}>
                                             <h2>{item.heading}</h2>
                                                {
                                                    item.data.map((item2,key2)=>{
                                                        return(
                                                            <Link to="/" key={key2}>{item2.dataname}</Link>
                                                        )
                                                    })
                                                }
                                        </div>
                                        :
                                        ""

                                    )
                                   
                                })
                            }
                        </Col>
                        <Col lg={3} className="commonlinkscss">
                        {
                                footerLinksAPI.map((item,key)=>{
                                    return(
                                        item.heading=="Legal"?
                                        <div key={key}>
                                             <h2>{item.heading}</h2>
                                                {
                                                    item.data.map((item2,key2)=>{
                                                        return(
                                                            <Link to="/" key={key2}>{item2.dataname}</Link>
                                                        )
                                                    })
                                                }
                                        </div>
                                        :
                                        ""

                                    )
                                   
                                })
                            }
                        </Col>
                        <Col lg={3} className="commonlinkscss">
                        {
                                footerLinksAPI.map((item,key)=>{
                                    return(
                                        item.heading=="Contact Information"?
                                        <div key={key}>
                                             <h2>{item.heading}</h2>
                                                {
                                                    item.data.map((item2,key2)=>{
                                                        return(
                                                            <Link to="/" key={key2}>{item2.dataname}</Link>
                                                        )
                                                    })
                                                }
                                        </div>
                                        :
                                        ""

                                    )
                                   
                                })
                            }
                        {
                                footerLinksAPI.map((item,key)=>{
                                    return(
                                        item.heading=="Support"?
                                        <div key={key}>
                                             <h2>{item.heading}</h2>
                                                {
                                                    item.data.map((item2,key2)=>{
                                                        return(
                                                            <Link to="/" key={key2}>{item2.dataname}</Link>
                                                        )
                                                    })
                                                }
                                        </div>
                                        :
                                        ""

                                    )
                                   
                                })
                            }
                        </Col>
                    </Row>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Footer