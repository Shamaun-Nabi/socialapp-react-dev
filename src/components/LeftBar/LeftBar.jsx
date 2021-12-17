import React from "react";
import "./LeftBar.css";
import FeedIcon from "@mui/icons-material/Feed";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import WorkIcon from "@mui/icons-material/Work";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SchoolIcon from "@mui/icons-material/School";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="leftWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="listIcon" />
            <span className="listName">NewsFeed</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibraryIcon className="listIcon" />
            <span className="listName">Videos</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="listIcon" />
            <span className="listName">Chat</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="listIcon" />
            <span className="listName">Group</span>
          </li>
          <li className="sidebarListItem">
            <DateRangeIcon className="listIcon" />
            <span className="listName">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="listIcon" />
            <span className="listName">Courses</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="listIcon" />
            <span className="listName">Job</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="listIcon" />
            <span className="listName">Bookmark</span>
          </li>
        </ul>
        <button className="showBtn">Show More</button>
        <hr className="hrDs" />
        <ul className="friendList">
          <li className="friendListItem">
            <img
              src="/assets/person/4.jpeg"
              alt="friendImage"
              className="friendImage"
            />
            <span className="friendNameText">Maha Chowdhury</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/4.jpeg"
              alt="friendImage"
              className="friendImage"
            />
            <span className="friendNameText">Maha Chowdhury</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/4.jpeg"
              alt="friendImage"
              className="friendImage"
            />
            <span className="friendNameText">Maha Chowdhury</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
