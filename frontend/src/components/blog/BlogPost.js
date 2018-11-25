import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './BlogPost.css';

const BlogPost = props => {
  const { id, heading, content } = props;
  return (
    <div
      style={{
        margin: '0 0 4.1rem 0'
      }}
      className="blog-container"
    >
      <div>
        <h2
          style={{
            fontFamily: 'Amatic SC',
            fontSize: '2.8em',
            // fontWeight: 500,
            marginBottom: '1rem'
          }}
        >
          {heading}
        </h2>
      </div>
      <div
        style={
          {
            // fontFamily: 'Roboto',
            // fontWeight: 300
          }
        }
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPost;
