import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Visualizer.scss';
import unatco from './Unatco.mp3';
import { useWindowDimensions } from '../../ThemeManager';
import Icon from '../Icon/Icon';

const Visualizer = () => {
    const dimensions = useWindowDimensions();
    const canvasRef = useRef<any>();
    const canvasRef2 = useRef<any>();
    const audioRef = useRef<any>();
    const [audio] = useState(new Audio(unatco));
    const [audioSource, setAudioSource] = useState<MediaElementAudioSourceNode>();
    const [audioCtx, setAudioCtx] = useState<AudioContext>();
    const [isPaused, setIsPaused] = useState(false);
    function animate(ctx: any, ctx2: any, analyser: any, barHeight: number, barWidth: number, bufferLength: number, dataArray: any) {
        if (canvasRef && canvasRef2 && canvasRef.current && canvasRef2.current && !isPaused) {
            let x = 0;
            
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx2.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            analyser.getByteFrequencyData(dataArray);
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                const red = (i * barHeight) / 10;
                const green = i * 4;
                const blue = barHeight / 4 - 12;
                ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                ctx.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
                ctx2.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                ctx2.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
                x += barWidth;
            }
        }
        requestAnimationFrame(() => animate(ctx, ctx2, analyser, barHeight, barWidth, bufferLength, dataArray));
    }
    const startAnim = useCallback(() => {
        if (canvasRef && audioRef && canvasRef2 && canvasRef.current && audioRef.current && canvasRef2.current) {
            const width = 800;
            const height = 400;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            canvasRef2.current.width = width;
            canvasRef2.current.height = height;
            let audioCtxTemp = audioCtx;
            if (!audioCtxTemp) {
                audioCtxTemp = new (window.AudioContext)();
                setAudioCtx(audioCtxTemp);
            };
            const ctx = canvasRef.current.getContext("2d");
            const ctx2 = canvasRef2.current.getContext("2d");
            let audioSourceTemp = audioSource;
            if (!audioSourceTemp) {
                audioSourceTemp = audioCtxTemp.createMediaElementSource(audio)
                setAudioSource(audioSourceTemp);
            };
            let analyser: any= null;
            audio.play();
            analyser = audioCtxTemp.createAnalyser();
            audioSourceTemp.connect(analyser);
            analyser.connect(audioCtxTemp.destination);

            analyser.fftSize = 128;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            const barWidth = canvasRef.current.width / bufferLength;
            let barHeight = 0;

            animate(ctx, ctx2, analyser, barHeight, barWidth, bufferLength, dataArray);
        }
    }, [canvasRef, audioRef, audioSource, animate]);
    const playPauseButton = useCallback(() => {
        setIsPaused(prev => {
            if (!prev) audio.play();
            else audio.pause();
            return !prev;
        });
    }, [audio]);
    useEffect(() => {
        if (canvasRef && audioRef && canvasRef.current && audioRef.current) {
            startAnim();
        }
        return () => {
            audio.pause();
        }
    }, [canvasRef, audioRef]);
    const sound = useMemo(() => <audio ref={audioRef} id="audio" />, [audioRef, unatco]);
    return (
        <div id="visualizer-container" className={dimensions.isMobile ? 'mobile' : ''} onClick={playPauseButton}>
            <div className="visualizer-play-pause"><Icon icon={isPaused ? 'Pause' : 'Play'} /></div>
            <canvas ref={canvasRef} id="canvas1"></canvas>
            <canvas ref={canvasRef2} id="canvas2"></canvas>
            {sound}
        </div>
    )
}
export default Visualizer;