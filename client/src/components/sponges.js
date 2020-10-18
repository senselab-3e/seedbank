import React, { useRef, useState, Component, Suspense } from "react";
//import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Canvas, useFrame, useLoader } from "react-three-fiber";
//import teapot from "../assets/img/pot.jpg";
import bluesponge from "../assets/img/blue-sponge.jpg";
import orangesponge from "../assets/img/orange-sponge.jpg";

import * as THREE from "three";
//import { TextureLoader } from "three";

// const chooseFromArray = (array) => {
//     var random= Math.floor(Math.random() * 15) + 0;
//     var array1=[greensponge, yellowsponge, orangesponge];
//     return array1[random];
// }
const Box = (props) => {
  const restofSponge = props.restofSponge;
  const topofSponge = props.topofSponge;
  const skinFiles = [];
  const skinPaths = [restofSponge, topofSponge];
  const skins = [];

  for (var i = 0; i < skinPaths.length; i++) {
    skinFiles[i] = new THREE.TextureLoader();
    skins.push(
      new THREE.MeshBasicMaterial({
        map: skinFiles[i].load(skinPaths[i]),
        transparent: true,
      })
    );
  }
  const materials = [
    skins[0],
    skins[1],
    skins[1],
    skins[1],
    skins[1],
    skins[1],
  ];

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const cubeSize = 1;
  // Set up state for the hovered and active state
  // eslint-disable-next-line
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        active
          ? [(cubeSize / 2) * 1.5, cubeSize * 2 * 1.5, cubeSize * 1.5]
          : [cubeSize / 2, cubeSize * 2, cubeSize]
      }
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      material={materials}
      dispose={null}
    >
      <boxBufferGeometry
        attach="geometry"
        args={[cubeSize / 2, cubeSize * 2, cubeSize]}
      />
    </mesh>
  );
};
export default class Sponges extends Component {
  render() {
    return (
      <div>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Box
              position={[-1.2, 0, 0]}
              restofSponge={bluesponge}
              topofSponge={orangesponge}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  }
}
