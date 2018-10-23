import React, { Component, PropTypes } from "react";
import { Button } from "antd";

const Home = ({ name }) => {
  return (
    <div>
      This is the Home page
      <Button type="primary">Button</Button>
    </div>
  );
};

Home.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default Home;
