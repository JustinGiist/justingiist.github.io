import React, { useMemo } from "react";
import "./App.css";
import "./styles.scss";
import "./generics.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from "react";
import ThemeManager, { GlobalThemes } from "./ThemeManager";
import useModal from "./components/Modal/Modal";
import ModalContext from "./components/Modal/ModalContext";
import RenderComponent from "./components/RenderComponent/RenderComponent";

export const ThemeManagerContext = React.createContext<any>(undefined);
const themeManagerApp = new ThemeManager();
const App = () => {
  /*
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
  */
  //findMedianSortedArrays([2, 3], [1, 4, 10]);

  const [themeManager] =
    useState<ThemeManager>(themeManagerApp);
  const [theme, setTheme] = useState(GlobalThemes.Resume);
  const setThemeContext = (incomingTheme: GlobalThemes) => {
    setTheme(incomingTheme);
  };
  const { openModal, closeModal, modalRoot } = useModal();
  const modalContextValue = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  useEffect(() => {
    ReactTooltip.rebuild();
  });
  
  const routes = Object.keys(GlobalThemes);
  const router = createBrowserRouter([
    ...routes.map(path => ({
      path: path,
      element: <RenderComponent />
    })),
    {
      path: "*",
      element: <RenderComponent />,
    },
  ]);

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
      <link href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet"></link>
      <ThemeManagerContext.Provider
        value={{ themeManager, theme, setThemeContext }}
      >
        <ModalContext.Provider value={modalContextValue}>
          <RouterProvider router={router} />
          {modalRoot}
        </ModalContext.Provider>
      </ThemeManagerContext.Provider>
      <ReactTooltip
        effect='solid'
        delayShow={500}
        delayUpdate={500}
      />
    </>
  );
};

export default App;
