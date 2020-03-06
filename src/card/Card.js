import './Card.css';

import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
function Cards(props) {
  return (
    <Card id="card_container"
    hoverable
    cover={<img alt="example" src={props.src} className="card_image"  />}
  >
    <Meta title={props.title} description={props.description} />
  </Card>
  );
}

export default Cards; 