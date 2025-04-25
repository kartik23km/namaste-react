import { useState } from "react";
import { CDN_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center p-5 rounded-md m-5 bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-20" src={CDN_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-items flex gap-10">
          <li className="bg-blue-200 px-4 py-2 rounded-lg">
            <span>Online Status:</span>
            <span
              className="status"
              style={{ color: onlineStatus ? "green" : "red" }}
            >
              {" "}
              {onlineStatus ? "Online" : "Offline"}
            </span>{" "}
          </li>
          <li className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="bg-amber-100 px-4 py-2 rounded-lg  hover:shadow-lg cursor-pointer">
            Cart
          </li>
          <button
            className="bg-blue-200 px-4 py-2 rounded-lg  hover:shadow-lg cursor-pointer"
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
