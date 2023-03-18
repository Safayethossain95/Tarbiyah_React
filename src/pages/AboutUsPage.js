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
import '../sass/sassFiles/desktop/aboutpage.scss'
import '../sass/sassFiles/mobile/aboutuspagemb.scss'
import BannerbottombarContact from '../Components/Desktop/BannerbottombarContact'
import QueryOtherPage from '../Components/Desktop/QueryOtherPage'
import Mapp from '../Components/Desktop/Mapp'
import BannerOtherPageMb from '../Components/Mobile/BannerOtherPageMb'
import BannerbotttomBoxMb from '../Components/Mobile/BannerbotttomBoxMb'
import QuerySendMb from '../Components/Mobile/QuerySendMb'
import Banner from '../Components/Desktop/Banner'
import { bannerAPI } from '../utils/BannerAPI'
import BannerbottomBar from '../Components/Desktop/BannerbottomBar'
import { bannerbottombarAPI } from '../utils/BannerBottomBarAPI'
import AboutTarbiyah from '../Components/Desktop/AboutTarbiyah'
import VisionMission from '../Components/Desktop/VisionMission'
import BannerOtherPageBigMb from '../Components/Mobile/BannerOtherPageBigMb'
import BannerMb from '../Components/Mobile/BannerMb'
import BannerBottomBarMb from '../Components/Mobile/BannerBottomBarMb'
import AboutTarbiyahMb from '../Components/Mobile/AboutTarbiyahMb'
import { visionmissionAPI } from '../utils/VisionMissionAPI'
import AboutUsGalleryMb from '../Components/Mobile/AboutUsGalleryMb'


const AboutUsPage = () => {
    
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
            <BannerMb myprops={bannerAPI.aboutuspage}/>
            <BannerBottomBarMb myprops={bannerbottombarAPI.aboutpage}/>
            <AboutTarbiyahMb />
            <AboutUsGalleryMb myprops={visionmissionAPI}/>
            <FooterMb/>
            <ScrollTop/>
            <CopyrightMb/>
            </div>
    
            <div className="desktop">
                <MyNavbar/>
                <Banner myprop={bannerAPI.aboutuspage}/>
                <BannerbottomBar myprops={bannerbottombarAPI.aboutpage}/>
                <AboutTarbiyah/>  
                <VisionMission/>  
                <ScrollTop/>                
                <Footer/>
                <Copuright/>
            </div>
    </>
    </>
  )
}

export default AboutUsPage