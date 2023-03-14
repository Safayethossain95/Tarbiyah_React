import React,{useEffect,useState} from 'react'
import Banner from '../Components/Desktop/Banner'
import BannerbottomBar from '../Components/Desktop/BannerbottomBar'
import Blogs from '../Components/Desktop/Blogs'
import BrandsLogos from '../Components/Desktop/BrandsLogos'
import Donation from '../Components/Desktop/Donation'
import Footer from '../Components/Desktop/Footer'
import LearningStages from '../Components/Desktop/LearningStages'
import MeetInstructor from '../Components/Desktop/MeetInstructor'
import MostPopularCourses from '../Components/Desktop/MostPopularCourses'
import MyNavbar from '../Components/Desktop/MyNavbar'
import UpcomingEvent from '../Components/Desktop/UpcomingEvent'
import WhoAreWe from '../Components/Desktop/WhoAreWe'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from '../Components/Desktop/SubComponents/ScrollTop'
import axios from 'axios'
import $ from 'jquery'
import MyNavMb from '../Components/Mobile/MyNavMb'
import BannerMb from '../Components/Mobile/BannerMb'
import BannerBottomBarMb from '../Components/Mobile/BannerBottomBarMb'
import WhoAreWeMb from '../Components/Mobile/WhoAreWeMb'
import MostPopularCoursesMb from '../Components/Mobile/MostPopularCoursesMb'
import DonationMb from '../Components/Mobile/DonationMb'
import MeetInstructorMb from '../Components/Mobile/MeetInstructorMb'
import LearningMb from '../Components/Mobile/LearningMb'
import OurNetworkMb from '../Components/Mobile/OurNetworkMb'
import UpcomingEventMb from '../Components/Mobile/UpcomingEventMb'
import BlogsMb from '../Components/Mobile/BlogsMb'
import FooterMb from '../Components/Mobile/FooterMb'
import Copuright from '../Components/Desktop/Copuright'
import CopyrightMb from '../Components/Mobile/CopyrightMb'
const Homepage = () => {
     
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
  useEffect(() => {
    AOS.init();
    // {once: true}
  }, [])
 
  
  
  
  // function GetPrayerTime (){
   
  // }
  // document.onload(GetPrayerTime)
  // $( window ).load(function() {
  //   GetPrayerTime()
  // });

  return (
    <>
    <div className="mobile">
    <MyNavMb/>
    <BannerMb/>
    <BannerBottomBarMb/>
    <WhoAreWeMb/>
    <MostPopularCoursesMb/>
    <DonationMb/>
    <MeetInstructorMb/>
    <LearningMb/>
    <OurNetworkMb/>
    <UpcomingEventMb/>
    <BlogsMb/>
    <FooterMb/>
    <ScrollTop/>
    <CopyrightMb/>
    </div>
    
    <div className="desktop">
        <MyNavbar/>
        <Banner/>
        <BannerbottomBar/>
        <WhoAreWe/>
        <MostPopularCourses/>
        <Donation/>
        <MeetInstructor/>
        <LearningStages/>
        <BrandsLogos/>
        <UpcomingEvent/>
        <Blogs/>
        <ScrollTop/>
        
        <Footer/>
        <Copuright/>
    </div>
    </>
  )
}

export default Homepage