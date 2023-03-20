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
import '../sass/sassFiles/desktop/donationpage.scss'
import '../sass/sassFiles/mobile/donationpagemb.scss'
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
import BannerWithImg from '../Components/Desktop/DonationPage/BannerWithImg'
import BannerBottomBarDonation from '../Components/Desktop/DonationPage/BannerBottomBarDonation'
import AboutDonationProcess from '../Components/Desktop/DonationPage/AboutDonationProcess'
import DonationEvents from '../Components/Desktop/DonationPage/DonationEvents'
import BannerBottomDonationBoxMb from '../Components/Mobile/DonationPage/BannerBottomDonationBoxMb'
import AboutDonationMb from '../Components/Mobile/DonationPage/AboutDonationMb'
import DonationEventsGalMb from '../Components/Mobile/DonationPage/DonationEventsGalMb'


const DonationPage = () => {
    
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
            <div className="mobile donationpagemb">
            <MyNavMb/>
            <BannerOtherPageMb text="Donation"/>
            <BannerBottomDonationBoxMb/>
            <AboutDonationMb/>
            <DonationEventsGalMb/>
            <FooterMb/>
            <ScrollTop/>
            <CopyrightMb/>
            </div>
    
            <div className="desktop donationpage">
                <MyNavbar/>
                <BannerWithImg/>
                 <BannerBottomBarDonation/>
                 <AboutDonationProcess/>
                 <DonationEvents/>
                <ScrollTop/>                
                <Footer/>
                <Copuright/>
            </div>
    </>
    </>
  )
}

export default DonationPage