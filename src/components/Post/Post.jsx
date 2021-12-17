import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Post() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostTop">
          <div className="postLeftTop">
            <img
              className="profileWithPost"
              src="/assets/person/2.jpeg"
              alt="Your profile"
            />
            <span className="profileNameText">Shamaun Nabi</span>
            <span className="displayTime">58 Mins Ago</span>
          </div>
          <div className="postRightTop">
            <MoreHorizIcon className="moreIcon" />
          </div>
        </div>
        <div className="singlePostCenter">
          <span className="sharePostText"> Hey !! This Is My First Post</span>
          <img className="postImage" src="/assets/post/8.jpeg" alt="" />
        </div>
        <div className="singlePostBottom">
          <div className="bottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" srcset="" />
            <img  className="likeIcon"src="assets/heart.png" alt="" srcset="" />
            <span className="likeText">21 people Like This</span>
          </div>
          <div className="bottomRight">
            <span className="commentText">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
