import { Avatar, Image, Popover } from "antd";
import React, { useState } from "react";
// import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./css/LandHeader.css";

const LandHeader = () => {
  const [visible, setvisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // console.log(user);

  const Title = () => {
    return (
      <div className="pop-title">
        <div className="pop-title-container">
          {/* <Avatar
            size={40}
            round={true}
            // src="https://miro.medium.com/fit/c/40/40/1*kA_cgxXQCMSbJhgW8niY5w.png"
            src="https://lh3.googleusercontent.com/a/AATXAJzmT2D2pRjMyngzLDLGwBDSS0TrcjmcT7VRhJF3=s96-c"
          /> */}
          <Avatar
            size={50}
            src={<Image src={user?.providerData?.photoURL} />}
          />
          <div className="pop-info-name">
            <span>{user?.providerData?.displayName}</span>
            <span>@{String(user?.providerData?.email).split("@")[0]}</span>
          </div>
        </div>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="pop-content">
        <div className="pop-content-container">
          <span>
            <Link to="/new-story">Write a story</Link>
          </span>
          <span>
            <Link to={"/me/stories"}>Stories</Link>
          </span>
          <span>
            <Link to={"/me/lists"}>Lists</Link>
          </span>
          <span>
            <a
              href="https://github.com/rahulthakur19"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Fork me on Github
            </a>
          </span>
        
          <span
            onClick={() => {
              auth.signOut().then(() => {
                dispatch(logout());
                navigate("/getting-started", {
                  replace: true,
                });
              });
            }}
          >
            Sign out
          </span>
        </div>
      </div>
    );
  };
  return (
    <header>
      <div className="landHeader">
        <div className="header-left">
          <Link to="/">
            <h1>
              Techish
            </h1>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-right-options">
            <div className="header-right-option">
              <span>
                <svg width="25" height="25" viewBox="0 0 25 25" class="la">
                  <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
                </svg>
              </span>
            </div>
            <div className="header-right-option">
              <span>
                <Link to="/me/lists">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    class="la"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 3a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V8a2 2 0 0 0-2-2H9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a.5.5 0 1 0 1 0V5a2 2 0 0 0-2-2h-9zM5 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12.98l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V8z"
                      fill="#000"
                    ></path>
                  </svg>
                </Link>
              </span>
            </div>
            <div className="header-right-option">
              <span>
                <svg width="25" height="25" viewBox="-293 409 25 25" class="la">
                  <path d="M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z"></path>
                </svg>
              </span>
            </div>
            {/* <div className="header-right-option">
              <span>Sign In</span>
            </div> */}
            {/* <div className="header-right-upgrade">
              <span>
                <button
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Upgrade
                </button>
              </span>
            </div> */}
            <div className="header-right-avatar">
              <span>
                <div className="header-right-avatar-icon">
                  <span>
                    <Popover
                      content={<Content />}
                      title={<Title />}
                      trigger="click"
                      visible={visible}
                      placement="bottom"
                      onVisibleChange={() => setvisible(!visible)}
                    >
                      <Avatar
                        size={40}
                        style={{
                          cursor: "pointer",
                        }}
                        src={
                          <Image
                            preview={false}
                            src={user?.providerData?.photoURL ?? 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3'}
                          />
                        }
                      />
                      {/* <Avatar
                        style={{
                          cursor: "pointer",
                        }}
                        size="40"
                        round={true}
                        facebook-id="invalidfacebookusername"
                        src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                      /> */}
                    </Popover>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandHeader;
