import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div id="navbar">
         <div id="logo">
            <img src="https://flowbite.com/docs/images/logo.svg"></img>
            <h2>GeekFoods</h2>
         </div>
         <div>
            <ul>
              <li>Home</li>
              <li>Quote</li>
              <li>Resturants</li>
              <li>Foods</li>
              <li>Contact</li>
            </ul>
         </div>
          <button>Get started</button>
          <div id="hamburger">
          <MenuIcon/>
         </div>
    </div>
  )
}

export default Navbar;
