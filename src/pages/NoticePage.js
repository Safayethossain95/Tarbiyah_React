import React,{useEffect,useState} from 'react'
import Footer from '../Components/Desktop/Footer'
import MyNavbar from '../Components/Desktop/MyNavbar'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/desktop/noticepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import '../sass/sassFiles/mobile/noticepagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from '../Components/Desktop/SubComponents/ScrollTop'
import MyNavMb from '../Components/Mobile/MyNavMb'
import FooterMb from '../Components/Mobile/FooterMb'
import Copuright from '../Components/Desktop/Copuright'
import CopyrightMb from '../Components/Mobile/CopyrightMb'
import NoticePageComp from '../Components/Desktop/NoticePage/NoticePageComp'
import NoticePageCompMb from '../Components/Mobile/NoticePage/NoticePageCompMb'

const NoticePage = () => {
     
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
    <div className="mobile">
    <MyNavMb/>
    <NoticePageCompMb/>
    <FooterMb/>
    <ScrollTop/>
    <CopyrightMb/>
    </div>
    
    <div className="desktop noticepagedesk">
        <MyNavbar/>
        
         <NoticePageComp/>
        <ScrollTop/>
        
        <Footer/>
        <Copuright/>
    </div>
    </>
  )
}

export default NoticePage