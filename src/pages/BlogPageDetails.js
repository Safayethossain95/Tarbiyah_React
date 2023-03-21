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
import '../sass/sassFiles/mobile/blogpagedetailscompmb.scss'
import '../sass/sassFiles/desktop/blogpagedetailscomp.scss'
import { useParams } from 'react-router-dom';
import BlogPageDetailsComp from '../Components/Desktop/BlogPageDetails/BlogPageDetailsComp'
import BlogPageDetailsCompMb from '../Components/Mobile/BlogPageDetailsMb/BlogPageDetailsCompMb'
const BlogPageDetails = () => {
    
    let {id} = useParams()
   
  return (
    <>
         <div className="mobile blogpagedetailsmb">
                <MyNavMb/> 
                <BlogPageDetailsCompMb id={id}/>
                <FooterMb/>
                <ScrollTop/>
                <CopyrightMb/>
            </div>
    
            <div className="desktop blogpagedetails">
                <MyNavbar/>
                <BlogPageDetailsComp id={id}/>
                <ScrollTop/>                
                <Footer/>
                <Copuright/>
            </div>
    </>
  )
}

export default BlogPageDetails