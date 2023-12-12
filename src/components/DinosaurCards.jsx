import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default function DinosaurCards({ dinosaur }) {
  return (

    <Card
      hoverable
      style={{
        width: 460,
        marginBottom: 16,
      }}
      cover={<img alt="dinosaurs" onError={e => e.target.src="https://blog-app-jhs.s3.amazonaws.com/BocaCodeasaurusfunny.jpg"} src={dinosaur.imageUrl} />}
    >
      <Meta title={dinosaur.name} />
      <p>{dinosaur.diet}</p>
      <Meta description={dinosaur.description} />
    </Card>
  )
}

