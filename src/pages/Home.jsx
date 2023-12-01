import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';

const contentStyle = {
  height: '360px',
  width: '60%',
  color: '#f5dabc', 
  lineHeight: '260px',
  textAlign: 'center',
  background: '#263624',
  margin: 'auto',
  
};

const App = () => {
   const nav = useNavigate()
return (
  <Carousel autoplay>
    <div className='carousel-container' onClick={() => { nav('/land') }}>
      <h2 style={contentStyle}>
      <img src={process.env.PUBLIC_URL + "/trex.jpg"} alt="land dino pic" />
       Land Dinosaurs</h2>
     </div>
     <div className='carousel-container' onClick={() => { nav('/air') }}>
       <h2 style={contentStyle}>Air Dinos</h2>
       <img src={process.env.PUBLIC_URL + "/pterodactyl.png"} alt="air dinosaur pic" />
     </div>
     <div className='carousel-container' onClick={() => { nav('/sea') }}>
       <h2 style={contentStyle}>Sea Dinos</h2>
       <img src={process.env.PUBLIC_URL + "/mosaurus.png"} alt="sea dinosaur pic" />
     </div>
   </Carousel>
)
};
 export default App;


// export default function Home() {
//    const nav = useNavigate()
//    return (
//       <section>
//          <button onClick={() => { nav('/land') }}>Land Dinos</button>
//          <button onClick={() => { nav('/sea') }}>Sea Dinos</button>
//          <button onClick={() => { nav('/air') }}>Air Dinos</button>
//       </section>

//    )
// } 