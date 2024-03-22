import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('blogs.json');
            const data=await res.json();
            console.log(data);
        }
        fetchData();
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;