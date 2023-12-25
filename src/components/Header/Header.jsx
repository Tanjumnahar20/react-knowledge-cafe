import './Header.css'
import   images from'./../../../public/images/profile.png';
const Header = () => {
    return (
        <div>
             <nav className='header'>
            <h2>knowledge cafe</h2>
                
      <div className='nav'>
      <a href="/home">home</a>
                <a href="/more">more</a>
                <a href="/about us">about us</a>
      </div>
                <img src={images} alt="" />
             </nav>
         </div>
    );
};

export default Header;