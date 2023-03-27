import { useCallback, useState } from 'react';
import { useWindowDimensions } from '../../ThemeManager';
import './YetiPage.scss';
import lodgeView1 from "../../assets/lodge-view-1.jpg";
import lodgeView2 from "../../assets/lodge-view-2.jpg";
import lodgeView3 from "../../assets/lodge-view-3.jpg";
import mountainView1 from "../../assets/mountain-view-1.jpg";
import mountainView2 from "../../assets/mountain-view-2.jpeg";
import mountainView3 from "../../assets/mountain-view-3.jpg";
import hotel1 from "../../assets/hotel_everest.jpg";
import hotel2 from "../../assets/hotel_bellevue.jpg";
import hotel3 from "../../assets/hotel_glacier.jpg";
import event1 from "../../assets/event-snowboarding.jpg";
import event2 from "../../assets/event-skying.jpg";
import event3 from "../../assets/event-tobagan.jpg";
import Headline from '../Text/Headline';
import ColumnLayout from '../Layouts/ColumnLayout';
import Body from '../Text/Body';
import CarouselComponent from '../Carousel/Carousel';
import RowLayout from '../Layouts/RowLayout';
import BlockLayout from '../Layouts/BlockLayout';
import { FakeLoader } from '../Loading/Loading';
import { Button } from '@mui/material';
import Icon from '../Icon/Icon';

const YetiPage = () => {
    const dimensions = useWindowDimensions();
    const [isSnowing, setIsSnowing] = useState(true);
    const handleSnowing = useCallback(() => {
        setIsSnowing(!isSnowing);
    }, [isSnowing]);

    const carouselOne = [
        {
            label: 'Summer in the Alps',
            render: lodgeView1
        },
        {
            label: 'Convention Space',
            render: lodgeView2
        },
        {
            label: 'Deals on Rooms & more',
            render: lodgeView3
        }
    ];
    const carouselTwo = [
        {
            label: 'Alps',
            render: mountainView1
        },
        {
            label: 'Everest',
            render: mountainView2
        },
        {
            label: 'Rockies',
            render: mountainView3
        }
    ];
    const carouselThree = [
        {
            label: 'Snowboarding Championships',
            render: event1
        },
        {
            label: 'Learn to Ski',
            render: event2
        },
        {
            label: 'Slide on Tobagans',
            render: event3
        }
    ];
    const carouselFour = [
        {
            label: 'Hotel Everest',
            render: hotel1
        },
        {
            label: 'Hotel Bellevue',
            render: hotel2
        },
        {
            label: 'Hotel Glacier',
            render: hotel3
        }
    ];

    return (
        <>
            {isSnowing && snowFlakes}
            <div id="yeti-page">
                <RowLayout noWrapping>
                    <TreesSvg isMobile={dimensions.isMobile} />
                    <ColumnLayout style={{ padding: '32px 32px 32px 0' }}>
                        <Headline size={1}>Yeti Walk</Headline>
                        <Headline size={4} secondary>Yeti Walk is an ongoing Global Movement to get explorers connected with the latest and greatest Frozen Travel Destinations</Headline>
                    </ColumnLayout>
                    <Button
                        id="snow-button"
                        onClick={handleSnowing}
                        data-tip={isSnowing ? 'Turn Snow Off' : 'Turn Snow On'}
                    >
                        <Icon icon={isSnowing ? 'Yeti' : 'YetiOff'} />
                    </Button>
                </RowLayout>
                <BlockLayout style={{ padding: 8, paddingBottom: 64 }}>
                    <ColumnLayout 
                        isCard 
                        className="flat background-secondary"
                        id="news"
                        data-walkthrough-step="1"
                        data-walkthrough-label="Resort News"
                        data-walkthrough-description="Get the latest in news and updates here. Read articles and get familiar with the sights you'll be experiencing when you go there!"                        
                    >
                        <Headline size={3} secondary>News</Headline>
                        <Body>Check out the many beautiful Locations that we have to offer</Body>
                        <FakeLoader>
                            <CarouselComponent id="carouselOne" items={carouselOne} />
                        </FakeLoader>
                    </ColumnLayout>
                    <ColumnLayout 
                        isCard 
                        className="flat background-secondary"
                        id="locations"
                        data-walkthrough-step="2"
                        data-walkthrough-label="Know where to go"
                        data-walkthrough-description="View all the breath taking sights and gorgoeous lodging, and then book your stay so you can see it yourself!"     
                    >
                        <Headline size={3} secondary>Locations</Headline>
                        <Body>Catch up on the latest News and industry updates</Body>
                        <FakeLoader>
                            <CarouselComponent id="carouselTwo" items={carouselTwo} />
                        </FakeLoader>
                    </ColumnLayout>
                    <ColumnLayout 
                        isCard 
                        className="flat background-secondary"
                        id="events"
                        data-walkthrough-step="3"
                        data-walkthrough-label="Competitions & Events"
                        data-walkthrough-description="Be on the pulse of all the latest & greatest events the snow has to offer!" 
                    >
                        <Headline size={3} secondary>Events</Headline>
                        <Body>A feed of all our latest Events that will have you enthralled</Body>
                        <FakeLoader>
                            <CarouselComponent id="carouselThree" items={carouselThree} />
                        </FakeLoader>
                    </ColumnLayout>
                    <ColumnLayout 
                        isCard 
                        className="flat background-secondary"
                        id="partners"
                        data-walkthrough-step="4"
                        data-walkthrough-label="Visit our friends!"
                        data-walkthrough-description="A section dedicated to our wonderful partners, as well as friends. We welcome you to enjoy all they have to offer." 
                    >
                        <Headline size={3} secondary>Partners</Headline>
                        <Body>Come join us as we showcase our wonderful Partners</Body>
                        <FakeLoader>
                            <CarouselComponent id="carouselFour" items={carouselFour} />
                        </FakeLoader>
                    </ColumnLayout>
                </BlockLayout>
            </div>
        </>
    )
};
export default YetiPage;

