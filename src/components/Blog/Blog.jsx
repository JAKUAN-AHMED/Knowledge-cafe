import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";
const Blog = ({blog,handleAddtoBookmark,handleMarkAsRead}) => {
    const {title,cover,hashtags,reading_time,author,posted_date,author_img}=blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center'>
                    <img className='w-14'  src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center flex'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddtoBookmark(blog)}
                     className='ml-2  text-2xl'><BsBookmarks /></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span className='m-2' key={idx}><a>#{hash}</a></span>)
                }
            </p>

            <button className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddtoBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func,
    
}
export default Blog;