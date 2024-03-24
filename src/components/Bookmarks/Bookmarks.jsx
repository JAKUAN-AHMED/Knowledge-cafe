import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,reading_time}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 rounded-xl pt-4">
            <div className='bg-slate-200 shadow-md rounded-xl mb-2'>
                <h2 className="text-center text-2xl">Spent Reading Time : {reading_time}</h2>
            </div>
            <h2 className="text-2xl text-center ">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark
                key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    reading_time:PropTypes.number,
}
export default Bookmarks;