import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
export default function DinosaurCards(dinosaur) {
<Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="dinosaurs" src="./trex2.jpg" />}
>
  <Meta name={dinosaur.name} description={dinosaur.description} />
</Card>
}






// import React from 'react';
// import { Card, Flex, Typography } from 'antd';

// const cardStyle = {
//   width: 620,
// };
// const imgStyle = {
//   display: 'block',
//   width: 273,
// };
// export default function DinosaurCards() {
//   <Card
//     hoverable
//     style={cardStyle}
//     bodyStyle={{
//       padding: 0,
//       overflow: 'hidden',
//     }}
//   >
//     <Flex justify="space-between">
//       <img
//         alt="avatar"
//         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//         style={imgStyle}
//       />
//       <Flex
//         vertical
//         align="flex-end"
//         justify="space-between"
//         style={{
//           padding: 32,
//         }}
//       >
//         <Typography.Title level={3}>
//           “antd is an enterprise-class UI design language and React UI library.”
//         </Typography.Title>
//         <Button type="primary" href="https://ant.design" target="_blank">
//           Get Start
//         </Button>
//       </Flex>
//     </Flex>
//   </Card>
// };
