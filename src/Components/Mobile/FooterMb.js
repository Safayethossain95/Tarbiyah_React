import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import MediumHeading from '../Desktop/SubComponents/MediumHeading';
import FooterLinks, { footerLinksAPI } from '../../utils/FooterLinks';
import { Link } from 'react-router-dom';
import axios from 'axios'
const FooterMb = () => {
   
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
                        <Col className="px-0">
                            <div className="prayerbox">
                                <img src="/assets/images/Mobile/HomepageMb/footermb/fajr.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Fajr).substring(1,6)}</h4>
                                    {/* <p>AM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col className="px-0">
                            <div className="prayerbox">
                                <img src="/assets/images/Homepage/footer/prayercard2.png" alt="" />
                                <div className="overlay">
                                <h4>{String(prayertimes.Dhuhr).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col className="px-0">
                            <div className="prayerbox">
                                <img src="/assets/images/Homepage/footer/prayercard3.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Asr).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col className="px-0">
                            <div className="prayerbox">
                                <img src="/assets/images/Homepage/footer/prayercard4.png" alt="" />
                                <div className="overlay">
                                    <h4>{String(prayertimes.Maghrib).substring(0,6)}</h4>
                                    {/* <p>PM</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col className="px-0">
                            <div className="prayerbox">
                                <img src="/assets/images/Homepage/footer/prayercard5.png" alt="" />
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
                    <Col xs={7} className="commonlinkscss">
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
                        <Col xs={5}  className="commonlinkscss">
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
                        
                        <Col xs={7} className="commonlinkscss">
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
                       
                        </Col>
                        <Col xs={5} className="commonlinkscss">
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
    </>
  )
}

export default FooterMb