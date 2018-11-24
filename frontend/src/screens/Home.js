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
        heading: 'The day the earth stood still',
        content: 'This is a sample post'
      }
    ];
  };

  const props = {
    posts: getPosts()
  };

  console.log(process.env.REACT_APP_STATIC_FILE_URL);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          background: `url(${process.env.REACT_APP_STATIC_FILE_URL}/cover.jpg)`,
          backgroundPosition: '50% 50%',
          minHeight: '80vh',
          width: '100%'
        }}
      >
        <div>
          <h1
            style={{
              color: '#fff',
              fontSize: '2.1em'
            }}
          >
            {/* Random Musings */}
          </h1>
        </div>
      </div>
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
