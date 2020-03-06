import React from 'react';
import './sider.css';
import {  Menu } from 'antd';
const { SubMenu } = Menu;


function Sider_items(props) {
  return (
    <Menu
         
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span>Club</span>}></SubMenu>
          <SubMenu key="sub2" title={<span>Football</span>}></SubMenu>
          <SubMenu key="sub3" title={<span>Handball</span>}></SubMenu>
          <SubMenu key="sub4" title={<span>Volleyball</span>}></SubMenu>
          <SubMenu key="sub5" title={<span>Autres sports</span>}></SubMenu>
          <SubMenu key="sub6" title={<span>Vidéos</span>}></SubMenu>
        </Menu>
  );
}

export default Sider_items;