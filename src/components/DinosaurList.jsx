import React from 'react';
import { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;


export default function DinosaurList({ environment }) {
  
  const [dinosaurs, setDinosaurs] = useState()
  
  useEffect(() => {
    fetch(`http://localhost:8080/dinosaurs/${environment}`)
    .then((res) => res.json())
    .then((data) => setDinosaurs(data))
    .catch(console.error)
  }, [])

  return (
    <>
      <h1>{environment.toUpperCase()} Dinosaur Exhibit</h1>
      {/* {dinosaurs && dinosaurs.map((dinosaur) =>
        <p>{dinosaur.name}</p>
      )} */}
  
  <Card
  style={{
    width: 300,
  }}
  cover={
    <img
    alt="Tyrannosaurus Rex"
    src="https://unsplash.com/photos/brown-dinosaur-illustration-hYKG311mff8"
    />
  }
  actions={[
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ]}
  >
    <Meta
      title={dinosaurs && dinosaurs.map((dinosaur) =>
        dinosaur.name)}
        description="This is the description"
        />
  </Card>
        </>

)
}



