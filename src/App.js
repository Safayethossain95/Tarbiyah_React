import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './helpers/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import NoticePage from "./pages/NoticePage";
import DonationPage from './pages/DonationPage';
import BlogPage from './pages/BlogPage';
import BlogPageDetails from './pages/BlogPageDetails';
import CoursesDetailsPage from './pages/CoursesDetailsPage';
import CourseDetailsPopularPage from './pages/CourseDetailsPopularPage';
import CourseDetailsFeaturedPage from './pages/CourseDetailsFeaturedPage';

function App() {

  
  return (
    <>
       <BrowserRouter>
        
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/recent/:id" element={<CoursesDetailsPage />} />
          <Route path="/courses/popular/:id" element={<CourseDetailsPopularPage />} />
          <Route path="/courses/featured/:id" element={<CourseDetailsFeaturedPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPageDetails />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
