import { CDN_URL } from "./utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={CDN_URL} />
    </div>
    <div className="nav-container">
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
