import React from "react";
import "./RightBar.css";

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Maha</b> and <b>6 other friends</b> have a Birthday Today !!
          </span>
        </div>
        <img
          className="adImage"
          src="https://images.pexels.com/photos/3952230/pexels-photo-3952230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <h4 className="onlineFriendTitle">Online Friends</h4>
        <ul className="friendlist">
          <li className="friendName">
            <div className="friendImageContainer">
             <div className="imageContainer">
             <img className="friendImageRightbar" src="assets/person/6.jpeg" alt="pic" />
              <span className="rightBarFriendName">Jhon doe</span>
              <span className="onlineIcon"></span>
             </div>
             <div className="activestatus">
               <span>Active</span>
             </div>
            </div>
          </li>
          <li className="friendName">
            <div className="friendImageContainer">
             <div className="imageContainer">
             <img className="friendImageRightbar" src="assets/person/6.jpeg" alt="pic" />
              <span className="rightBarFriendName">Jhon doe</span>
              <span className="onlineIcon"></span>
             </div>
             <div className="activestatus">
               <span>26 mins Ago </span>
             </div>
            </div>
          </li>
          <li className="friendName">
            <div className="friendImageContainer">
             <div className="imageContainer">
             <img className="friendImageRightbar" src="assets/person/6.jpeg" alt="pic" />
              <span className="rightBarFriendName">Jhon doe</span>
              <span className="onlineIcon"></span>
             </div>
             <div className="activestatus">
               <span>Active an Hour Ago</span>
             </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
