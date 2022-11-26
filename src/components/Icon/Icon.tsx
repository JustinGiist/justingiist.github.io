import SvgIcon from "@material-ui/icons/Print";
import { ReactComponent as Skull } from "./skull.svg";
import { ReactComponent as Bat } from "./bat.svg";
import { ReactComponent as Pumpkin } from "./pumpkin.svg";
import { ReactComponent as Atari } from "./atari.svg";
import { ReactComponent as Amazon } from "./Amazon_logo.svg";
import { ReactComponent as Tesla } from "./Tesla_Motors.svg";
import { ReactComponent as Tama } from "./tama.svg";
import { ReactComponent as Invader } from "./invader.svg";
import { ReactComponent as Coin } from "./coin.svg";
import { ReactComponent as ArcadeButton } from "./arcadeButton.svg";
import { ReactComponent as Textbox } from "./textbox.svg";
import { ReactComponent as Pacman } from "./pacman.svg";
import { ReactComponent as JoyStick } from "./arcadeJoyStick.svg";
import { ReactComponent as HHouse } from "./HHouse.svg";
import { ReactComponent as LeftTopWindow } from "./LeftTopWindow.svg";
import { ReactComponent as RightTopWindow } from "./RightTopWindow.svg";
import { ReactComponent as BottomLeftWindow } from "./BottomLeftWindow.svg";
import { ReactComponent as CircleWindow } from "./CircleWindow.svg";
import { ReactComponent as Clouds } from "./Clouds.svg";
import { ReactComponent as SalesLeftBackground } from "./SalesLeftBackground.svg";
import { ReactComponent as SalesRightBackground } from "./SalesRightBackground.svg";
import { ReactComponent as Squiggly } from "./Squiggly.svg";
import { ReactComponent as Sony } from "./sony-logo.svg";
import { ReactComponent as MSFT } from "./microsoft-windows-22.svg";
import { ReactComponent as AAPL } from "./apple.svg";
import { ReactComponent as JGLogo } from "./favicon.svg";
import DiamondIcon from "@mui/icons-material/Diamond";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  Folder,
  Home,
  ColorLens,
  Pets,
  BugReport,
  WbSunny,
  SportsEsports,
  ArrowDropDown,
  ContactPhone,
  AcUnit,
  Close,
  PriorityHigh
} from "@material-ui/icons";
import {
  HomeOutline,
  AccountCircleOutline,
  WalletOutline,
  CalculatorVariantOutline,
  ToolboxOutline,
  CheckboxBlankCircle,
  Plus,
  CartOutline,
  BasketOffOutline,
  Delete,
  DotsVertical,
  Facebook,
  Linkedin,
  Email,
  Phone,
  InformationOutline,
  ChevronRight,
  ChevronLeft,
  Account,
  LockOpen,
  Lock,
  Check,
  WeatherNight,
  FileTableBoxMultipleOutline,
  FileChart,
  ShieldCrownOutline,
  ChartTree,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Eye,
  EyeOff,
  CameraOutline,
  FolderUploadOutline,
  FileAccountOutline,
  Candycane,
  Domain,
  NotebookEditOutline,
  Sword,
  Hamburger,
  TestTube,
  Play,
  Pause,
  MusicCircleOutline,
  Note,
  NoteEdit,
  StarOutline,
  ContentSave,
  UndoVariant,
  RedoVariant,
  Snowflake
} from "mdi-material-ui";

import { GlobalThemes } from "../../ThemeManager";
const GetIcon: any = {
  Skull: Skull,
  Bat: Bat,
  Pumpkin: Pumpkin,
  Home: Home,
  Themes: ColorLens,
  Projects: Folder,
  Bug: BugReport,
  Paw: Pets,
  Sun: WbSunny,
  Atari: Atari,
  SportsEsports: SportsEsports,
  Tama: Tama,
  ArrowDropDown: ArrowDropDown,
  Invader: Invader,
  Contact: ContactPhone,
  AcUnit,
  HomeOutline,
  AccountCircleOutline,
  WalletOutline,
  CalculatorVariantOutline,
  ToolboxOutline,
  Coin,
  ArcadeButton,
  Textbox,
  Pacman,
  PacmanCircle: CheckboxBlankCircle,
  JoyStick,
  HHouse,
  LeftTopWindow,
  RightTopWindow,
  BottomLeftWindow,
  CircleWindow,
  Clouds,
  Close,
  QuestionMark: QuestionMarkIcon,
  SalesLeftBackground,
  SalesRightBackground,
  Diamond: DiamondIcon,
  Plus,
  Cart: CartOutline,
  Squiggly,
  NoItems: BasketOffOutline,
  Delete,
  Context: DotsVertical,
  FB: Facebook,
  AMZN: Amazon,
  TSLA: Tesla,
  Email,
  Linkedin,
  Phone,
  Sony,
  MSFT,
  AAPL,
  JGLogo,
  Info: InformationOutline,
  ChevronRight,
  ChevronLeft,
  Account,
  LockOpen,
  Lock,
  Warning: PriorityHigh,
  Check,
  Moon: WeatherNight,
  Customers: HomeOutline,
  Templates: FileTableBoxMultipleOutline,
  Campaigns: ChartTree,
  Reports: FileChart,
  Admin: ShieldCrownOutline,
  X: Close,
  SidebarClose: ChevronDoubleLeft,
  SidebarOpen: ChevronDoubleRight,
  Eye,
  EyeOff,
  Upload: FolderUploadOutline,
  Camera: CameraOutline,
  Resume: FileAccountOutline,
  Sales: Candycane,
  Enterprise: Domain,
  Spooky: Skull,
  Editor: NotebookEditOutline,
  Fragments: Sword,
  Hamburger,
  Test: TestTube,
  BlackRed: TestTube,
  Music: MusicCircleOutline,
  Play,
  Pause,
  List: Note,
  Edit: NoteEdit,
  Star: StarOutline,
  Cancel: Close,
  Save: ContentSave,
  Undo: UndoVariant,
  Redo: RedoVariant,
  Yeti: Snowflake
};
const Icon = ({
  icon,
  onclick,
  fontSize,
  color,
  viewBox,
  width,
  height,
  className,
}: {
  icon?: string;
  onclick?: (e: any) => void;
  fontSize?: number;
  color?: GlobalThemes;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}) => {
  const myIcon = GetIcon[icon as string];
  if (!myIcon) return <div></div>;
  return (
    <SvgIcon
      onClick={(e: any) => {
        return onclick ? onclick(e) : null;
      }}
      width={width ?? "100%"}
      height={height ?? "100%"}
      viewBox={viewBox ?? "0 0 24 24"}
      fontSize={fontSize ? "inherit" : "small"}
      style={{
        fontSize: fontSize ?? 24,
        color: color ?? "",
      }}
      className={className}
      component={myIcon}
    />
  );
};
export default Icon;
