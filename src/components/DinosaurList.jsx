import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'antd';
import AddDinosaurs from './AddDinosaurs';


const { Meta } = Card;

const dinoEnvironments = {
  land: 'Land',
  sea: 'Sea',
  air: 'Air'
}

export default function DinosaurList({ environment }) {

  const [dinosaurs, setDinosaurs] = useState()
  const [open, setOpen] = useState(false);
console.log(dinosaurs)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs/${environment}`)
      .then((res) => res.json())
      .then((data) => setDinosaurs(data))
      .catch(console.error)
  }, [environment, open])

  return (
    <section>
    
      <h1>{dinoEnvironments[environment]} Dinosaur Dig Site</h1>
      <AddDinosaurs />
      {dinosaurs && dinosaurs.map((dinosaur) =>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={<img alt="dinosaurs" src={dinosaur.imageUrl}/>}
        >
          <Meta title={dinosaur.name} description={dinosaur.description} />
        </Card>

      )};   
   </section>
  )
} 
