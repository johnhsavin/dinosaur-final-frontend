import React from 'react';
import { useEffect, useState } from 'react';


export default function DinosaurList({ environment }) {

  const [dinosaurs, setDinosaurs] = useState()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dinosaurs/${environment}`)
      .then((res) => res.json())
      .then((data) => setDinosaurs(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <h1>{environment} Dinosaur Exhibit</h1>
      {dinosaurs && dinosaurs.map((dinosaur) =>
        <p>{dinosaur.name}</p>
      )}
    </>
  )
}



