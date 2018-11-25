import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Blog from '../components/blog/Blog';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    const getPosts = async () => {
      const blogPostsRes = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/blog/posts`
      );
      let postsJson = await blogPostsRes.json();
      return postsJson;
    };

    (async () => {
      const postsMedium = await getPosts();
      console.log(postsMedium);
      const posts = postsMedium.items.slice(0, 10).map((p, i) => {
        return {
          id: i,
          heading: p.title,
          content: p['content:encoded'],
          author: p.creator,
          pubDate: p.pubDate,
          link: p.link
        };
      });

      console.log(posts);

      // update the state with posts
      this.setState({
        posts
      });
    })();
  }

  render() {
    const state = this.state;

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            background: `url(${
              process.env.REACT_APP_STATIC_FILE_URL
            }/cover.jpg)`,
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
              maxWidth: '700px'
            }}
          >
            <Blog {...state} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default Home;
