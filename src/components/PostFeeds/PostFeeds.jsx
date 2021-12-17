import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./PostFeeds.css";

export default function PostFeeds() {
  return (
    <div className="postFeeds">
      <div className="postWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
