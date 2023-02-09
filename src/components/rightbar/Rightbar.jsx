import React, { useEffect } from "react"
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>remissa Oumaima </b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd"></img>
        <h4 className="rightbarTitle">Online friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
