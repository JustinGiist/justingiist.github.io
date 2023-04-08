import React, { CSSProperties } from 'react';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  video?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  loading?: 'lazy' | 'eager';
  poster?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageVideo: React.FC<Props> = ({
  src,
  alt = '',
  className = '',
  style = {},
  video = false,
  width,
  height,
  maxWidth,
  maxHeight,
  loading,
  poster,
  autoplay,
  controls,
  loop,
  muted,
  playsInline,
  onClick,
  onLoad,
  onError,
}) => {
  const dimensionsStyle: CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    maxWidth: maxWidth || 'none',
    maxHeight: maxHeight || 'none',
  };

  const commonProps: any = {
    alt,
    style: { objectFit: 'cover', width: '100%', height: '100%' },
    loading,
    onLoad,
    onError,
  };

  if (video) {
    return (
      <div className={className} style={{ ...style, ...dimensionsStyle }} role="img" aria-label={alt}>
        <video
          {...commonProps}
          src={src}
          poster={poster}
          autoPlay={autoplay}
          controls={controls}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
        >
          <track kind="description" label="Video Description" srcLang="en" src={`${src}.vtt`} />
        </video>
      </div>
    );
  }

  return (
    <div onClick={onClick} className={className} style={{ ...style, ...dimensionsStyle }} role="img" aria-label={alt}>
      <img {...commonProps} src={src} />
    </div>
  );
};

export default ImageVideo;
