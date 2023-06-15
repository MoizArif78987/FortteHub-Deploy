import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom"; 
import { useEffect } from "react";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Enroll_form from "./pages/enroll_form";
import CareerPage from "./pages/career";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "contact":
        title = "Contact-Page";
        metaDescription = "";
        break;
      case "enroll_form":
        title = "Enroll_form";
        metaDescription = "";
        break;
      case "career_page":
        title = "Career_page";
        metaDescription = "";
        break;
      }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/enroll_form" element={<Enroll_form/>}/>
      <Route path="career_page" element={<CareerPage/>}/>
    </Routes>
  );
}
export default App;

