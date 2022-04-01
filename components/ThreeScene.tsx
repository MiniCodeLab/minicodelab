import styled from '@emotion/styled';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { BoxGeometryProps, Canvas, MaterialProps } from '@react-three/fiber';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from 'styles/ui/Button';
import { showInfoToast } from 'utils/common';

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

const SceneManager = styled.div<{ interactive: boolean }>`
  height: 100vh;
  max-height: 400px;
  min-height: 400px;
  width: 100%;
  position: relative;

  > button {
    font-size: 1rem;
    opacity: ${({ interactive }) => (interactive ? 1 : 0.75)};
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
`;

const AbsoluteDiv = styled.div<{ interactive: boolean }>`
  position: absolute;
  width: 100%;
  height: ${({ interactive }) => (interactive ? '0' : '100%')};
  inset: 0;
  z-index: 1;
`;

const SceneContainer = styled.div`
  height: 100%;
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
  const [canInteract, setCanInteract] = useState(false);

  const interact = useCallback(() => {
    setCanInteract((prevVal) => !prevVal);
  }, []);

  useEffect(() => {
    if (canInteract) {
      showInfoToast('Prueba y mueve a MiniCody');
    }
  }, [canInteract]);

  return (
    <SceneManager interactive={canInteract}>
      <SceneContainer ref={domRef}>
        <Canvas
          mode="concurrent"
          shadows={true}
          className="canvas"
          camera={{
            position: [0, 0.5, 3.5]
          }}
        >
          <ambientLight color="white" intensity={0.3} />
          <directionalLight color="white" intensity={2} />
          {/* <directionalLight color="white" intensity={1} /> */}

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
            autoRotate
            domElement={domRef.current}
            enablePan={canInteract}
            enableRotate={canInteract}
            enableZoom={canInteract}
          />
        </Canvas>
      </SceneContainer>

      <AbsoluteDiv interactive={canInteract} />
      <Button onClick={interact} variant={canInteract ? 'green' : 'purple'}>
        {canInteract ? 'Bloquear 🔒' : 'Interactuar 🔛'}
      </Button>
    </SceneManager>
  );
};

export default CanvasScene;
