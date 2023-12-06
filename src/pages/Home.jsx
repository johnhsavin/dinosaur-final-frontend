import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';


export default function Home() {
  const nav = useNavigate()
  return (
    
      <main>
        <div onClick={() => { nav('/land') }}>
          <Image
            width={500}
            src="/trex.jpg" alt="a pic of a land carnivore" />
        </div>

        <div onClick={() => { nav('/sea') }}>
          <Image
            width={500}
            src="/mosaurus.png" alt="a pic of a water carnivore" />
        </div>

        <div onClick={() => { nav('/air') }}>
          <Image
            width={500}
            src="/pterodactyl.png" alt="a pic of an air carnivore" />
        </div>
      </main>
   

  )
}