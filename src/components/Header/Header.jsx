import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center pt-4  border-b-2 max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile}></img>
        </header>
    );
};

export default Header;