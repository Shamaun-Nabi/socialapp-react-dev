import React from "react";
import "./Share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="assets/person/1.jpeg" alt="" className="sharePic" />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats On Your Mind ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Photo/Videos</span>
            </div>
            <div className="shareOption">
              <LocalOfferIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
             <button className="shareBtn">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
