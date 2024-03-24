import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddtoBookmark,handleMarkAsRead})=> {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('blogs.json');
            const data=await res.json();
            setBlogs(data);
        }
        fetchData();
    },[]);
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog 
                    blog={blog}
                    handleMarkAsRead={handleMarkAsRead}
                    handleAddtoBookmark={handleAddtoBookmark}
                    key={blog.id}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddtoBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func,
}
export default Blogs;