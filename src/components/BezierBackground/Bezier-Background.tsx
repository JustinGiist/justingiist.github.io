import { useWindowDimensions } from "../../ThemeManager";
import "./Bezier-Background.scss";

const BezierBackground = () => {
  return (
    <div className="wrap">
      <svg
        className="svgContainer"
        width="100%"
        height="23vh"
        viewBox={"0 0 1600 290"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="curve"
          stroke="#D6EFBA"
          fill="none"
          fillRule="evenodd"
          transform="translate(0,90)"
        >
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#333" offset="0"></stop>
            <stop stopColor="var(--theme-secondary)" offset=".5"></stop>
            <stop stopColor="var(--theme-primary)" offset=".9"></stop>
          </linearGradient>
          <path id="glowPath" fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-8s"
              values="
            M 0 0 L -7 1993 Q 85 1848 199 1766 T 601 1407 T 1060 1072 T 1328 828 T 1559 578 T 1857 -5 Z;
            M 0 0 L -6 2262 Q 281 2049 350 1997 T 631 1560 T 1025 1089 T 1296 836 T 1623 605 T 2003 -3 Z;
            M 0 0 L -5 2261 Q 194 2089 298 1955 T 712 1595 T 1043 1168 T 1263 786 T 1785 541 T 2216 0 Z;
            M 0 0 L -7 1993 Q 85 1848 199 1766 T 601 1407 T 1060 1072 T 1328 828 T 1559 578 T 1857 -5 Z;"
            ></animate>
          </path>
          <path id="glowPath" fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="4s"
              values="
            M 0 0 L -7 1993 Q 85 1848 199 1766 T 601 1407 T 1060 1072 T 1328 828 T 1559 578 T 1857 -5 Z;
            M 0 0 L -6 2262 Q 281 2049 350 1997 T 631 1560 T 1025 1089 T 1296 836 T 1623 605 T 2003 -3 Z;
            M 0 0 L -5 2261 Q 194 2089 298 1955 T 712 1595 T 1043 1168 T 1263 786 T 1785 541 T 2216 0 Z;
            M 0 0 L -7 1993 Q 85 1848 199 1766 T 601 1407 T 1060 1072 T 1328 828 T 1559 578 T 1857 -5 Z;"
            ></animate>
          </path>
          <path fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-6s"
              values="
            M 0 0 L 0 1720 Q 416 1535 575 1357 T 928 1171 T 1233 946 T 1412 695 T 1715 427 T 1900 0 Z;
            M 0 0 L 0 1760 Q 416 1535 569 1443 T 926 1186 T 1233 946 T 1445 671 T 1728 366 T 1900 0 Z;
            M 0 0 L 0 1800 Q 381 1663 493 1586 T 832 1254 T 1233 946 T 1497 675 T 1728 366 T 1900 0 Z;
            M 0 0 L 0 1720 Q 416 1535 575 1357 T 928 1171 T 1233 946 T 1412 695 T 1715 427 T 1900 0 Z;"
            ></animate>
          </path>

          <path fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-2s"
              values="
            M 0 0 L 0 2000 Q 352 1712 430 1591 T 747 1227 T 1160 962 T 1463 678 T 1714 323 T 2021 0 Z;
            M 0 0 L 0 1800 Q 490 1634 568 1403 T 875 1102 T 1184 903 T 1398 732 T 1693 372 T 2021 0 Z;
            M 0 0 L 0 1631 Q 490 1634 628 1377 T 843 1039 T 1170 844 T 1435 614 T 1517 290 T 2021 0 Z;
            M 0 0 L 0 2000 Q 352 1712 430 1591 T 747 1227 T 1160 962 T 1463 678 T 1714 323 T 2021 0 Z;"
            ></animate>
          </path>

          <path fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-2s"
              values="
            M 0 0 L 0 1800 Q 333 1390 627 1426 T 1009 1243 T 1224 983 T 1490 685 T 1839 395 T 2021 0 Z;
            M 0 0 L 0 1800 Q 304 1523 625 1473 T 1011 1246 T 1235 934 T 1550 689 T 1862 352 T 2021 0 Z;
            M 0 0 L 0 1800 Q 360 1687 625 1473 T 1011 1246 T 1235 934 T 1578 558 T 1850 289 T 2021 0 Z;
            M 0 0 L 0 1800 Q 333 1390 627 1426 T 1009 1243 T 1224 983 T 1490 685 T 1839 395 T 2021 0 Z;"
            ></animate>
          </path>

          <path id="glowPath" fill="url(#gradient)" className="pathAttribute">
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-8s"
              values="
            M 0 0 L -7 1993 Q 172 1693 383 1592 T 746 1228 T 1199 891 T 1479 597 T 1693 372 T 1900 0 Z;
            M 0 0 L -3 2103 Q 172 1693 347 1636 T 614 1338 T 1009 1038 T 1354 672 T 1572 450 T 2000 -3 Z;
            M 0 0 L 0 2237 Q -32 1742 192 1695 T 619 1358 T 955 1056 T 1260 735 T 1634 416 T 2090 -7 Z;
            M 0 0 L -7 1993 Q 172 1693 383 1592 T 746 1228 T 1199 891 T 1479 597 T 1693 372 T 1900 0 Z;"
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
};

export default BezierBackground;
