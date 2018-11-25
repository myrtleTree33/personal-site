import React, { Component, PropTypes } from 'react';
import Contact from '../components/contact/Contact';

const ContactScreen = ({ name }) => {
  return <Contact />;
};

ContactScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default ContactScreen;
