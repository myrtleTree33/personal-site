import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Button, Card } from 'antd';

const Contact = props => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: '50% 50%',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Card style={{ width: '100%', maxWidth: 960 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <Avatar
            size={128}
            src={`${process.env.REACT_APP_STATIC_FILE_URL}/profile.jpg`}
          />
        </div>
        <div style={{ marginBottom: '2.4rem' }}>
          <p>
            <h1 style={{ marginBottom: '2.4rem' }}>Hi welcome.</h1>
          </p>
          <p>My name is Joel and I love building things with code. </p>
          <p>
            Besides coding, I have an interest in travel, photography, and
            history. My favorite plane is the A350.
          </p>
          <p>
            I have been working in the airline and travel industries, having won
            second in an airlines hackathon 2015.
          </p>
          <p>Reach out to me here:</p>
        </div>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <Button
            type="primary"
            shape="circle"
            style={{ margin: '0 .5rem' }}
            icon="linkedin"
            href="https://www.linkedin.com/in/jhtong/"
          />
          <Button
            type="primary"
            shape="circle"
            style={{ margin: '0 .5rem' }}
            icon="facebook"
            href="https://www.facebook.com/joeltong"
          />
          <Button
            type="primary"
            shape="circle"
            style={{ margin: '0 .5rem' }}
            icon="github"
            href="https://github.com/myrtleTree33/"
          />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
