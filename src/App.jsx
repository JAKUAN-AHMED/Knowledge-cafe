import './App.css'
import './index.css';
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState, useTransition } from 'react';

function App() {
  
  const [bookmarks,setBookmark]=useState([]);
  const  [reading_time,setReading_time]=useState(0);
  const handleAddtoBookmark=blog=>{
    // console.log('adding bookmakrs',blog);
    const newBookmark=[...bookmarks,blog];
    setBookmark(newBookmark);
    
  }
  const handleMarkAsRead=time=>{
    setReading_time(reading_time+time);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs 
        handleAddtoBookmark={handleAddtoBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks 
        reading_time={reading_time}
        bookmarks={bookmarks}></Bookmarks>
      </div>      
    </>
  )
}

export default App
