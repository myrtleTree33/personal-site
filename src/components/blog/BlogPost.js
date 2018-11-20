import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { id, heading, content } = props;
  return (
    <div
      style={{
        margin: '0 0 3.2em 0'
      }}
    >
      <div>{heading}</div>
      <div>{content}</div>
    </div>
  );
};

export default BlogPost;
