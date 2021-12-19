import React, { useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Users } from "../../dummyData";

export default function Post(props) {
  const [manLike, setManLike] = useState(props.onePost.like);
  const [isManLike, setIsManLike] = useState(false);
  const { date, desc, photo, like, comment } = props.onePost;

  // const user = Users.filter((u) => u.id === 1);
  // console.log(user);
  // console.log(props);
  const likeHandler = () => {
    console.log("like");
    setManLike(isManLike ? manLike - 1 : manLike + 1);
    setIsManLike(!isManLike);
    console.log(isManLike);
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostTop">
          <div className="postLeftTop">
            <img
              className="profileWithPost"
              src={
                Users.filter((u) => u.id === props.onePost.userId)[0]
                  .profilePicture
              }
              alt="Your profile"
            />
            <span className="profileNameText">
              {Users.filter((u) => u.id === props.onePost.userId)[0].username}
            </span>
            <span className="displayTime">{date}</span>
          </div>
          <div className="postRightTop">
            <MoreHorizIcon className="moreIcon" />
          </div>
        </div>
        <div className="singlePostCenter">
          <span className="sharePostText">{desc}</span>
          <img className="postImage" src={photo} alt="" />
        </div>
        <div className="singlePostBottom">
          <div className="bottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onclick={likeHandler}
              alt=""
            />
            <span className="likeText">{manLike} People Like This</span>
          </div>
          <div className="bottomRight">
            <span className="commentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
