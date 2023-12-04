import React from 'react';
import { useEffect, useState } from 'react';
import AddDinosaurs from './AddDinosaurs';
import DinosaurCards from './DinosaurCards';

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
      <h1>{environment} Dinosaur Exhibit</h1>
      <DinosaurCards />
      <AddDinosaurs />
      {dinosaurs && dinosaurs.map((dinosaur) =>
        <p>{dinosaur.name}</p>
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



