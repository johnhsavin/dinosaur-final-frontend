import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Flex, Typography } from 'antd';
import AddDinosaurs from './AddDinosaurs';
import DinosaurCards from './DinosaurCards';

const cardStyle = {
  width: 620,
};
const imgStyle = {
  display: 'block',
  width: 273,
};

export default function DinosaurList({ environment }) {

  const [dinosaurs, setDinosaurs] = useState()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs/${environment}`)
      .then((res) => res.json())
      .then((data) => setDinosaurs(data))
      .catch(console.error)
  }, [environment, open])

  return (
    <>
      <h1>{environment} Dinosaur Dig Site</h1>
      <DinosaurCards />
      <AddDinosaurs />
      {dinosaurs && dinosaurs.map((dinosaur) =>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <Flex justify="space-between">
            <img
              alt="dinosaur"
              src='/trex.jpg'
              style={imgStyle}
            />
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{
                padding: 32,
              }}
            >
              <Typography.Title level={3}>
                {dinosaur.title}
              </Typography.Title>
              <Typography.Paragraph>
                {dinosaur.description}
              </Typography.Paragraph>

            </Flex>
          </Flex>
        </Card>
      )}
    </>
  )
}
// {/* <button
//   type="primary"
//   onClick={() => {
//     setOpen(true);
//   }}
// >
//   New Dinosaur Discovery
// </button>
// <CollectionCreateForm
//   open={open}
//   onCreate={onCreate}
//   onCancel={() => {
//     setOpen(false);
//   }}
// /> */}



