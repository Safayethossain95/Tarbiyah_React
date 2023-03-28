import React,{useEffect,useState} from 'react'
import Footer from '../Components/Desktop/Footer'
import MyNavbar from '../Components/Desktop/MyNavbar'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import '../sass/sassFiles/desktop/coursespage.scss'
import '../sass/sassFiles/mobile/coursespagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from '../Components/Desktop/SubComponents/ScrollTop'
import MyNavMb from '../Components/Mobile/MyNavMb'
import BannerMb from '../Components/Mobile/BannerMb'
import FooterMb from '../Components/Mobile/FooterMb'
import Copuright from '../Components/Desktop/Copuright'
import CopyrightMb from '../Components/Mobile/CopyrightMb'
import PopularCoursesSection from '../Components/Desktop/CoursesPage/PopularCoursesSection'
import RecentCoursesSection from '../Components/Desktop/CoursesPage/RecentCoursesSection'
import FeaturedCoursesSection from '../Components/Desktop/CoursesPage/FeaturedCoursesSection'
import MostPopularCoursesMb from '../Components/Mobile/MostPopularCoursesMb'
import RecentCoursesSectionMb from '../Components/Mobile/CoursesPage/RecentCoursesSectionMb'
import FeaturedCoursesSectionMb from '../Components/Mobile/CoursesPage/FeaturedCoursesSectionMb'
import CourseDetailsFeaturedComp from '../Components/Desktop/CourseDetailsPage/CourseDetailsFeaturedComp'
import { useParams } from 'react-router-dom';
import CourseFeaturedComp from '../Components/Mobile/CourseDetailsPage/CourseFeaturedComp'
const CourseDetailsFeaturedPage = () => {
  const {id} = useParams()
    
  return (
    <>
       <div className="mobile">
        <div className="coursesdetailsmb">
        <MyNavMb/>
        <CourseFeaturedComp myid={id}/>
        <FooterMb/>
        <ScrollTop/>
        <CopyrightMb/>

        </div>
        </div>
        
        <div className="desktop coursespagedesk coursedetailsrecent">
            <MyNavbar/>
            <CourseDetailsFeaturedComp myid={id}/>
            <ScrollTop/>
            <Footer/>
            <Copuright/>
        </div>
    </>
  )
}

export default CourseDetailsFeaturedPage