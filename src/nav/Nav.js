import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="Netflix logo"
      />

      <img
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix avatar"
      />
    </div>
  );
};

export default Nav;
