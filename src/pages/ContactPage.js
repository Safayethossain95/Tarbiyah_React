import React,{useEffect} from 'react'
import MyNavbar from '../Components/Desktop/MyNavbar'
import MyNavMb from '../Components/Mobile/MyNavMb'
import FooterMb from '../Components/Mobile/FooterMb'
import Copuright from '../Components/Desktop/Copuright'
import CopyrightMb from '../Components/Mobile/CopyrightMb'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from '../Components/Desktop/SubComponents/ScrollTop'
import Footer from '../Components/Desktop/Footer'

import BannerPageOther from '../Components/Desktop/BannerPageOther'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import '../sass/sassFiles/desktop/contactpage.scss'
import '../sass/sassFiles/mobile/contactpage.scss'
import BannerbottombarContact from '../Components/Desktop/BannerbottombarContact'
import QueryOtherPage from '../Components/Desktop/QueryOtherPage'
import Mapp from '../Components/Desktop/Mapp'
import BannerOtherPageMb from '../Components/Mobile/BannerOtherPageMb'
import BannerbotttomBoxMb from '../Components/Mobile/BannerbotttomBoxMb'
import QuerySendMb from '../Components/Mobile/QuerySendMb'


const ContactPage = () => {
    
    useEffect(()=>{
    var navbar = document.getElementById("mynavbar");
    var navbarmini = document.getElementById("mynavbarmini");
    
    function myFunction() {
     
      if(window.pageYOffset > 99){
        navbar.classList.add("sticky");
      }else{
        navbar.classList.remove("sticky");
      }
    }
    window.onscroll = function() {myFunction()};
    
   
  },[])
  useEffect(() => {
    AOS.init();
    
  }, [])

  return (
    <>
           <>
            <div className="mobile">
            <MyNavMb/>
            <BannerOtherPageMb/>
            <BannerbotttomBoxMb/>
            <QuerySendMb/>
            <Mapp/> 
            <FooterMb/>
            <ScrollTop/>
            <CopyrightMb/>
            </div>
    
            <div className="desktop">
                <MyNavbar/>
                <BannerPageOther subpagetitle="Contact Us"/>
                <BannerbottombarContact/>
                <QueryOtherPage/> 
                <Mapp/>               
                <ScrollTop/>                
                <Footer/>
                <Copuright/>
            </div>
    </>
    </>
  )
}

export default ContactPage