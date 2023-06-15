import styles from "./home.css";
import "./home.css";
import Typical from "react-typical";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setshow] = useState(false);
  const [showloading, setshowloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setshowloading(true);
    setTimeout(() => {
      setshowloading(false);
    }, 3000);
  }, []);

  const onEnrollClick = useCallback(() => {
    navigate("/enroll_form");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCareerClick = useCallback(() => {
    navigate("/career_page");
  }, [navigate]);


  return (
    <>
      <div className="mainhome">
        {showloading ? (
          <div className="loading"></div>
        ) : (
          <div className="home">
            <div className="bg">
              <div className="FHlogodiv">
                <img
                  src="../Artboard1.png"
                  alt="loading.."
                  className="FHlogo"
                />
              </div>
              <div className="centerpicdiv">
                <img
                  src="../image11.png"
                  alt="loading.."
                  className="centerpic"
                />
              </div>
            </div>

            <div className="forteText">FORTE</div>
            <div className="hubText">HUB</div>
            <div className="FacebookClickablediv">
              <a href="https://www.facebook.com/forte.hub" target="_blank">
                <img
                  src="../Facebook.png"
                  alt="loading.."
                  className="FacebookClickable"
                />
              </a>
            </div>
            <div className="InstagramClickablediv">
              <a href="https://www.instagram.com/fortehub/" target="_blank">
                <img
                  src="../Instagram.png"
                  alt="loading.."
                  className="InstagramClickable"
                />
              </a>
            </div>
            <div className="LinkedInClickablediv">
              <a
                href="https://www.linkedin.com/company/forte-hub/"
                target="_blank"
              >
                <img
                  src="../LinkedIn.png"
                  alt="loading.."
                  className="LinkedInClickable"
                />
              </a>
            </div>
            <div
              className="MenuText"
              onClick={() => {
                setshow(!show);
              }}
            >
              MENU
            </div>
            <div
              className="MenuClickablediv"
              onClick={() => {
                setshow(!show);
              }}
            >
              <img
                src="../Squared Menu.png"
                alt="loading.."
                className="MenuClickable"
              />
{/* BLUE MENU BOX THAT APPEARS AND DISAPPEARS */}
              {show && <div className="MenuBox">
                <img src="../menu contact button.png" alt="loading" className="contact_btn" onClick={onContactClick}/>
                <img src="../menu career button.png" alt="loading" className="career_btn" onClick={onCareerClick}/>
                </div>}
            </div>
            <div className="Line1">
              {/* <img
            src="../Line 1.png"
            alt="loading.."
            /> */}
              .
            </div>
            <div className="Latest_at_FH">LATEST AT FORTE HUB</div>
            <div className="Latest_title">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "</DEVATHON>",
                  1000,
                  "</30 Days Of Code>",
                  1000,
                  "</TRIVIA>",
                  1000,
                ]}
              />
            </div>
            <button className="Enroll_button" onClick={onEnrollClick}>
              <p className="EnrollNow">ENROLL NOW!</p>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
