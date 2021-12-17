import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./PostFeeds.css";
import { Posts } from "../../dummyData";

export default function PostFeeds() {
  // console.log(Posts);
  return (
    <div className="postFeeds">
      <div className="postWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} onePost={post} />
        ))}
      </div>
    </div>
  );
}
