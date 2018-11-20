import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

const Blog = props => {
  const { posts } = props;
  return (
    <div>
      <div>
        <h1>Joel's blog</h1>
      </div>
      {posts.map(p => (
        <BlogPost {...p} />
      ))}
    </div>
  );
};

export default Blog;
