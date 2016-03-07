import React, { Component } from 'react';

const HomeBlogPost = () => {
  return (
    <article className="homeBlogPost">
      <div>
        <img className="homeBlogPostProfilePic" src="http://www.hdwallpapers.in/walls/new_york_skyline-wide.jpg" alt="profile-pic" />
        <span className="homeBlogPostName">John M. Doe</span>
      </div>
      <div>
        <h2>Title of the article</h2>
      </div>
      <div>
        <img className="homeBlogPostBannerImg" src="http://www.hdwallpapers.in/walls/new_york_skyline-wide.jpg" alt="image"/>
      </div>
      <div>
        <p><em>Beginning of article about a sentence length...</em></p>
      </div>
      <div>
        <i className="fa fa-heart-o fa-2x"></i>
          <span className="homeBlogPostLikeIcon">7364</span>
        <i className="fa fa-bookmark-o fa-2x"></i>
      </div>
    </article>
  );
};

export default HomeBlogPost;
