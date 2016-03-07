import React, { Component } from 'react';
import HomeBlogPost from './HomeBlogPost';

class HomeContainer extends Component {
  render() {

    // let mapBlogPosts = this.props.blogPosts.map(post => {
    //   return <HomeBlogPost key={post.id} />;
    // });

    return (
      <div className="homeContainer">
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
        {/*{mapBlogPosts}*/}
      </div>
    );
  }
}

export default HomeContainer;
