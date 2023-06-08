import Globe from 'react-globe.gl';
import { useWindowDimensions } from '../../../ThemeManager';

const GlobeElement = () => {
  const { isMobile } = useWindowDimensions();
    
  // Gen random data
  const N = 20;
  const arcsData = [...Array(N)].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          arcsData={arcsData}
          arcColor={'color'}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 4000 + 500}
          backgroundColor='#00000011'
          height={isMobile ? 320 : 600}
      />
    </div>
  );
};
export default GlobeElement;