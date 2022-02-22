import { GlobalThemes } from "../../ThemeManager";

const SafariTheme = ({}: {}) => {
  return (
    <div className={"contentContainer " + GlobalThemes.Safari}>
      <div className="pageLabel">Safari Page</div>
    </div>
  );
};
export default SafariTheme;
