import { useState } from "react";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
// import './MusicPage.scss';

const pageLayout: iPageLayout = {
    id: 'music-page',
    label: 'Music Page',
    subLabel: 'This page shows off the playlists that I\'ve made!',
    layoutClassName: 'flex-block',
    animationClass: 'Down',
    inputs: [
      {
        id: 'warp-drive-playlist-card',
        type: InputTypes.card,
        label: 'Warp Drive',
        inputs: [
            {
                id: 'warp-drive-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="warp-drive-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/0I6mUCH0sObLjwl5ZlRtxW?utm_source=generator" 
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'anime-summer-playlist-card',
        type: InputTypes.card,
        label: 'Anime Summer',
        inputs: [
            {
                id: 'anime-summer-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="anime-summer-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/7wKWzN98kRLPWEKjIMA8aM?utm_source=generator" 
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'beach-racer-playlist-card',
        type: InputTypes.card,
        label: 'Beach Racer',
        inputs: [
            {
                id: 'beach-racer-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="beach-racer-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/6N5Mzc7TKzyyzADFrQ1BZ9?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'workout-jams-playlist-card',
        type: InputTypes.card,
        label: 'Workout Jams',
        inputs: [
            {
                id: 'workout-jams-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="workout-jams-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/5zyHeELqwJJUjrerdKIgg2?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'hazy-homicide-playlist-card',
        type: InputTypes.card,
        label: 'A Hazy Homicide',
        inputs: [
            {
                id: 'hazy-homicide-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="hazy-homicide-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/30G5HR5dGzZXcLNQMjMb8U?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'arcade-sunrise-playlist-card',
        type: InputTypes.card,
        label: 'Arcade Sunrise',
        inputs: [
            {
                id: 'arcade-sunrise-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="arcade-sunrise-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/3NVLJRsE4QxHPYc4XbMQjx?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'last-street-racer-playlist-card',
        type: InputTypes.card,
        label: 'The Last Street Racer',
        inputs: [
            {
                id: 'last-street-racer-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="last-street-racer-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/6QQSyk1xxUE0QPI6t6uqkl?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                )
            }
        ]
      },
      {
        id: 'the-badlands-playlist-card',
        type: InputTypes.card,
        label: 'The Badlands',
        inputs: [
            {
                id: 'the-badlands-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
                        title="the-badlands-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/5hdkAh4WkJv7gyHt6Adn5U?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
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
    <PageLayout 
      pageLayout={pageLayout}
      formData={formData}
      handleFormData={setFormData}
      disabledFields={disabledFields}
      handleDisabled={setDisabledFields}
      errorFields={errorFields}
      handleError={setErrorFields}
    />
  );
};
export default MusicPage;