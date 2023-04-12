import { useState } from "react";
import { FakeLoader } from "../../../components/Loading/Loading";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import Body from "../../../components/Text/Body";
import Headline from "../../../components/Text/Headline";
import './MusicPage.scss';
import BlockLayout from "../../../components/Layouts/BlockLayout";
import ColumnLayout from "../../../components/Layouts/ColumnLayout";

const MusicPage = () => {
  return (
    <ColumnLayout gap={16} style={{ paddingBottom: '60px' }}>
        <Headline size={2}>Music Page</Headline>
        <Body>This page shows off the playlists that I've made!</Body>
        <BlockLayout>
            <ColumnLayout 
                isCard
                id="Warp"
                data-walkthrough-step="1"
                data-walkthrough-label="Always Flowing"
                data-walkthrough-description="These tracks are always on the move, keeping your mind flowing through the cosmos."
            >
                <Headline size={3}>Warp Drive</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Anime"
                data-walkthrough-step={"2"}
                data-walkthrough-label={"Summer in Japan"}
                data-walkthrough-description={"This playlist is trying to capture the fun, sun & amazing sites of japan in the summer."}
            >
                <Headline size={3}>Anime Summer</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Beach"
                data-walkthrough-step={"3"}
                data-walkthrough-label={"Beachside racing fun!"}
                data-walkthrough-description={"CTR, Outrun, Mario-Kart, Jet-Set Radio. If these names mean anything to you, then you will get the genre of this playlist."}
            >
                <Headline size={3}>Beach Racer</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Jam"
                data-walkthrough-step={"4"}
                data-walkthrough-label={"Pump up the Jam"}
                data-walkthrough-description={"Steady, bumping tracks to keep yourself moving to."}
            >
                <Headline size={3}>Workout Jams</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Fantasy"
                data-walkthrough-step={"5"}
                data-walkthrough-label={"A seaside cafe"}
                data-walkthrough-description={"Going somewhere new, traveling to an ocean view, we lonely few."}
            >
                <Headline size={3}>Unplugged Fantasy</Headline>
                <FakeLoader style={{ height: 380 }}>
                    <iframe 
                        title="unplugged-fantasy-playlist"
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/3A6jNln0UuU9nOriQC6WpM?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                </FakeLoader>  
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Sunrise"
                data-walkthrough-step={"6"}
                data-walkthrough-label={"Pixel rays shine"}
                data-walkthrough-description={"Capturing the peace and tranquility found in the forest and taverns of RPGs."}
            >
                <Headline size={3}>Arcade Sunrise</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Street"
                data-walkthrough-step={"7"}
                data-walkthrough-label={"Pedal to the Metal"}
                data-walkthrough-description={"This one is my fast pace metal style playlist for driving fast"}
            >
                <Headline size={3}>The Last Street Racer</Headline>
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
            </ColumnLayout>
            <ColumnLayout 
                isCard
                id="Bard"
                data-walkthrough-step={"8"}
                data-walkthrough-label={"A local's tale"}
                data-walkthrough-description={"The songs to weave stories, dreams and terrifying things to."}
            >
                <Headline size={3}>The Badlands</Headline>
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
            </ColumnLayout>
        </BlockLayout>
    </ColumnLayout>
  );
};
export default MusicPage;