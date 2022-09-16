import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [toggle, settoggle] = useState("close");
  const toggleHandler = () => {
    toggle === "close" ? settoggle("open") : settoggle("close");
    console.log("click", toggle);
  };
  return (
    <header>
      <div className="icon">
        <FaBars onClick={toggleHandler} />
      </div>
      <nav className={`${toggle}`}>
        <ul>
          <li>Works</li>
          <li>Blog</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
