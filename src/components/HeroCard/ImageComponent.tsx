import { useMemo, useState } from "react";
import Icon from "../Icon/Icon";
import { iHero } from "./HeroCard";
import ImageVideo from "../ImageVideo";
interface ImageComponentProps {
  hero: iHero;
  onClick?: () => void;
}
const ImageComponent = (props: ImageComponentProps) => {
  const [error, setError] = useState<boolean>(false);
  const className = `image ${props?.onClick ? 'clickable' : ''}`;
  const imageElement = useMemo(() => {
    return !error ? (
      <ImageVideo alt={props.hero.name} onClick={props.onClick} className={className} src={props.hero.image.url} onError={() => setError(true)} />
    ) : (
      <div className="noImageWrapper">
        <Icon icon="NoImage" />
        <div className="subtext">No Image Found</div>
      </div>
    );
  }, [error, props.hero, props.onClick, className]);
  return imageElement;
};
export default ImageComponent;
