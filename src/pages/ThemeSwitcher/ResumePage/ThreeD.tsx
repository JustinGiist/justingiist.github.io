import {
  Canvas,
  extend,
  MeshProps,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import THREE, {
  BoxGeometry,
  BufferGeometry,
  Euler,
  ExtrudeBufferGeometry,
  Plane,
  Scene,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
} from "three";
import { Loading } from "mdi-material-ui";
import { CircularProgress } from "@material-ui/core";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

interface ThreeDComponentProps {}
const smoothness = 2;
const radius0 = 0.02;
const torusTublarSegments = 75;
const torusRadialSegments = 64;
const ThreeDComponent = (props: ThreeDComponentProps) => {
  const origin = {
    x: -8,
    y: 0,
    z: -8,
    s: 10,
  };
  let basicCount = 0;
  //Tiered buildings
  const [tiered1] = useState(() =>
    createBoxWithRoundedEdges(0.1, 0.2, 0.1, radius0, smoothness)
  );
  const [tiered2] = useState(() =>
    createBoxWithRoundedEdges(0.1, 0.3, 0.1, radius0, smoothness)
  );
  const [tiered3] = useState(() =>
    createBoxWithRoundedEdges(0.1, 0.4, 0.1, radius0, smoothness)
  );
  const [tiered4] = useState(() =>
    createBoxWithRoundedEdges(0.1, 0.5, 0.1, radius0, smoothness)
  );
  //Basic buildings
  const [basicBottomRounded] = useState(() =>
    createBoxWithRoundedEdges(0.2, 0.35, 0.2, radius0, smoothness)
  );
  const [basicTopRounded] = useState(() =>
    createBoxWithRoundedEdges(0.16, 0.05, 0.16, radius0, smoothness)
  );
  const [basic2BottomRounded] = useState(() =>
    createBoxWithRoundedEdges(0.2, 0.25, 0.2, radius0, smoothness)
  );
  const [basic2TopRounded] = useState(() =>
    createBoxWithRoundedEdges(0.16, 0.05, 0.16, radius0, smoothness)
  );
  //Skyscraper
  const [skyscraperBottom] = useState(() =>
    createBoxWithRoundedEdges(0.2, 0.6, 0.2, radius0, smoothness)
  );
  const [skyscraperMiddleBottom] = useState(() =>
    createBoxWithRoundedEdges(0.15, 0.4, 0.1, radius0, smoothness)
  );
  const [skyscraperMiddleTop] = useState(() =>
    createBoxWithRoundedEdges(0.1, 0.6, 0.1, radius0, smoothness)
  );
  const [skyscraperTop] = useState(() => new BoxGeometry(0.02, 0.8, 0.02));
  const [skyscraperSphere] = useState(
    () => new SphereGeometry(0.05, 30, 60, 60)
  );
  //Antenna
  const [antennaBottom] = useState(() =>
    createBoxWithRoundedEdges(0.2, 0.15, 0.2, radius0, smoothness)
  );
  const [antennaMiddleBottomSphere] = useState(
    () => new SphereGeometry(0.09, 30, 60, 60)
  );
  const [antennaTop] = useState(() => new BoxGeometry(0.02, 0.4, 0.02));
  const ringGeometries = [
    new TorusGeometry(0.05, 0.01, torusRadialSegments, 100).rotateX(190),
    new TorusGeometry(0.04, 0.01, torusRadialSegments, 100).rotateX(190),
    new SphereGeometry(0.05, 30, 60, 60),
  ];
  const CityElement = () => {
    const BasicCityBlock = ({
      newOrigin,
      basicCount,
    }: {
      newOrigin: any;
      basicCount: number;
    }) => {
      const originKey = `origin-${newOrigin.x}-${newOrigin.y}-${newOrigin.z}`;
      const tempOrigin = { ...newOrigin };
      const key = `basic-block-${originKey}`;
      if (basicCount % 2 === 0) {
        tempOrigin.y += 0.2;
        return (
          <>
            <CustomGeometry
              key={`${key}-top`}
              {...{ ...tempOrigin, y: tempOrigin.y + 2 }}
              geometry={basicTopRounded}
            />
            <CustomGeometry
              key={`${key}-bottom`}
              {...tempOrigin}
              geometry={basicBottomRounded}
            />
          </>
        );
      } else {
        tempOrigin.y += -0.3;
        return (
          <>
            <CustomGeometry
              key={`${key}-top`}
              {...{ ...tempOrigin, y: tempOrigin.y + 1.5 }}
              geometry={basic2TopRounded}
            />
            <CustomGeometry
              key={`${key}-bottom`}
              {...tempOrigin}
              geometry={basic2BottomRounded}
            />
          </>
        );
      }
    };
    const AntennaCityBlock = ({ newOrigin }: { newOrigin: any }) => {
      const originKey = `origin-${newOrigin.x}-${newOrigin.y}-${newOrigin.z}`;
      const tempOrigin = { ...newOrigin };
      tempOrigin.y += -0.75;
      return (
        <>
          {ringGeometries.map((geometry, i) => {
            const innerOriginKey = `origin-${geometry.uuid}`;
            return (
              <CustomGeometry
                key={`ring-geo-${innerOriginKey}`}
                {...{ ...tempOrigin, y: tempOrigin.y + (i / 4 + 2.5) }}
                geometry={geometry}
              />
            );
          })}
          <CustomGeometry
            key={`city-block-antennaTop-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 1.5 }}
            geometry={antennaTop}
          />
          <CustomGeometry
            key={`city-block-antennaMiddleBottomSphere-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 0.5 }}
            geometry={antennaMiddleBottomSphere}
          />
          <CustomGeometry
            key={`city-block-antennaBottom-${originKey}`}
            {...tempOrigin}
            geometry={antennaBottom}
          />
        </>
      );
    };
    const SkyScraperCityBlock = ({ newOrigin }: { newOrigin: any }) => {
      const originKey = `origin-${newOrigin.x}-${newOrigin.y}-${newOrigin.z}`;
      const tempOrigin = { ...newOrigin };
      tempOrigin.y += 1.5;
      return (
        <>
          <CustomGeometry
            key={`sky-scraper-sphere-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 6 + 3.5 }}
            geometry={skyscraperSphere}
          />
          <CustomGeometry
            key={`sky-scraper-skyscraperTop-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 6 }}
            geometry={skyscraperTop}
          />
          <CustomGeometry
            key={`sky-scraper-skyscraperMiddleTop-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 3 }}
            geometry={skyscraperMiddleTop}
          />
          <CustomGeometry
            key={`sky-scraper-skyscraperMiddleBottom-${originKey}`}
            {...{ ...tempOrigin, y: tempOrigin.y + 2 }}
            geometry={skyscraperMiddleBottom}
          />
          <CustomGeometry
            key={`sky-scraper-skyscraperBottom-${originKey}`}
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
        const originKey = `origin-${origin.x}-${origin.y}-${origin.z}`;
        const key = `tiered-city-block-${originKey}`;
        switch (i) {
          case 0:
            origin.y += -0.5;
            return <CustomGeometry key={key} {...origin} geometry={tiered1} />;
          case 1:
            return <CustomGeometry key={key} {...origin} geometry={tiered2} />;
          case 2:
            origin.y += 0.5;
            return <CustomGeometry key={key} {...origin} geometry={tiered3} />;
          case 3:
            origin.y += 1;
            return <CustomGeometry key={key} {...origin} geometry={tiered4} />;
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
      const originKey = `origin-${newOrigin.x}-${newOrigin.y}-${newOrigin.z}`;
      if (!!skyscraperOverride)
        return <SkyScraperCityBlock key={`sky-scraper-city-block-${originKey}`} newOrigin={newOrigin} />;
      switch (value) {
        case CityBlockType.Tiered:
          return <TieredCityBlock key={`tiered-city-block-${originKey}`} newOrigin={newOrigin} />;
        case CityBlockType.Antenna:
          return <AntennaCityBlock key={`antenna-city-block-${originKey}`} newOrigin={newOrigin} />;
        case CityBlockType.Basic:
        default:
          basicCount++;
          return (
            <BasicCityBlock key={`basic-city-block-${originKey}`} newOrigin={newOrigin} basicCount={basicCount} />
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
        if (i === 2 && q === 2) {
          newRow.push(
            getCityBlockType(CityBlockType.Skyscraper, newOrigin, true)
          );
        } else {
          newRow.push(getCityBlockType(getRandomInt(0, 3), newOrigin));
        }
      }
      matrix.push(newRow);
    }
    const mapElement = useMemo(() => {
      return matrix.map((row) => {
        return row.map((element) => {
          return element;
        });
      });
    }, [matrix]);
    return <>{mapElement}</>;
  };

  return (
    <Canvas
      id="threeD"
      linear
      camera={{
        rotation: new Euler(0, 0, 0),
        position: [0, 10, 37],
        castShadow: true,
      }}
      shadows={true}
      style={{ minHeight: 400, background: "#000000" }}
    >
      <Main>
        <directionalLight
          position={[40, 10, 20]}
          castShadow={true}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          color={"#000ce8"}
          intensity={0.8}
        />
        <directionalLight
          position={[-40, 10, 20]}
          castShadow={true}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          color={"#9c008c"}
          intensity={1}
        />
        <directionalLight
          position={[0, 10, -40]}
          castShadow={false}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          color={"#173dfc"}
          intensity={0.5}
        />
        {/*
      
        */}

        <Spinner>
          <TorusElement />
          <CityElement />
        </Spinner>
      </Main>
    </Canvas>
  );
};
export default ThreeDComponent;
const Spinner = (props: any) => {
  const spinRef = useRef<MeshProps>();
  useFrame((state, delta) => {
    if (spinRef.current) {
      if (spinRef.current.rotation)
        (spinRef.current.rotation as any).y += 0.004;
    }
  });
  return <mesh ref={spinRef}>{props.children}</mesh>;
};
const particleSystem = () => {
  const particleGeometry = new BufferGeometry();
  const particleCount = 5000;
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
      {/*<meshPhongMaterial
        color={color || "#c7e6ff"}
        shininess={100}
        specular={"#a38aff"}
      envMap={Reflection()}
      />*/}
      <meshStandardMaterial
        color={color || "#c7e6ff"}
        roughness={0.5}
        metalness={1}
      />
    </mesh>
  );
};
const TorusElement = () => {
  const [geometries] = useState([
    new TorusGeometry(
      0.6,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      0.7,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      0.8,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      0.9,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      1,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      1.1,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      1.2,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      1.3,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
    new TorusGeometry(
      1.4,
      0.01,
      torusRadialSegments,
      torusTublarSegments
    ).rotateX(190),
  ]);
  const origin = {
    x: 0,
    y: -3,
    z: 0,
    s: 10,
  };
  const ringColor = "#8ccbff";
  const mapElement = useMemo(() => {
    return geometries.map((geometry) => {
      const originKey = `origin-${geometry.uuid}`;
      return (
        <CustomGeometry
          key={originKey}
          {...origin}
          geometry={geometry}
          color={ringColor}
        />
      );
    });
  }, [geometries]);
  return <>{mapElement}</>;
};
enum CityBlockType {
  Basic,
  Tiered,
  Antenna,
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
function createBoxWithRoundedEdges(
  width: number,
  height: number,
  depth: number,
  radius0: number,
  smoothness: number
) {
  let shape = new Shape();
  let eps = 0.00001;
  let radius = radius0 - eps;
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(
    width - radius * 2,
    height - radius * 2,
    eps,
    Math.PI / 2,
    0,
    true
  );
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
  let geometry = new ExtrudeBufferGeometry(shape, {
    depth: depth - radius0 * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    steps: 1,
    bevelSize: radius,
    bevelThickness: radius0,
    curveSegments: smoothness,
  });

  geometry.center();

  return geometry;
}
