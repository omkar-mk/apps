
import HomeHeader from '../HomePage/HomeHeader'
// import './css/index.css'
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Stories from '../MyStories/Stories';
import LandHeader from '../LandingPage/LandHeader';
import './story.css'
const Index = () => {
  const [search, setSearch] = useState('')
  const [blogs, setBlogs] = useState([])
  
  const { pathname } = useLocation()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/stories/search/stories?title=${search}`
      );
      const data = await response.json();
      const results = data;
      setBlogs(results);
    }
    fetchData();
  };


  // useEffect(() => {
  //   const delayDebounce = setTimeout(async () => {
  //     if(search.length < 2) return setBlogs('');

  //     try {
  //       const res = await fetch(`http://localhost:3000/api/stories/search/stories?title=${search}`)
  //       setBlogs(res.data)
  //       console.log(blogs)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }, 400)

  //   return () => clearTimeout(delayDebounce)
  // },[search])


  // useEffect(() => {
  //   setSearch('')
  //   setBlogs('')
  // },[pathname])

  return (
    
    <>
       <LandHeader />
        {/* Story Content */}
        <div class="main">
        <form onSubmit={handleSubmit}>
        <br />
        <label>
          <input
            class="input"
            type="text"
            placeholder=""
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}      
          />
        </label><br />
        <input  class="sub" type="submit" value="Submit" />
      </form>
      
        
      <Stories key={blogs._id} data={blogs.data} />
        
              
      {/* <div>
        {
          blogs.map(item=><h5>{item.title}</h5>)
        }
      </div> */}
      </div>
    </>
  )
}

export default Index


