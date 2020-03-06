import React from 'react';
 import './recherche.css' 

 import { Input } from 'antd';
 const { Search } = Input;

function Recherche() {
  return (
    <div className="container_add">
      <Search placeholder="Rechercher" onSearch={value => console.log(value)} enterButton />

        </div>
  );
}

export default Recherche;
