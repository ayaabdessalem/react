import React from 'react';
import header_img from './header/header_img.jpg';
import './App.css';

import HeaderBG from  './header/HeaderBG';
import Recherche from  './recherche/Recherche';
import Cards from  './card/Card';
import Sider_items from  './sider/Sider_items';

import 'antd/dist/antd.css';

import {Col, Row } from 'antd';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div>
    <Layout>
    <Header>
      <HeaderBG src={header_img} ></HeaderBG>
    </Header>
    <Layout className="flexcontainer">
      <Sider width={200} className="site-sider-background">
        <Sider_items></Sider_items>
      </Sider>
      <Content  className="site-content-background">
        <Recherche></Recherche>

        <div className="site-card-wrapper">
          <Row  className="cards_row">
            <Col className="card_col" >
              <Cards src="http://static.est.org.tn/086f391d0404bceade7d034bca6217ce_Taha-Yassine-KHENISSI.png" title="Taha Yassine KHENISSI" description=" Attaquant"></Cards>
            </Col>
            <Col className="card_col">
              <Cards src="http://static.est.org.tn/d0dc7151cd4ad5ee9e20bbcbd4c238d8_Houcine-RABII.png" title="Houcine RABII" description="Défenseur"></Cards>
            </Col>
            <Col className="card_col">
              <Cards src="http://static.est.org.tn/7bd70f3fe17a04d3a99cf1f8da05e2aa_Chamseddine-DHAOUADI.png" title="Chamseddine DHAOUADI" description="Défenseur"></Cards>
            </Col>
          </Row>
        </div>




      </Content>
    </Layout>
  </Layout>
    </div>
  
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Task></Task>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>  */
  );
}

export default App;
