//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [instaFeed, setInstaFeed] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {instaFeed.map((postObj, index) => {
        return <Post key={index} post={postObj} />
      })}
    </div>
  );
};

export default PostsPage;

