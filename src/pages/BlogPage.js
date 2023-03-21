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
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import '../sass/sassFiles/mobile/blogpagemb.scss'
import '../sass/sassFiles/desktop/blogpage.scss'

import BlogPageComp from '../Components/Desktop/BlogPage/BlogPageComp'
import BlogPageCompMb from '../Components/Mobile/BlogPage/BlogPageCompMb'


const BlogPage = () => {
    
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
            <div className="mobile blogpagemb">
            <MyNavMb/>
            <BlogPageCompMb/>
            <FooterMb/>
            <ScrollTop/>
            <CopyrightMb/>
            </div>
    
            <div className="desktop blogpage">
                <MyNavbar/>
                <BlogPageComp/>
                <ScrollTop/>                
                <Footer/>
                <Copuright/>
            </div>
    </>
    
  )
}

export default BlogPage