import ImageComponent from "./ImageComponent";
import "./HeroCard.scss";
import Icon from "../Icon/Icon";
import Headline from "../Text/Headline";
import BlockLayout from "../Layouts/BlockLayout";
import SubHeadline from "../Text/SubHeadline";
import Body from "../Text/Body";
import ColumnLayout from "../Layouts/ColumnLayout";
import RowLayout from "../Layouts/RowLayout";
export interface iHero {
  id: string;
  name: string;
  appearance: {
    ["eye-color"]: string;
    gender: string;
    ["hair-color"]: string;
    height: string[];
    race: string;
    weight: string[];
  };
  biography: {
    aliases: string[];
    alignment: string;
    ["alter-egos"]: string;
    ["first-appearance"]: string;
    ["full-name"]: string;
    ["place-of-birth"]: string;
    publisher: string;
  };
  connections: {
    ["group-affiliation"]: string[];
    relatives: string;
  };
  image: {
    url: string;
  };
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  work: {
    base: string;
    occupation: string;
  };
}
interface HeroCardProps {
  hero: iHero;
  closeFunction: () => void;
}
const HeroCard = (props: HeroCardProps) => {
  const getColors = (value: any) => {
    if (value === "null") return " red";
    const number = parseInt(value);
    if (!isNaN(number)) {
      if (value > 70) {
        return " green";
      } else if (value > 40) {
        return " orange";
      }
      return " red";
    }
    return "";
  };
  const EntryElement = ({
    label,
    bodyText,
    isTopSection
  }: {
    label: string;
    bodyText: any;
    isTopSection?: boolean;
  }) => {
    if (isTopSection) {
      return (
        <RowLayout className={getColors(bodyText)}>
          <Headline size={5} secondary={true}>{label}</Headline>
          <Body>{!bodyText || bodyText === '' ? 'N/A' : bodyText}</Body>
        </RowLayout>
      );
    }
    return (
      <ColumnLayout gap={0}>
          <SubHeadline>{label}</SubHeadline>
          <Body>{!bodyText || bodyText === '' ? 'N/A' : bodyText}</Body>
      </ColumnLayout>
    );
  };
  const powerstats = Object.entries(props.hero.powerstats).map((key, value) => {
    return (
      <EntryElement
        key={value + key[0]}
        label={key[0]}
        bodyText={key[1]}
        isTopSection={true}
      />
    );
  });
  const appearances = Object.entries(props.hero.appearance).map(
    (key, value) => {
      return (
        <EntryElement key={value + key[0]} label={key[0]} bodyText={key[1]} />
      );
    }
  );
  const biography = Object.entries(props.hero.biography).map((key, value) => {
    return (
      <EntryElement key={value + key[0]} label={key[0]} bodyText={key[1]} />
    );
  });
  const connections = Object.entries(props.hero.connections).map(
    (key, value) => {
      return (
        <EntryElement key={value + key[0]} label={key[0]} bodyText={key[1]} />
      );
    }
  );
  const work = Object.entries(props.hero.work).map((key, value) => {
    return (
      <EntryElement key={value + key[0]} label={key[0]} bodyText={key[1]} />
    );
  });
  return (
    <ColumnLayout className="heroCard">
      <CloseComponent closeFunction={props.closeFunction} />
      <Headline size={1}>{props.hero.name}</Headline>
      <div className="top">
        <div className="heroCardImage">
          {<ImageComponent hero={props.hero} />}
        </div>
        <ColumnLayout className="heroCardItem powers">
          <Headline size={1}>Power Stats</Headline>
          {powerstats}
        </ColumnLayout>
      </div>

      <BlockLayout className="heroCardContent">
        <ColumnLayout className="heroCardItem">
          <Headline size={4}>Appearance</Headline>
          {appearances}
        </ColumnLayout>
        <ColumnLayout className="heroCardItem">
          <Headline size={4}>Biography</Headline>
          {biography}
        </ColumnLayout>
        <ColumnLayout className="heroCardItem">
          <Headline size={4}>Connections</Headline>
          {connections}
        </ColumnLayout>
        <ColumnLayout className="heroCardItem">
          <Headline size={4}>Work</Headline>
          {work}
        </ColumnLayout>
      </BlockLayout>
    </ColumnLayout>
  );
};
export default HeroCard;
const CloseComponent = ({ closeFunction }: { closeFunction: () => void }) => {
  return (
    <div className="closePositioner" onClick={closeFunction}>
      <div className="close">
        <Icon icon="Close" />
      </div>
    </div>
  );
};
