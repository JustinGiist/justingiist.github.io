import { useCallback, useEffect, useRef } from "react";
import {
  ParallaxBackgroundCircle,
  ParallaxBackgroundTriangles,
} from "../../../components/BezierBackground/ParallaxBackground";
import Icon from "../../../components/Icon/Icon";
import ColumnLayout from "../../../components/Layouts/ColumnLayout";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import Body from "../../../components/Text/Body";
import Headline from "../../../components/Text/Headline";
import { useWindowDimensions } from "../../../ThemeManager";
import "./ContactPage.scss";

const ContactPage = () => {
  const style = ({
    display: 'flex',
    alignItems: 'center',
    gap: 4
  });
  //* Experience */
  return (
    <div className="centerContent" style={{ width: '100vw', height: '100vh', padding: 32 }}>
      <ColumnLayout gap={24} isCard>
        <Icon 
            icon={'Contact'} 
            className={'float-top-right resume-card-icon'}
        />
        <Headline>Contact</Headline>
        <Headline truncate secondary size={4} style={style}><Icon icon="Email" /> JustinGistDesigner@gmail.com</Headline>
        <Headline truncate secondary size={4} style={style}><Icon icon="Linkedin" /> LinkedIn Profile</Headline>
        <Headline truncate secondary size={4} style={style}><Icon icon="Phone" /> (407)-929-3184</Headline>
      </ColumnLayout>
    </div>
  );
};
export default ContactPage;