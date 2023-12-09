import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { Divider } from 'antd';


export default function Home() {
  const nav = useNavigate()
  const width = 460
  return (
    <>
      <Divider style={{ borderColor: 'rgb(103, 13, 13)' }}></Divider>
      <p className='homeDivider'>
        Join Rex, Rappy, Rizzo and friends on a Prehistoric Quest! <br /> Journey with Our Explorers as they Unleash the Thrill of the Dig and Dinosaur Discovery.
      </p>
      <Divider style={{ borderColor: 'rgb(103, 13, 13)' }}></Divider>

      <body>
        <section className='home-pics'>
          <div className='image-container' onClick={() => { nav('/land') }}>
            <Image
              width={width}
              src="/trex.jpg" alt="Land Dinosaurs" />
            <div class="overlay">Land</div>
          </div>

          <div className='image-container' onClick={() => { nav('/sea') }}>
            <Image
              width={width}
              src="https://blog-app-jhs.s3.amazonaws.com/Mosasaur1.jpg" alt="Water Dinosaurs" />
            <div class="overlay">Sea</div>
          </div>

          <div className='image-container' onClick={() => { nav('/air') }}>
            <Image
              width={width}
              src="/pterodactyl.png" alt="Air Dinosaurs" />
            <div class="overlay">Air</div>
          </div>
        </section>
      </body>
    </>


  )
}