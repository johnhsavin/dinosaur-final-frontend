import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
export default function DinosaurCards(dinosaur) {
<Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="dinosaurs" src="./trex2.jpg" />}>
  <Meta title={dinosaur.name} description={dinosaur.description} />
</Card>
}

