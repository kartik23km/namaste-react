import { useContext, useState } from "react";
import { CDN_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { userName } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

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
            <Link to="/cart"> Cart - {cart.length}</Link>
          </li>
          <button
            className="bg-blue-200 px-4 py-2 rounded-lg  hover:shadow-lg cursor-pointer"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
          <div className="bg-blue-200 px-4 py-2 rounded-lg  hover:shadow-lg ">
            Username: {userName}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
