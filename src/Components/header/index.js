import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "./index.css";
const index = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.logo.wine/a/logo/OneDrive/OneDrive-Logo.wine.svg"
          alt=""
        />
        <span>Aswin Storage</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          {/* <SearchIcon className="search" /> */}
          <input type="text" placeholder="Search In Drive" />
          {/* <ExpandMoreIcon /> */}
        </div>
      </div>

      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt="pic" />
      </div>
    </div>
  );
};

export default index;
