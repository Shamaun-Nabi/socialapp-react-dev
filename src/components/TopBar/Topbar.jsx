import React from "react";
import "./Topbar.css";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <>
      {/* Topbar Container Start */}
      <div className="topbarContainer">
        {/* *************************** */}
        {/* Topbar Left */}
        {/* **************************** */}
        <div className="topbarLeft">
          <span className="logo">NabiSocial</span>
        </div>
        {/* *********************************** */}
        {/* Topbar Center */}
        {/* *********************************** */}
        <div className="topbarCenter">
          <div className="searchBar">
            <PersonSearchIcon className="searchBarIcon" />
            <input
              type="text"
              placeholder="Search For Friend Or Post"
              className="searchInput"
            />
          </div>
        </div>
        {/* ******************************************* */}
        {/* Topbar Right */}
        {/* ******************************************* */}
        <div className="topbarRight">
          <div className="topbarLink">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcon">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <ChatBubbleIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <img
            src="assets/person/8.jpeg"
            alt="profile-avatar"
            className="topbarImage"
          />
        </div>
        {/* ***************************************** */}
      </div>
    </>
  );
}
