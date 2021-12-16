import React from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import PostFeeds from "../../components/PostFeeds/PostFeeds";
import RightBar from "../../components/RightBar/RightBar";
import Topbar from "../../components/TopBar/Topbar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <LeftBar />
        <PostFeeds />
        <RightBar />
      </div>
    </>
  );
}
