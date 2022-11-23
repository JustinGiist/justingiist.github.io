import rd3 from 'react-d3-library';
import layout from './LayoutTest';
const RD3Component = rd3.Component;

const CurveLayout = () => {
    return <RD3Component data={layout} />;
}
export default CurveLayout;