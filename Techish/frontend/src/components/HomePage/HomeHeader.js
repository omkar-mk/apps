import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthModal } from "../Modals/AuthModal";
import "./css/HomeHeader.css";

function HomeHeader({ signInPopup, backgroundColor }) {
  const [modal, setModal] = React.useState(false);
  const location = useLocation()
  return (
    <header>
      <div style = {{
        backgroundColor: backgroundColor,
      }} className="header">
        <div className="header-left">
          <Link to={"/"}>
            {/* <svg height={25} viewBox="0 0 3940 610" className="bn bo">
              <path d="M 4 8 L 10 1 L 13 0 L 12 3 L 5 9 C 6 10 6 11 7 10 C 7 11 8 12 7 12 A 1.42 1.42 0 0 1 6 13 A 5 5 0 0 0 4 10 Q 3.5 9.9 3.5 10.5 T 2 11.8 T 1.2 11 T 2.5 9.5 T 3 9 A 5 5 90 0 0 0 7 A 1.42 1.42 0 0 1 1 6 C 1 5 2 6 3 6 C 2 7 3 7 4 8 M 10 1 L 10 3 L 12 3 L 11 2 L 10 1"></path>
            </svg> */}
            {/* <img src="./ 16af1750164142beb25d21db7a33d11d.png"></img> */}
            <h1>Techish</h1>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-right-options-button">
            <div className="header-right-option">
              <Link to ='/our-story' ><span style={{
                fontWeight: location.pathname === '/our-story' && 'bold',
                textDecoration: location.pathname === '/our-story' && 'underline'
              }}>Our story</span></Link>
              
            </div>
            <div className="header-right-option">
            <Link to ='/membership' >
              <span style={{
                fontWeight: location.pathname === '/membership' && 'bold',
                textDecoration: location.pathname === '/membership' && 'underline'
              }}>Membership</span></Link>
            </div>
            <div className="header-right-option">
            <Link to ='/creators' >
              <span style={{
                fontWeight: location.pathname === '/creators' && 'bold',
                textDecoration: location.pathname === '/creators' && 'underline'
              }} >Write</span></Link>
            </div>
            <div className="header-right-option">
              <span onClick={() => setModal(true)}>Sign In</span>
            </div>
            <div className="header-right-started">
              <span>
                <button
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setModal(true)}
                >
                  Get started
                </button>
              </span>
            </div>
            <AuthModal
              signInPopup={signInPopup}
              open={modal}
              setOpen={setModal}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
