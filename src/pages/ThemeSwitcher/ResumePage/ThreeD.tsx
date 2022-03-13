import {
  Canvas,
  extend,
  MeshProps,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import {
  BoxGeometry,
  LineSegments,
  Material,
  Plane,
  PlaneGeometry,
  Scene,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  WireframeGeometry,
} from "three";
import zIndex from "@material-ui/core/styles/zIndex";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<
        EffectComposer,
        typeof EffectComposer
      >;
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>;
      unrealBloomPass: ReactThreeFiber.Object3DNode<
        UnrealBloomPass,
        typeof UnrealBloomPass
      >;
      plane: ReactThreeFiber.Object3DNode<Plane, typeof Plane>;
    }
  }
}
interface ThreeDComponentProps {}
const ThreeDComponent = (props: ThreeDComponentProps) => {
  const Bloom = ({ children }: { children: any }) => {
    const { gl, camera, size } = useThree();
    const [scene, setScene] = useState<Scene>();
    const sceneRef = useRef<Scene>();
    const composer = useRef<EffectComposer>();
    useEffect(
      () =>
        void scene &&
        (composer.current as any).setSize(size.width, size.height),
      [size]
    );
    useFrame(() => scene && (composer.current as any).render(), 1);
    return (
      <>
        <scene ref={sceneRef}>{children}</scene>
        <effectComposer ref={composer} args={[gl]}>
          <renderPass
            attachArray="passes"
            scene={sceneRef.current}
            camera={camera}
          />
          <unrealBloomPass
            attachArray="passes"
            args={[new Vector2(0, 0), 1.5, 1, 0]}
          />
        </effectComposer>
      </>
    );
  };
  const Main = ({ children }: { children: any }) => {
    const scene = useRef<Scene>();
    const { gl, camera } = useThree();
    useFrame(() => {
      gl.autoClear = false;
      gl.clearDepth();
      if (scene.current) gl.render(scene.current, camera);
    }, 2);

    return <scene ref={scene}>{children}</scene>;
  };
  const CustomGeometry = ({ geometry, x, y, z, s, color }: any) => {
    return (
      <mesh
        //ref={ref}
        position={[x, y, z]}
        scale={[s, s, s]}
        geometry={geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={color || "#5d1ca9"} roughness={1} />
      </mesh>
    );
  };
  const TorusElement = () => {
    const [geometry1] = useState(() =>
      new TorusGeometry(1, 0.01, 32, 100).rotateX(190)
    );
    const [geometry2] = useState(() =>
      new TorusGeometry(1.2, 0.01, 32, 100).rotateX(190)
    );
    const [geometry3] = useState(() =>
      new TorusGeometry(1.4, 0.01, 32, 100).rotateX(190)
    );
    const [geometry4] = useState(() =>
      new TorusGeometry(1.6, 0.01, 32, 100).rotateX(190)
    );
    const [geometry5] = useState(() =>
      new TorusGeometry(1.8, 0.01, 32, 100).rotateX(190)
    );
    const origin = {
      x: 0,
      y: -13,
      z: 0,
      s: 10,
    };

    return (
      <>
        <CustomGeometry key={1} {...origin} geometry={geometry1} />
        <CustomGeometry key={2} {...origin} geometry={geometry2} />
        <CustomGeometry key={3} {...origin} geometry={geometry3} />
        <CustomGeometry key={4} {...origin} geometry={geometry4} />
        <CustomGeometry key={5} {...origin} geometry={geometry5} />
      </>
    );
  };
  enum CityBlockType {
    Basic,
    Tiered,
    Double,
    Skyscraper,
  }
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const getTieredCoords = (index: number, newOrigin: any) => {
    const coords = { ...newOrigin, x: newOrigin.x + 0.5, z: newOrigin.z + 0.5 };
    switch (index) {
      case 1:
        coords.x += -1;
        break;
      case 2:
        coords.z += -1;
        break;
      case 3:
        coords.x += -1;
        coords.z += -1;
        break;
      case 0:
      default:
        break;
    }
    return coords;
  };
  const CityElement = () => {
    const origin = {
      x: -8,
      y: -10,
      z: -8,
      s: 10,
    };
    let basicCount = 0;
    const [basic] = useState(() => new BoxGeometry(0.2, 0.3, 0.2));
    const [basic2] = useState(() => new BoxGeometry(0.2, 0.45, 0.2));
    const [tiered1] = useState(() => new BoxGeometry(0.1, 0.2, 0.1));
    const [tiered2] = useState(() => new BoxGeometry(0.1, 0.3, 0.1));
    const [tiered3] = useState(() => new BoxGeometry(0.1, 0.4, 0.1));
    const [tiered4] = useState(() => new BoxGeometry(0.1, 0.5, 0.1));
    const [double] = useState(() => new BoxGeometry(0.2, 0.35, 0.2));
    const [doubleTop] = useState(() => new BoxGeometry(0.16, 0.05, 0.16));
    const [skyscraperBottom] = useState(() => new BoxGeometry(0.2, 0.6, 0.2));
    const [skyscraperMiddleBottom] = useState(
      () => new BoxGeometry(0.15, 0.9, 0.15)
    );
    const [skyscraperMiddleTop] = useState(
      () => new BoxGeometry(0.1, 1.2, 0.1)
    );
    const [skyscraperTop] = useState(() => new BoxGeometry(0.05, 1.5, 0.05));
    const BasicCityBlock = ({
      newOrigin,
      basicCount,
    }: {
      newOrigin: any;
      basicCount: number;
    }) => {
      const tempOrigin = { ...newOrigin };
      tempOrigin.y += basicCount % 2 === 0 ? 0 : 0.8;
      return (
        <CustomGeometry
          key={basicCount}
          {...tempOrigin}
          geometry={basicCount % 2 === 0 ? basic : basic2}
        />
      );
    };
    const DoubleCityBlock = ({ newOrigin }: { newOrigin: any }) => {
      const tempOrigin = { ...newOrigin };
      tempOrigin.y += 2.2;
      return (
        <>
          <CustomGeometry
            key={newOrigin.x * 3}
            {...tempOrigin}
            geometry={doubleTop}
          />
          <CustomGeometry
            key={newOrigin.x * 2}
            {...{ ...tempOrigin, y: tempOrigin.y + tempOrigin.y / 4 }}
            geometry={double}
          />
        </>
      );
    };
    const SkyScraperCityBlock = ({ newOrigin }: { newOrigin: any }) => {
      const tempOrigin = { ...newOrigin };
      tempOrigin.y += 4;
      return (
        <>
          <CustomGeometry
            key={newOrigin.x * 2}
            {...{ ...tempOrigin, y: tempOrigin.y + 6 }}
            geometry={skyscraperTop}
          />
          <CustomGeometry
            key={newOrigin.x * 3}
            {...{ ...tempOrigin, y: tempOrigin.y + 4 }}
            geometry={skyscraperMiddleTop}
          />
          <CustomGeometry
            key={newOrigin.x * 4}
            {...{ ...tempOrigin, y: tempOrigin.y + 2 }}
            geometry={skyscraperMiddleBottom}
          />
          <CustomGeometry
            key={newOrigin.x * 5}
            {...tempOrigin}
            geometry={skyscraperBottom}
          />
        </>
      );
    };
    const getRotation = (value: number) => {
      const rotationArray = [0, 90, 180, 270];
      return rotationArray[value];
    };
    function shuffle(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const TieredCityBlock = ({ newOrigin }: { newOrigin: any }) => {
      const sortArray = shuffle([0, 1, 2, 3]);
      const getGeometry = (i: number, origin: any) => {
        switch (i) {
          case 0:
            origin.y += -0.5;
            return <CustomGeometry key={i} {...origin} geometry={tiered1} />;
          case 1:
            return <CustomGeometry key={i} {...origin} geometry={tiered2} />;
          case 2:
            origin.y += 0.5;
            return <CustomGeometry key={i} {...origin} geometry={tiered3} />;
          case 3:
            origin.y += 1;
            return <CustomGeometry key={i} {...origin} geometry={tiered4} />;
        }
      };
      return (
        <>
          {sortArray.map((item, i) => {
            const origin = getTieredCoords(i, newOrigin);
            return getGeometry(item, origin);
          })}
        </>
      );
    };

    const getCityBlockType = (
      value: CityBlockType,
      newOrigin: any,
      skyscraperOverride?: boolean
    ) => {
      if (!!skyscraperOverride)
        return <SkyScraperCityBlock newOrigin={newOrigin} />;
      switch (value) {
        case CityBlockType.Tiered:
          return <TieredCityBlock newOrigin={newOrigin} />;
        case CityBlockType.Double:
          return <DoubleCityBlock newOrigin={newOrigin} />;
        case CityBlockType.Basic:
        default:
          basicCount++;
          return (
            <BasicCityBlock newOrigin={newOrigin} basicCount={basicCount} />
          );
      }
    };
    const matrix: JSX.Element[][] = [];
    for (let i = 0; i < 5; i++) {
      let newRow: JSX.Element[] = [];
      for (let q = 0; q < 5; q++) {
        const newOrigin = {
          x: origin.x + i * 4,
          y: origin.y,
          z: origin.z + q * 4,
          s: origin.s,
        };
        if (i === 2 && q === 2)
          newRow.push(
            getCityBlockType(CityBlockType.Skyscraper, newOrigin, true)
          );
        newRow.push(getCityBlockType(getRandomInt(0, 2), newOrigin));
      }
      matrix.push(newRow);
    }
    return (
      <>
        {matrix.map((row) => {
          return row.map((element) => {
            return element;
          });
        })}
      </>
    );
  };
  const Spinner = (props: any) => {
    const spinRef = useRef<MeshProps>();
    useFrame((state, delta) => {
      if (spinRef.current) {
        if (spinRef.current.rotation)
          (spinRef.current.rotation as any).y += 0.01;
      }
    });
    return <mesh ref={spinRef}>{props.children}</mesh>;
  };
  return (
    <Canvas
      linear
      camera={{ position: [0, 0, 40], castShadow: true }}
      shadows={true}
      style={{ minHeight: 400 }}
    >
      <Bloom>
        <ambientLight />
        <pointLight
          position={[0, 0, 20]}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          color={"#fff8a6"}
          intensity={2}
        />
        <Spinner>
          <TorusElement />
          <CityElement />
        </Spinner>
      </Bloom>
      <Main>
        <ambientLight />
        <pointLight
          position={[10, 0, 10]}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          color={"#fff8a6"}
          intensity={2}
        />
        <Spinner>
          <TorusElement />
          <CityElement />
        </Spinner>
      </Main>
    </Canvas>
  );
};
export default ThreeDComponent;
