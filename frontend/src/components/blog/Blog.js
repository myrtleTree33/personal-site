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
        <h1
          style={{
            fontFamily: 'Amatic SC',
            fontSize: '3em'
          }}
        >
          Joel's Blog
        </h1>
      </div>
      {posts.map(p => (
        <BlogPost key={p.id} {...p} />
      ))}
    </div>
  );
};

export default Blog;
