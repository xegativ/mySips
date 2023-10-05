import React from "react";

const HomeNav = () => {
  return (
    <div className="nav-top">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#app">Log in</a>
        </li>
        <li>
          <a href="#app" className="nav-try">
            Try out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
