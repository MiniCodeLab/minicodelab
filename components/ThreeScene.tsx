import styled from '@emotion/styled';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { BoxGeometryProps, Canvas, MaterialProps } from '@react-three/fiber';
import React, { useRef } from 'react';

// Inspirations:
// https://drei.pmnd.rs/?path=/story/loaders-gltf--draco-local-scene-st
// https://github.com/oslavdev/next-three-example/blob/master/src/components/Model.tsx
type GLTFResult = {
  nodes: Record<
    string,
    {
      material: MaterialProps;
      uuid: string;
      geometry: BoxGeometryProps;
    }
  >;
  materials: Record<string, MaterialProps>;
};

const Model = (props) => {
  const { materials, nodes } = useGLTF('/models/minicody-sad.gltf') as unknown as GLTFResult;

  return (
    <>
      <group dispose={null} {...props}>
        {Object.values(nodes).map((node) =>
          node.material ? (
            <mesh
              key={node.uuid}
              material={materials[node.material.name]}
              geometry={node.geometry}
            />
          ) : null
        )}
      </group>
    </>
  );
};

const LightBulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 5]} />
      <meshPhongMaterial emissive={'white'} transparent opacity={0} />
    </mesh>
  );
};

const SceneContainer = styled.div`
  height: 100vh;
  max-height: 400px;
  min-height: 400px;
  width: 100%;

  .canvas {
    background: var(--dark);
  }
`;

// Inspirations:
// https://dev.to/hnicolus/how-to-use-threejs-in-react-nextjs-4120
// https://oslavdev.medium.com/load-animated-gltf-models-in-next-js-app-with-three-js-8cf0a5d99e10
// https://github.com/pmndrs/react-three-next
const CanvasScene = () => {
  const domRef = useRef<HTMLDivElement | null>(null);

  return (
    <SceneContainer ref={domRef}>
      <Canvas
        mode="concurrent"
        shadows={true}
        className="canvas"
        camera={{
          position: [1, 0.5, 3.5]
        }}
      >
        <ambientLight color={'white'} intensity={0.2} />
        <LightBulb position={[0, 3, 2]} />
        <LightBulb position={[2, 4, -2]} />

        <React.Suspense
          fallback={
            <Html>
              <span>Cargando modelo...</span>
            </Html>
          }
        >
          <Model position={[0, -2.5, 0]} />
        </React.Suspense>
        <OrbitControls
          domElement={domRef.current}
          enableZoom={false}
          enablePan={false}
          autoRotate
        />
      </Canvas>
    </SceneContainer>
  );
};

export default CanvasScene;
