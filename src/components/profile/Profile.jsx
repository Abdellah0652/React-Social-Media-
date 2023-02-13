import React, { useEffect } from "react"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import "./profile.css"
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover"></div>
            <div className="profileCoverImg"></div>
            <div className="profileUserImg"></div>
          </div>
          <div className="profileRightBottom"></div>
          <Feed />
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default Profile
