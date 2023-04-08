import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import Rainimation from "../../components/Rainimation/Rainimation";
import { useWindowDimensions } from "../../ThemeManager";
import "./SpookyTheme.scss";
import Headline from "../../components/Text/Headline";
import SubHeadline from "../../components/Text/SubHeadline";
import Body from "../../components/Text/Body";
enum SpookyPages {
  Tickets,
  Tours,
  About,
  Location,
  Events,
}
interface SpookyElement {
  label: string;
  iconLeft?: string;
  iconRight?: string;
  bodyText?: string;
  context?: SpookyElement[];
  bulletList?: string[];
}
const elementsMap: Map<SpookyPages, SpookyElement> = new Map([
  [
    SpookyPages.Location,
    {
      iconLeft: "Bat",
      iconRight: "Skull",
      label: "Location",
      bodyText:
        "Come and visit one of the worldest spookiest and scariest Haunted Houses in all the land! See frights and terrors like never before!",
      context: [
        {
          label: "Located at",
          bodyText: "42 Wallaby Way Blaxland NSW 2774, Australia",
        },
        {
          label: "Hours",
          bulletList: ["M-F: 8:00 PM - 1:00 AM", "S-S: 8:00 PM - 3:00 AM"],
        },
      ],
    },
  ],
  [
    SpookyPages.About,
    {
      iconLeft: "Bat",
      iconRight: "Skull",
      label: "About",
      bodyText:
        "Prepare yourself for a Frightseeing Adventure like none other as your resident Ghost Host shares tales both true and truly unnerving of the city’s tumultuous past. Discover the secrets of the Tolomoto Cemetery and the apparition seen playing on the sacred grounds after dark. Could it be the spirit of five-year old James or is it the Ghost Bride, still waiting for her walk down the aisle. Be sure to keep a watchful eye while passing by the old City Gates. You might catch a glimpse of Elizabeth, a child victim of the yellow fever, waving to passersby. And face your fears in the exclusive nighttime experience at Ghoul Tour… Plan to arrive at least 20 minutes early to make time to visit Nightmarish Tour.",
    },
  ],
  [
    SpookyPages.Events,
    {
      iconLeft: "Bat",
      iconRight: "Skull",
      label: "Events",
      bodyText:
        "Come and visit one of the worldest spookiest and scariest Haunted Houses in all the land! See frights and terrors like never before!",
      context: [
        {
          label: "Oct 31 - Halloween Party",
          bodyText:
            "Come and experience the most horrifying and bumping party you've ever been too. A whole event that is fun for the whole family!",
        },
        {
          label: "Oct 30 - Movie Night",
          bodyText:
            "A truly fun night, where you and your family can come bring a picnic blanket and watch a scary movie on the grounds of a Haunted House! Spooky stuff is bound to happen.",
        },
        {
          label: "Oct 28 - Pajama Night",
          bodyText:
            "A fun event where you if you come wearing pajama's you get a discount and are entered to win during our Pajama Contest! Bring your cutest PJs!",
        },
      ],
    },
  ],
  [
    SpookyPages.Tours,
    {
      iconLeft: "Bat",
      iconRight: "Skull",
      label: "Tours",
      bodyText: "We have several options to scare your pants off!",
      context: [
        {
          label: "Spooky Tour",
          bodyText:
            "A haunting experience where we commence a seance to speak with the dead.",
        },
        {
          label: "Ghoul Tour",
          bodyText:
            "A horrifying experience where the tour group is guided through our Haunted House! Room by room of Horrors beyond your wildest imagination!",
        },
        {
          label: "Nightmare Tour",
          bodyText:
            "A nightmarish guided tour through the entire grounds as you get frightened by our 'other' guests",
        },
      ],
    },
  ],
  [
    SpookyPages.Tickets,
    {
      iconLeft: "Bat",
      iconRight: "Skull",
      label: "Tickets",
      bodyText:
        "Come and visit one of the worldest spookiest and scariest Haunted Houses in all the land! See frights and terrors like never before!",
    },
  ],
]);
const SpookyTheme = () => {
  const [spookyElement, setSpookyElement] = useState<SpookyElement | undefined>(
    undefined
  );
  const dimensions = useWindowDimensions();
  const changePage = (page: SpookyPages | undefined) => {
    if (page === undefined) {
      setSpookyElement(undefined);
    } else {
      setSpookyElement(elementsMap.get(page));
    }
  };
  const spookyModal = (options: SpookyElement) => (
    <div className="spookyModal">
      <div
        className="spookyModalContent"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="spookyIcon left">
          <Icon icon={options.iconLeft} />
        </div>
        <div
          className="spookyIcon right"
          onClick={() => {
            changePage(undefined);
          }}
        >
          <Icon icon={"Close"} fontSize={32} />
        </div>
        <div className="spookyIcon bottomRight">
          <Icon icon={options.iconRight} />
        </div>
        <Headline>{options.label}</Headline>
        <SubHeadline>{options.bodyText}</SubHeadline>
        {options.context &&
          options.context.map((item, i) => {
            return (
              <div key={`spooky-context-item-${item.label}`} className="context">
                <Headline size={3}>{item.label}</Headline>
                <Body>
                  {item.bodyText}
                </Body>
                {options.context && i !== options.context.length - 1 && <hr />}
                {item.bulletList &&
                  item.bulletList.map((item) => {
                    return (
                      <div key={`bullet-item-${item}`} className="bullet">
                        <Body>
                          {item}
                        </Body>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        {options.bulletList &&
          options.bulletList.map((item) => {
            return (
                <Headline key={`spooky-bullet-item-${item}`}>{item}</Headline>
            );
          })}
        {options.label === "Tickets" && (
          <div className="ticketContainer">
            <div className="ticket">
              <SubHeadline className="text-sub-headline">Spooky Tour</SubHeadline>
              <Headline>19.95</Headline>
              <Body
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </Body>
            </div>
            <div className="ticket primary">
              <SubHeadline>Ghoul Tour</SubHeadline>
              <Headline>49.95</Headline>
              <Body
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </Body>
            </div>
            <div className="ticket">
              <SubHeadline>Nightmare Tour</SubHeadline>
              <Headline>29.95</Headline>
              <Body
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </Body>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <>
      <div className="cloud left">
        <Icon icon="Clouds" viewBox="0 0 130 120" />
      </div>
      <div className="cloud right">
        <Icon icon="Clouds" viewBox="0 0 130 120" />
      </div>
      {!dimensions.isMobile && <h1 id="TitleText">
        Grimm's Haunted House
      </h1>}
      <div className="spookyContent">
        <div className="background">
          <svg viewBox="0 0 500 500" width="500" height="500">
            <path
              style={{ fill: "var(--theme-secondary)" }}
              d="M 93.235 209.272 C 141.807 225.341 174.477 349.054 165.187 493.38 L 309.948 494.665 C 314.123 454.99 319.696 305.33 393.278 167.418 L 93.235 209.272 Z"
            ></path>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="16.571 227.412 462.422 163.169 270.117 7.224"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-secondary)" }}
              points="313.648 445.821 484.85 412.906 484.422 430.433 313.221 449.027"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="454.337 493.906 449.777 403.913 474.371 397.387 466.382 493.863"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="426.57 493.882 431.532 408.451 411.474 413.905 416.795 493.892"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="399.251 416.95 383.965 421.01 388.832 493.824 395.696 493.913"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="373.049 423.91 361.626 426.913 366.738 493.877 370.117 493.836"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="351.134 429.643 342.889 431.821 345.317 493.866 348.116 493.804"
            ></polygon>
            <polygon
              style={{ fill: "var(--theme-primary)" }}
              points="332.217 434.627 326.452 436.197 328.329 493.842 329.741 493.87"
            ></polygon>
            <path
              style={{ fill: "var(--theme-secondary)" }}
              d="M 158.944 493.045 L 157.687 468.808 C 155.407 450.881 131.486 448.503 133.157 470.352 L 138.483 493.036 L 158.944 493.045 Z"
            ></path>
            <path
              style={{ fill: "var(--theme-secondary)" }}
              d="M 131.008 436.631 L 128.749 472.811 C 125.072 498.549 86.512 501.963 89.206 470.593 L 97.791 436.631 L 131.008 436.631 Z"
              transform="matrix(-1, 0, 0, -1, 220.079291, 929.750882)"
            ></path>
            <path
              style={{ fill: "var(--theme-primary)" }}
              d="M 100.565 493.205 L 97.298 442.551 C 91.982 406.519 36.211 401.74 40.108 445.656 L 52.527 493.205 L 100.565 493.205 Z"
            ></path>
            <text
              style={{
                whiteSpace: "pre",
                fill: "var(--text-headline)",
                fontFamily: "Luxurious Roman, cursive",
                fontSize: "16.8px",
              }}
              x="91.621"
              y="430.07"
              transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
            >
              RIP
            </text>
            <polygon
              style={{ fill: "var(--theme-secondary)" }}
              points="24.749 493.026 15.038 427.115 18.606 409.723 28.121 423.845 44.622 493.069"
            ></polygon>
            <g
              className="circleWindowNew"
              onClick={() => changePage(SpookyPages.Tickets)}
            >
              <text
                style={{
                  whiteSpace: "pre",
                  fill: "var(--text-headline)",
                  fontFamily: "Luxurious Roman, cursive",
                  fontSize: "32px",
                }}
                x="228.621"
                y="80.07"
                transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
              >
                Tickets
              </text>
              <ellipse
                style={{
                  fill: "var(--theme-primary)",
                  stroke: "var(--theme-secondary)",
                  strokeWidth: "8px",
                }}
                cx="266.726"
                cy="116.632"
                rx="39.748"
                ry="39.748"
              ></ellipse>
              <polygon
                style={{
                  stroke: "var(--dark)",
                  strokeWidth: "0px",
                  fill: "var(--theme-secondary)",
                }}
                points="230.219 128.89 297.573 96.057 302.093 105.929 231.442 132.014"
              ></polygon>
              <polygon
                style={{
                  stroke: "var(--dark)",
                  strokeWidth: "0px",
                  fill: "var(--theme-secondary)",
                }}
                points="271.992 153.952 250.133 81.88 257.91 78.996 275.872 152.685"
              ></polygon>
            </g>
            <g
              className="window one"
              onClick={() => changePage(SpookyPages.Tours)}
            >
              <text
                style={{
                  whiteSpace: "pre",
                  fill: "var(--text-headline)",
                  fontFamily: "Luxurious Roman, cursive",
                  fontSize: "32px",
                }}
                x="168.621"
                y="222.07"
                transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
              >
                Tours
              </text>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="166.388 221.839 180.494 272.056 195.637 271.31 188.276 219.338"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="181.66 276.555 193.28 314.225 203.022 313.888 196.625 277.03"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="206.245 313.722 202.006 277.177 218.96 277.739 218.358 313.381"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="201.543 270.859 196.218 218.232 221.266 215.091 219.124 270.127"
              ></polygon>
            </g>
            <g
              className="window two"
              onClick={() => changePage(SpookyPages.About)}
            >
              <text
                style={{
                  whiteSpace: "pre",
                  fill: "var(--text-headline)",
                  fontFamily: "Luxurious Roman, cursive",
                  fontSize: "32px",
                }}
                x="268.621"
                y="208.07"
                transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
              >
                About
              </text>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="264.35 208.236 261.781 267.592 279.624 266.192 287.473 204.58"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="261.834 271.766 261.301 313.228 273.654 311.751 278.935 271.783"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="278.882 311.064 285.894 272.201 312.406 271.823 302.186 307.458"
              ></polygon>
              <polygon
                style={{ fill: "var(--theme-primary)" }}
                points="287.352 265.671 300.383 203.029 335.54 197.07 314.556 263.325"
              ></polygon>
            </g>
            <g
              className="window three"
              onClick={() => changePage(SpookyPages.Location)}
            >
              <text
                style={{
                  whiteSpace: "pre",
                  fill: "var(--text-headline)",
                  fontFamily: "Luxurious Roman, cursive",
                  fontSize: "32px",
                }}
                x="128.621"
                y="372.07"
                transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
              >
                Location
              </text>
              <path
                style={{ fill: "var(--theme-primary)" }}
                d="M 196.556 442.847 L 188.201 384.326 C 185.155 360.259 222.252 351.815 226.253 383.421 L 223.968 442.523 L 196.556 442.847 Z"
              ></path>
              <rect
                x="209.451"
                y="378.776"
                width="36.213"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(0.999436, -0.033589, 0.033589, 0.999436, -32.587228, 17.463866)"
              ></rect>
              <rect
                x="175.06"
                y="378.776"
                width="30.266"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(0.999852, -0.017222, 0.017222, 0.999852, 12.515541, 45.689546)"
              ></rect>
              <rect
                x="457.131"
                y="378.776"
                width="79.036"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(0.050931, 0.998702, -0.998702, 0.050931, 563.601152, -112.631374)"
              ></rect>
            </g>
            <g
              className="window four"
              onClick={() => changePage(SpookyPages.Events)}
            >
              <text
                style={{
                  whiteSpace: "pre",
                  fill: "var(--text-headline)",
                  fontFamily: "Luxurious Roman, cursive",
                  fontSize: "32px",
                }}
                x="248.621"
                y="372.07"
                transform="matrix(1.070337, -0.25992, -0.05174, 1.055056, -23.924142, 24.221879)"
              >
                Events
              </text>
              <path
                style={{ fill: "var(--theme-primary)" }}
                d="M 268.187 362.216 L 259.832 420.737 C 256.786 444.804 293.883 453.248 297.884 421.642 L 295.599 362.54 L 268.187 362.216 Z"
                transform="matrix(-1, 0, 0, -1, 557.538469, 804.428308)"
              ></path>
              <rect
                x="209.451"
                y="378.776"
                width="36.213"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(-0.999436, -0.033589, -0.033589, 0.999436, 518.49556, 16.829958)"
              ></rect>
              <rect
                x="175.06"
                y="378.776"
                width="30.266"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(-0.999852, -0.017222, -0.017222, 0.999852, 473.392806, 45.055612)"
              ></rect>
              <rect
                x="457.131"
                y="378.776"
                width="79.036"
                height="3.714"
                style={{
                  stroke: "var(--theme-secondary)",
                  fill: "var(--theme-secondary)",
                }}
                transform="matrix(-0.050931, 0.998702, 0.998702, 0.050931, -77.692728, -113.265293)"
              ></rect>
            </g>
          </svg>
        </div>
        {spookyElement && spookyModal(spookyElement)}
        {dimensions.isMobile && (
          <>
              <h1 id="TitleText">
                Grimm's Haunted House
              </h1>
              <div className="spooky-button-container flexFull noCollapse">
                <div
                  className="mobileSpookyButton"
                  onClick={() => changePage(SpookyPages.Tickets)}
                >
                  Tickets
                </div>
                <div
                  className="mobileSpookyButton"
                  onClick={() => changePage(SpookyPages.Tours)}
                >
                  Tours
                </div>
                <div
                  className="mobileSpookyButton"
                  onClick={() => changePage(SpookyPages.About)}
                >
                  About
                </div>
                <div
                  className="mobileSpookyButton"
                  onClick={() => changePage(SpookyPages.Location)}
                >
                  Location
                </div>
                <div
                  className="mobileSpookyButton"
                  onClick={() => changePage(SpookyPages.Events)}
                >
                  Events
                </div>
              </div>
          </>
        )}
      </div>
      <Rainimation />
    </>
  );
};
export default SpookyTheme;
