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
        Join Rex, Rappy, Rizzo and friends on a Prehistoric Quest! 
      </p>
      <p className='homeDivider'>
       Journey with Our Explorers for an Epic Thrill of Dinosaur Discovery.
      </p>
      <Divider style={{ borderColor: 'rgb(103, 13, 13)' }}></Divider>

      <body>
        <section className='home-pics'>
          <div className='image-container' onClick={() => { nav('/land') }}>
            <img
              // width={width}
              src="/trex.jpg" alt="Land Dinosaurs" />
            <div class="overlay">Land</div>
          </div>

          <div className='image-container' onClick={() => { nav('/sea') }}>
            <img
              width={width}
              src="https://blog-app-jhs.s3.amazonaws.com/Mosasaur1.jpg" alt="Water Dinosaurs" />
            <div class="overlay">Sea</div>
          </div>

          <div className='image-container' onClick={() => { nav('/air') }}>
            <img
              width={width}
              src="/pterodactyl.png" alt="Air Dinosaurs" />
            <div class="overlay">Air</div>
          </div>
        </section>
      </body>
    </>


  )
}