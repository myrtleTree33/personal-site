import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { id, heading, content } = props;
  return (
    <div
      style={{
        margin: '0 0 4.1rem 0'
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: '1rem'
          }}
        >
          {heading}
        </h2>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default BlogPost;
