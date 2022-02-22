import Icon from "../../components/Icon/Icon";
import { GlobalThemes } from "../../ThemeManager";
import "./EightiesTheme.scss";
const EightiesTheme = ({}: {}) => {
  return (
    <div className={"arcadeContainer " + GlobalThemes.Arcade}>
      <div className="backgroundPositioner">
        <div className="background"></div>
      </div>
      <div className={"arcadeTopContainer "}>
        <div className="left">
          <Icon icon="Coin" fontSize={60} />
        </div>
        <div className="middle">
          <div className="arcadeTitleContainer noiseWrapper">
            <div className="headline two textPrimary">Welcome to</div>
            <div className="headline one textTitle">Vincent's</div>
            <div className="headline one textTitle">Arcade</div>
            <div className="noise"></div>
          </div>
        </div>
        <div className="right">
          <div className="tab">Location</div>
          <div className="tab">Events</div>
          <div className="tab">Games</div>
        </div>
      </div>
      <div className="arcadeContentContainer">
        <div className="left">
          <div style={{ display: "flex", alignSelf: "center" }}>
            <div style={{ margin: "auto 0" }}>
              <Icon icon="ArcadeButton" fontSize={40} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Icon icon="ArcadeButton" fontSize={40} />
              <Icon icon="ArcadeButton" fontSize={40} />
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="headline two textTitle">Upcoming Events:</div>
          <EventElement title={"Event 1"} />
          <EventElement title={"Event 2"} />
          <EventElement title={"Event 3"} />
        </div>
        <div className="right">
          <div className="iconContainer">
            <Icon icon="Pacman" fontSize={32} viewBox="0 0 32 32" />
            <Icon icon="PacmanCircle" fontSize={8} />
            <Icon icon="PacmanCircle" fontSize={8} />
            <Icon icon="PacmanCircle" fontSize={8} />
          </div>
          <div style={{ alignSelf: "center" }}>
            <Icon
              icon="JoyStick"
              viewBox="30.21 3.45 139.95 294.327"
              fontSize={120}
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Icon icon="Invader" />
          <div className="headline three textPrimary">Title</div>
          <div className="headline five textSecondary">
            Lorem ipsum blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah
          </div>
        </div>
        <div className="right">
          <div className="flex">
            <Icon icon="Invader" />
            <div className="headline three textPrimary">Blog 1</div>
          </div>
          <div className="flex">
            <Icon icon="Pacman" viewBox="0 0 32 32" />
            <div className="headline three textPrimary">Blog 2</div>
          </div>
          <div className="flex">
            <Icon icon="Atari" />
            <div className="headline three textPrimary">Blog 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EightiesTheme;
const EventElement = ({ title }: { title: string }) => (
  <>
    <div className="eventElement">
      <Icon icon="Textbox" fontSize={60} viewBox="0 0 265 40" />
      <div className="headline three textPrimary">{title}</div>
    </div>
  </>
);
