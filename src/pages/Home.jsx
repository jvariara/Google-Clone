import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Apps } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <span className="no-cursor" >About</span>
          <span className="no-cursor" >Store</span>
        </div>

        <div className="home__header--right">
          <span className="no-cursor" >Gmail</span>
          <span className="no-cursor" >Images</span>
          <Apps />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__input--container">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
