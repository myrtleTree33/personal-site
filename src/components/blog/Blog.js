import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const Blog = props => {
  const { posts } = props;
  return (
    <div>
      <div
        style={{
          margin: '2rem 0 3.2rem 0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1>Joel's Blog</h1>
      </div>
      {posts.map(p => (
        <BlogPost {...p} />
      ))}
    </div>
  );
};

export default Blog;
