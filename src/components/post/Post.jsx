import React from "react"
import "./post.css"
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assest/person/1.jpeg" alt="" />
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}

export default Post
