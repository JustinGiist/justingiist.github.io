import "./App.css";
import "./styles.scss";
import "./generics.scss";
import { Route, Redirect, Routes, BrowserRouter } from "react-router-dom";
import RenderComponent from "./components/RenderComponent/RenderComponent";
import { useState } from "react";
import ThemeManager, { GlobalThemes } from "./ThemeManager";
import React from "react";
export const ThemeManagerContext = React.createContext<any>(undefined);
const themeManagerApp = new ThemeManager();
const App = () => {
  const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    let mergeArray = [...nums1, ...nums2];
    let sortedArray = mergeArray.sort();
    let length = mergeArray.length;
    if (length === 1) {
      return mergeArray[0];
    } else if (length % 2 === 0) {
      console.log((mergeArray[length / 2 - 1] + mergeArray[length / 2]) / 2);
      return (mergeArray[length / 2] + mergeArray[length / 2 + 1]) / 2;
    } else {
      console.log(mergeArray[length / 2 - 0.5]);
      return mergeArray[length / 2 - 0.5];
    }
  };
  //findMedianSortedArrays([2, 3], [1, 4, 10]);

  const [themeManager] =
    useState<ThemeManager>(themeManagerApp);
  const [theme, setTheme] = useState(GlobalThemes.Resume);
  const setThemeContext = (incomingTheme: GlobalThemes) => {
    setTheme(incomingTheme);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Jura:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet"></link>
      <ThemeManagerContext.Provider
        value={{ themeManager, theme, setThemeContext }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<RenderComponent url={GlobalThemes.Resume} />}
            />
            <Route
              path={"/" + GlobalThemes.Resume}
              element={<RenderComponent url={GlobalThemes.Resume} />}
            />
            <Route
              path={"/" + GlobalThemes.Contact}
              element={<RenderComponent url={GlobalThemes.Contact} />}
            />
            <Route
              path={"/" + GlobalThemes.Sales}
              element={<RenderComponent url={GlobalThemes.Sales} />}
            />
            <Route
              path={"/" + GlobalThemes.Spooky}
              element={<RenderComponent url={GlobalThemes.Spooky} />}
            />
            <Route
              path={"/" + GlobalThemes.Enterprise}
              element={<RenderComponent url={GlobalThemes.Enterprise} />}
            />
            <Route
              path={"/" + GlobalThemes.Fragments}
              element={<RenderComponent url={GlobalThemes.Fragments} />}
            />
            <Route
              path={"/" + GlobalThemes.Test}
              element={<RenderComponent url={GlobalThemes.Test} />}
            />
            <Route
              path="*"
              element={<RenderComponent url={GlobalThemes.Resume} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeManagerContext.Provider>
    </>
  );
};

export default App;
