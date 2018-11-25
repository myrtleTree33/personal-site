import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import HomeScreen from './screens/Home';
import PortfolioScreen from './screens/Portfolio';
import ContactScreen from './screens/Contact';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout" style={{ minHeight: '100vh' }}>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              {/* <Menu.Item key="2">
                <Link to="/portfolio">Portfolio</Link>
              </Menu.Item> */}
              <Menu.Item key="2">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              padding: '0 0px'
            }}
          >
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              {/* <Route path="/portfolio" component={PortfolioScreen} /> */}
              <Route path="/contact" component={ContactScreen} />
            </Switch>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              margin: '2rem 0 1rem 0'
            }}
          >
            <div
              style={{
                fontFamily: 'Inconsolata',
                fontSize: '1em'
              }}
            >
              Made in Singapore
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
