import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { Divider } from 'antd';


export default function Home() {
  const nav = useNavigate()
  return (
    <>
    <Divider style={{ borderColor: 'rgb(103, 13, 13)'}}></Divider>
    <p className='homeDivider'>
      Roar into Adventure!
       Join the Young Dino Hunters Trio on a Prehistoric Quest! Journey with Our Explorers as they Unleash the Thrill of the Dig and Dinosaur Discovery.
      </p>
    <Divider style={{ borderColor: 'rgb(103, 13, 13)'}}></Divider>

    <body>
      <section className='home-pics'>
        <div onClick={() => { nav('/land') }}>
          <Image
            width={750}
            src="/trex.jpg" alt="Land Dinosaurs" />
        </div>

        <div onClick={() => { nav('/sea') }}>
          <Image
            width={750}
            src="/mosaurus.png" alt="Water Dinosaurs" />
        </div>

        <div onClick={() => { nav('/air') }}>
          <Image
            width={750}
            src="/pterodactyl.png" alt="Air Dinosaurs" />
        </div>
      </section>
    </body>
    </>


  )
}