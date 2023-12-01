import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import AddDinosaurs from './AddDinosaurs';

export default function DinosaurList({ environment }) {

  const [dinosaurs, setDinosaurs] = useState()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs/${environment}`)
      .then((res) => res.json())
      .then((data) => setDinosaurs(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <h1>{environment} Dinosaur Exhibit</h1>
      <AddDinosaurs />
      {dinosaurs && dinosaurs.map((dinosaur) =>
        <p>{dinosaur.name}</p>
      )}
    </>
  )
}



