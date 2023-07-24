/* eslint-disable react/no-unknown-property */
import Model from "./Model";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas >
      <ambientLight />
      <pointLight position={[5,5,5]} intensity={1} />
      <pointLight position={[-3,-3,2]} />
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={1.35} floatIntensity={0.1}>
            <Model position={[-2, -3, 1]}/>
          </Float>
          <OrbitControls />
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

