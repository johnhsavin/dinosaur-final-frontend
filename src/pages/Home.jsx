import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '360px',
  color: '#f5dabc', 
  lineHeight: '260px',
  textAlign: 'center',
  background: '#263624',
};

// const handleClick = {environment}

// const App = () => (
//   <Carousel autoplay>
//     <div>
//       <h2 style={contentStyle} onClick={() => handleClick('/land')}>
//       Land Dinosaurs</h2>
//     </div>
//     <div>
//       <h2 style={contentStyle} onClick={() => handleClick('/air')}>Air Dinosaurs</h2>
//     </div>
//     <div>
//       <h2 style={contentStyle} onClick={() => handleClick('/sea')}>Sea Dinosaurs</h2>
//     </div>
//     {/* <div>
//       <h3 style={contentStyle}>4</h3>
//     </div> */}
//   </Carousel>
// );

// export default App;



 export default function Home() {
   return (

    <section>
    <a href="http://localhost:3000/land" target="_blank">
  <button>Land Dinos</button>
  </a>
    <a href="http://localhost:3000/sea" target="_blank">
  <button>Sea Dinos</button>
  </a>
    <a href="http://localhost:3000/air" target="_blank">
  <button>Air Dinos</button>
</a>
</section>

   )
} 