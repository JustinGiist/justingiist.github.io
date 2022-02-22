import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import { GlobalThemes } from "../../ThemeManager";
import "./SpookyTheme.scss";
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
const SpookyTheme = ({}: {}) => {
  const [spookyElement, setSpookyElement] = useState<SpookyElement | undefined>(
    undefined
  );
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
        <div className="headline one textTitle">{options.label}</div>
        <div className="headline four textPrimary">{options.bodyText}</div>
        {options.context &&
          options.context.map((item, i) => {
            return (
              <div className="context">
                <div className="headline two textTitle">{item.label}</div>
                <div className="headline four textSecondary">
                  {item.bodyText}
                </div>
                {options.context && i != options.context.length - 1 && <hr />}
                {item.bulletList &&
                  item.bulletList.map((item) => {
                    return (
                      <div className="bullet">
                        <div className="headline three textSecondary">
                          {item}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        {options.bulletList &&
          options.bulletList.map((item) => {
            return (
              <div className="">
                <div className="headline one">{item}</div>
              </div>
            );
          })}
        {options.label === "Tickets" && (
          <div className="ticketContainer">
            <div className="ticket">
              <div className="headline three textPrimary">Spooky Tour</div>
              <div className="headline one textTitle">19.95</div>
              <div
                className="headline five textSecondary"
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </div>
            </div>
            <div className="ticket primary">
              <div className="headline three textPrimary">Ghoul Tour</div>
              <div className="headline one textTitle">49.95</div>
              <div
                className="headline five textSecondary"
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </div>
            </div>
            <div className="ticket">
              <div className="headline three textPrimary">Nightmare Tour</div>
              <div className="headline one textTitle">29.95</div>
              <div
                className="headline five textSecondary"
                onClick={() => {
                  changePage(SpookyPages.Tours);
                }}
              >
                Read More
              </div>
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
      <div id="TitleText" className="headline one">
        Grimm's Haunted House
      </div>
      <div className="spookyContent">
        <div className="background">
          <Icon icon="HHouse" viewBox="0 0 500 500" />
        </div>
        {spookyElement && spookyModal(spookyElement)}

        <div
          className="circleWindow"
          onClick={() => {
            changePage(SpookyPages.Tickets);
          }}
        >
          <div className="headline one textTitle">Tickets</div>
          <Icon icon="CircleWindow" viewBox="0 0 89 89" />
        </div>
        <div className="windowContent">
          <div
            className="window topLeft"
            onClick={() => {
              changePage(SpookyPages.Tours);
            }}
          >
            <div className="headline one textTitle">Tours</div>
            <Icon icon="LeftTopWindow" viewBox="0 0 56 103" />
          </div>
          <div
            className="window topRight"
            onClick={() => {
              changePage(SpookyPages.About);
            }}
          >
            <div className="headline one textTitle">About</div>
            <Icon icon="RightTopWindow" viewBox="0 0 76 120" />
          </div>
          <div
            className="window bottomLeft"
            onClick={() => {
              changePage(SpookyPages.Location);
            }}
          >
            <div className="headline one textTitle">Location</div>
            <Icon icon="BottomLeftWindow" viewBox="0 0 40 82" />
          </div>
          <div
            className="window bottomRight"
            onClick={() => {
              changePage(SpookyPages.Events);
            }}
          >
            <div className="headline one textTitle">Events</div>
            <Icon icon="BottomLeftWindow" viewBox="0 0 40 82" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SpookyTheme;
