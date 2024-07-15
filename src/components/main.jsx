import React from 'react';
import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from "@react-three/fiber";
import Laptop from './Laptop';
const root =ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fav:45,
      near:0.2,
      far:2000,
      position:[-3,1.5,4]
    }}
  >
<Laptop/>
  </Canvas>
)