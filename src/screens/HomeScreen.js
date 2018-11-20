import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../components/blog/Blog';

const Home = () => {
  const getPosts = () => {
    return [
      {
        id: 0,
        heading: 'Hello World!',
        content: 'This is a sample post'
      },
      {
        id: 1,
        heading: 'Hello World 2!',
        content: 'This is a sample post'
      }
    ];
  };

  const props = {
    posts: getPosts()
  };

  return (
    <div>
      <div
        style={{
          background: 'grey',
          minHeight: '50vh',
          width: '100%'
        }}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '960px'
          }}
        >
          <Blog {...props} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default Home;
