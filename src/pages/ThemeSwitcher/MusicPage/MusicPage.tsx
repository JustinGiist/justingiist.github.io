import { useState } from "react";
import { FakeLoader } from "../../../components/Loading/Loading";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import Body from "../../../components/Text/Body";
import Headline from "../../../components/Text/Headline";
import './MusicPage.scss';

const pageLayout: iPageLayout = {
    id: 'music-page',
    contentProps: {
        layoutClassName: 'flex-block',
    },
    animationClass: 'Down',
    inputs: [
      {
        id: 'warp-drive-playlist-card',
        "data-walkthrough-step": "1",
        "data-walkthrough-label": "Always Flowing",
        "data-walkthrough-description": "These tracks are always on the move, keeping your mind flowing through the cosmos.",
        type: InputTypes.view,
        label: 'Warp Drive',
        inputs: [
            {
                id: 'warp-drive-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="warp-drive-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/0I6mUCH0sObLjwl5ZlRtxW?utm_source=generator" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'anime-summer-playlist-card',
        "data-walkthrough-step": "2",
        "data-walkthrough-label": "Summer in Japan",
        "data-walkthrough-description": "This playlist is trying to capture the fun, sun & amazing sites of japan in the summer.",
        type: InputTypes.view,
        label: 'Anime Summer',
        inputs: [
            {
                id: 'anime-summer-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="anime-summer-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/7wKWzN98kRLPWEKjIMA8aM?utm_source=generator" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'beach-racer-playlist-card',
        "data-walkthrough-step": "3",
        "data-walkthrough-label": "CTR, Outrun, Mario-Kart, Jet-Set Radio",
        "data-walkthrough-description": "If these names mean anything to you, then you will get the genre of this playlist.",
        type: InputTypes.view,
        label: 'Beach Racer',
        inputs: [
            {
                id: 'beach-racer-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="beach-racer-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/6N5Mzc7TKzyyzADFrQ1BZ9?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'workout-jams-playlist-card',
        "data-walkthrough-step": "4",
        "data-walkthrough-label": "Pump up the Jam",
        "data-walkthrough-description": "Steady, bumping tracks to keep yourself moving to.",
        type: InputTypes.view,
        label: 'Workout Jams',
        inputs: [
            {
                id: 'workout-jams-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="workout-jams-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/5zyHeELqwJJUjrerdKIgg2?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'hazy-homicide-playlist-card',
        "data-walkthrough-step": "5",
        "data-walkthrough-label": "Sitting in a Hazy Fog",
        "data-walkthrough-description": "Something to just chill in the background, sittin in a room.",
        type: InputTypes.view,
        label: 'A Hazy Homicide',
        inputs: [
            {
                id: 'hazy-homicide-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="hazy-homicide-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/30G5HR5dGzZXcLNQMjMb8U?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'arcade-sunrise-playlist-card',
        "data-walkthrough-step": "6",
        "data-walkthrough-label": "Pixel rays shine",
        "data-walkthrough-description": "Capturing the peace and tranquility found in the forest and taverns of RPGs.",
        type: InputTypes.view,
        label: 'Arcade Sunrise',
        inputs: [
            {
                id: 'arcade-sunrise-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="arcade-sunrise-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/3NVLJRsE4QxHPYc4XbMQjx?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'last-street-racer-playlist-card',
        "data-walkthrough-step": "7",
        "data-walkthrough-label": "Petal to the Metal",
        "data-walkthrough-description": "This one is my fast pace metal style playlist for driving fast",
        type: InputTypes.view,
        label: 'The Last Street Racer',
        inputs: [
            {
                id: 'last-street-racer-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="last-street-racer-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/6QQSyk1xxUE0QPI6t6uqkl?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      },
      {
        id: 'the-badlands-playlist-card',
        "data-walkthrough-step": "8",
        "data-walkthrough-label": "A local's tale",
        "data-walkthrough-description": "The songs to weave stories, dreams and terrifying things to.",
        type: InputTypes.view,
        label: 'The Badlands',
        inputs: [
            {
                id: 'the-badlands-playlist',
                type: InputTypes.element,
                element: (
                    <FakeLoader style={{ height: 380 }}>
                        <iframe 
                            title="the-badlands-playlist"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/5hdkAh4WkJv7gyHt6Adn5U?utm_source=generator"
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    </FakeLoader>
                )
            }
        ]
      }
    ]
};

const MusicPage = () => {
  const [formData, setFormData] = useState<any>({});
  const [disabledFields, setDisabledFields] = useState<any>({});
  const [errorFields, setErrorFields] = useState<any>({});

  return (
    <>
        <Headline size={2}>Music Page</Headline>
        <Body>This page shows off the playlists that I've made!</Body>
        <PageLayout 
            pageLayout={pageLayout}
            formData={formData}
            handleFormData={setFormData}
            disabledFields={disabledFields}
            handleDisabled={setDisabledFields}
            errorFields={errorFields}
            handleError={setErrorFields}
        />
    </>
    
  );
};
export default MusicPage;