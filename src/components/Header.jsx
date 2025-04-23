import { useState } from "react";
import { CDN_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <span>Online Status:</span>
            <span
              className="status"
              style={{ color: onlineStatus ? "green" : "red" }}
            >
              {" "}
              {onlineStatus ? "Online" : "Offline"}
            </span>{" "}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
