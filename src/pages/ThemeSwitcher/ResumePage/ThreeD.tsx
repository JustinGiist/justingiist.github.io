import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

interface ThreeDComponentProps {}
const ThreeDComponent = (props: ThreeDComponentProps) => {
  const Box = (props: any) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<MeshProps>();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
      if (ref.current) ref.current.rotation.x += 0.01;
    });
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };
  const D20 = (props: any) => {
    const verticesOfCube = [
      -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
      -1, 1, 1,
    ];
    const indicesOfFaces = [
      2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
      3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4,
    ];
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<MeshProps>();
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
      if (ref.current) ref.current.rotation.x += 0.01;
    });
    return (
      <mesh {...props} ref={ref}>
        <polyhedronBufferGeometry
          attach="geometry"
          args={[verticesOfCube, indicesOfFaces, 1, 2]}
        />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    );
  };
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <D20 position={[1.2, 0, 0]} />
    </Canvas>
  );
};
export default ThreeDComponent;
