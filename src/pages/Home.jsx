import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { Divider } from 'antd';


export default function Home() {
  const nav = useNavigate()
  return (
    <>
    <Divider></Divider>
    <p className='homeDivider'>
      Roar into Adventure:
       Join the Young Dino Hunters Trio on a Prehistoric Quest! Journey with Our Explorers as they Unleash the Thrill of the Dig and Dinosaur Discovery.
      </p>
    <Divider></Divider>

    <body>
      <section className='home-pics'>
        <div onClick={() => { nav('/land') }}>
          <Image
            width={750}
            src="/trex.jpg" alt="a pic of a land carnivore" />
        </div>

        <div onClick={() => { nav('/sea') }}>
          <Image
            width={750}
            src="/mosaurus.png" alt="a pic of a water carnivore" />
        </div>

        <div onClick={() => { nav('/air') }}>
          <Image
            width={750}
            src="/pterodactyl.png" alt="a pic of an air carnivore" />
        </div>
      </section>
    </body>
    </>


  )
}