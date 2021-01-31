import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShowBackground(true);
      else setShowBackground(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${showBackground && "header--black"} `}>
      <h1 className="header__logo">Totaflix</h1>
      {/* <img src="/totaflix.png" alt="totaflix logo" /> */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
        className="header__avatar"
      />
    </div>
  );
}

export default Header;
