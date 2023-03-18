import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  
  return (
    <>
       <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
