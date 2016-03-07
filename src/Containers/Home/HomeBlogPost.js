import React, { Component } from 'react';

const HomeBlogPost = () => {
  return (
    <article className="homeBlogPost">
      <div>
        <img className="homeBlogPostProfilePic" src="http://www.hdwallpapers.in/walls/new_york_skyline-wide.jpg" alt="profile-pic" />
        <span>Poster's Name</span>
      </div>
      <div>
        <h2>Title of the article</h2>
      </div>
      <div>
        <img className="homeBlogPostBannerImg" src="http://www.hdwallpapers.in/walls/new_york_skyline-wide.jpg" alt="image"/>
      </div>
      <div>
        <p>Beginning of article about a sentence length</p>
      </div>
      <div>
        <i className="fa fa-heart-o fa-lg"></i>
      </div>
    </article>
  );
};

export default HomeBlogPost;
