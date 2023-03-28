import React,{useEffect,useState} from 'react'
import Footer from '../Components/Desktop/Footer'
import MyNavbar from '../Components/Desktop/MyNavbar'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import '../sass/sassFiles/mobile/coursedetailspagemb.scss'
import '../sass/sassFiles/desktop/coursedetailspage.scss'

import 'aos/dist/aos.css';
import ScrollTop from '../Components/Desktop/SubComponents/ScrollTop'
import MyNavMb from '../Components/Mobile/MyNavMb'
import FooterMb from '../Components/Mobile/FooterMb'
import Copuright from '../Components/Desktop/Copuright'
import CopyrightMb from '../Components/Mobile/CopyrightMb'
import CourseDetailsRecentComp from '../Components/Desktop/CourseDetailsPage/CourseDetailsRecentComp'
import { useParams } from 'react-router-dom';
import CourseRecentCompMb from '../Components/Mobile/CourseDetailsPage/CourseRecentCompMb'
const CoursesDetailsPage = () => {
    const {id} = useParams()
    
  return (
    <>
       <div className="mobile">
        <div className="coursesdetailsmb">
        <MyNavMb/>
        <CourseRecentCompMb myid={id}/>
        <FooterMb/>
        <ScrollTop/>
        <CopyrightMb/>

        </div>
        </div>
        
        <div className="desktop coursedetailsrecent">
            <MyNavbar/>
            <CourseDetailsRecentComp myid={id}/>
            <ScrollTop/>
            <Footer/>
            <Copuright/>
        </div>
    </>
  )
}

export default CoursesDetailsPage