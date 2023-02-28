import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import LandingRecommendedPost from "./LandingRecommendedPost";
import "./css/LandingMainPage.css";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import Stories from "../MyStories/Stories";

const LandingMainPage = ({userDetails}) => {
  const [tab, setTab] = useState(0);
  console.log(userDetails);
  const [stories, setStories] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [search, setSearch] = useState('')
  const [blogs, setBlogs] = useState([])
  const { pathname } = useLocation()


  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if(search.length < 2) return setBlogs([]);

      try {
        const res = await fetch(`http://localhost:3000/api/stories/search/stories?title=${search}`)
        setBlogs(res.data)
      } catch (err) {
        console.log(err)
      }
    }, 400)

    return () => clearTimeout(delayDebounce)
  },[search])


  useEffect(() => {
    setSearch('')
    setBlogs([])
  },[pathname])

  useEffect(() => {
    async function getStories() {
      await axios
        .get("/api/stories")
        .then((res) => {
          // console.log(res.data.data);
          setLoading(false);
          setStories(res.data.data?.slice(0, 10));
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setLoading(false);
        });
    }
    getStories();
  }, []);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get("/api/user")
        .then((res) => {
          if (res.data.status) {
            let _users = res.data?.data?.filter((data) => data?._id !== userDetails?._id)
            setUsers(_users);
            setUserLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setUserLoading(false);
        });
    }
    getUsers();
  }, []);

  return (
    <div className="landing-main">
      <div className="landing-main-container">
        <div className="landing-main-left">
          <div className="landing-main-tabs">
            <div
              onClick={() => setTab(0)}
              className={`tab ${tab === 0 && "active"}`}
            >
              <span>FOLLOWING</span>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`tab ${tab === 1 && "active"}`}
            >
              <span>RECOMMENDED FOR YOU</span>
            </div>
          </div>
          <div className="landing-write-story">
            <h6>Share your ideas with millions of readers.</h6>
            <Link to="/new-story">
              <button>Write on Techish</button>
            </Link>
          </div>
          {tab === 0 && (
            <>
              {/* <div className="follow"> */}
              {/* <h2>Who to follow</h2> */}
              {users?.map((data) => (
                <WhoToFollow key={data?._id} data={data} />
              ))}

              {/* <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow />
              <WhoToFollow /> */}
              {/* </div> */}
            </>
          )}
          {tab === 1 && (
            <div className="landing-recommended-posts">
              {[...Array(10)].map((_, index) => {
                return (
                  <>
                    {loading && (
                      <Skeleton.Button
                        key={index}
                        style={{
                          margin: "10px 0",
                        }}
                        active={true}
                        size={"lage"}
                        shape={"default"}
                        block={true}
                      />
                    )}
                  </>
                );
              })}

              {stories?.map((data) => (
                <LandingRecommendedPost userDetails = {userDetails} key={data?._id} data={data} />
              ))}

              {/* <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost />
              <LandingRecommendedPost /> */}
            </div>
          )}
        </div>
        <div className="landing-main-right">
          <div className="recommended-topics">
          <div className="search w-100 position-relative me-4">
          <Link to="/search">
          <button
        style={{
          borderRadius:"10%",
          marginLeft: "auto",
          fontSize:"1.5rem",
          color : "#fff",
          background :"#000",
          width: "300px",
          height:"50px"
        }}
      >
        Search
      </button>
            </Link>
      {/* <input type="text" className="form-control me-2 w-100"
      value={search} placeholder="Enter your search..."
      onChange={e => setSearch(e.target.value)}  />
      
      {
        search.length >= 2 &&
        <div className="position-absolute pt-2 px-1 w-100 rounded"
        style={{
          background: '#eee', zIndex: 10,
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto'
        }}>
          {
            blogs.length
            ? blogs.map(blog => (
              <Stories key={blog._id} data={blog} />
            ))
            : <h3 className="text-center">No Blogs</h3>
          }
        </div>
      } */}
       </div>
           
          </div>
          <div className="follow">
            <h2>Who to follow</h2>
            {users?.map((data) => (
              <WhoToFollow key={data?._id} data={data} />
            ))}
            {[...Array(5)].map((_, idx) => {
              return (
                <>
                  {userLoading && (
                    <Skeleton key={idx} active avatar paragraph={{ rows: 1 }} />
                  )}
                </>
              );
            })}

            
            {/* <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow />
            <WhoToFollow /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainPage;