const TreesSvg = ({ isMobile }: { isMobile?: boolean }) => {
    const width = !isMobile ? 235 : 100;
    const height = !isMobile ? 300 : 100;
    return (
        <svg id="yeti-trees" viewBox="25.452 10.873 378.394 480" width={width} height={height}>
            <rect x="66.742" y="367.081" width="29.412" height="134.615" ></rect>
            <rect x="124.434" y="308.258" width="14.706" height="199.661" ></rect>
            <rect x="195.136" y="350.679" width="37.896" height="158.371" ></rect>
            <rect x="274.321" y="324.661" width="27.149" height="184.389" ></rect>
            <rect x="360.294" y="357.466" width="15.271" height="152.715" ></rect>
            <path d="M 128.393 33.497 L 187.217 317.999 L 69.57 317.999 L 128.393 33.497 Z" data-bx-shape="triangle 69.57 33.497 117.647 284.502 0.5 0 1@b726e678" ></path>
            <path d="M 275.17 10.873 L 357.466 341.755 L 192.873 341.755 L 275.17 10.873 Z" data-bx-shape="triangle 192.873 10.873 164.593 330.882 0.5 0 1@19a50b59" ></path>
            <path d="M 369.061 47.072 L 403.846 367.208 L 334.276 367.208 L 369.061 47.072 Z" data-bx-shape="triangle 334.276 47.072 69.57 320.136 0.5 0 1@1d822834" ></path>
            <path d="M 83.427 131.317 L 141.402 379.62 L 25.452 379.62 L 83.427 131.317 Z" data-bx-shape="triangle 25.452 131.317 115.95 248.303 0.5 0 1@9137fea0" ></path>
            <path d="M 217.195 99.109 L 298.077 368.905 L 136.312 368.905 L 217.195 99.109 Z" data-bx-shape="triangle 136.312 99.109 161.765 269.796 0.5 0 1@b737fe91" ></path>
        </svg>
    );
}
const snowFlakes = Array.apply(null, Array(100)).map(item => <div className="snowflake" />);