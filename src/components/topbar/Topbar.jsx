import React, { useEffect } from "react"
import "./topbar.css"
import * as All from "@material-ui/icons"
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <All.Search />
          <input type="text" placeholder="Search for friends post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home page</span>
          <span className="topbarLink">Time line</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <All.Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <All.Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <All.Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
