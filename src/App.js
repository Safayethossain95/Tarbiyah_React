import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  
  return (
    <>
       <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
