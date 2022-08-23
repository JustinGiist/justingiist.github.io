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
        id: 'workout-jams-playlist-card',
        type: InputTypes.card,
        label: 'Workout Jams',
        inputs: [
            {
                id: 'workout-jams-playlist',
                type: InputTypes.element,
                element: (
                    <iframe 
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
      }
    ]
};

const MusicPage = () => {
  const [pageData, setPageData] = useState<any>({});
  const [disabledFields, setDisabledFields] = useState<any>({});
  const [errorFields, setErrorFields] = useState<any>({});

  return (
    <PageLayout 
      pageLayout={pageLayout}
      pageData={pageData}
      handlePageData={setPageData}
      disabledFields={disabledFields}
      handleDisabledFields={setDisabledFields}
      errorFields={errorFields}
      handleErrorFields={setErrorFields}
    />
  );
};
export default MusicPage;