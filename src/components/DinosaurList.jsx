import { useState, useEffect } from "react"


export default function DinosaurList({environment}) {
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
  {dinosaurs && dinosaurs.map(dinosaur => 
    dinosaur.name)}
  </>
)
}