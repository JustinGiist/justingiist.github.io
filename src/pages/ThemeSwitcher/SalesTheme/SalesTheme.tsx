import Icon from "../../../components/Icon/Icon";
import { GlobalThemes, useWindowDimensions } from "../../../ThemeManager";
import lolipop from "../../../assets/lolipop.jpg";
import candy from "../../../assets/candy.jpg";
import candy2 from "../../../assets/candy2.jpg";
import candy3 from "../../../assets/candy3.jpg";
import candy4 from "../../../assets/candy4.jpg";
import chocolate from "../../../assets/chocolate.jpg";
import cakeBalls from "../../../assets/cakeBalls.jpg";
import candyShop from "../../../assets/candyShop.jpeg";
import candyShop2 from "../../../assets/candyShop2.jpg";
import candyShop3 from "../../../assets/candyShop3.jpg";
import chocolate2 from "../../../assets/chocolate2.jpg";
import chocolate3 from "../../../assets/chocolate3.jpg";
import chocolate4 from "../../../assets/chocolate4.jpg";
import { nanoid } from "nanoid";
import "./SalesTheme.scss";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import CartComponent from "../../../components/CartComponent";
export const getRandomKey = () => {
  return nanoid();
};
enum SalesPage {
  Welcome,
  Selection,
  About,
}
interface iPurchase {
  title: string;
  description: string;
  img: any;
  price: number;
}
const SalesTheme = ({}: {}) => {
  const [subPage, setSubPage] = useState<SalesPage>(SalesPage.Welcome);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [animationOverlay, setAnimationOverlay] = useState<any>();

  const chocolates: iPurchase[] = [
    {
      title: "Truffle Box",
      img: chocolate,
      price: 19.95,
      description:
        "This truffle box is perfect for the berry lover! Made with real fruit, these bite size truffles will exceed your expectations!",
    },
    {
      title: "Caramel Box",
      img: chocolate2,
      price: 29.95,
      description:
        "The only thing better than Gosanko Chocolate's caramel, is our caramel's topped with Mediterranean Sea Salt or for more colorful look, Pink Himalayan Salt.",
    },
    {
      title: "Mystery Box",
      img: chocolate4,
      price: 24.95,
      description:
        "Too many to choose from? Can't decide? We'll make the decision for you. This chocolate box will includes 6 different truffles and caramels from our collection.",
    },
    {
      title: "Espresso Box",
      img: chocolate3,
      price: 14.95,
      description:
        "A caffeine treat of milk, dark and white chocolate covered espresso beans offer a distinctive bold and nutty flavor.",
    },
  ];
  const candies: iPurchase[] = [
    {
      title: "You-Pick Candy",
      img: candy,
      price: 8.95,
      description:
        "Do you have trouble deciding on what delicious candy to have? Come on in and you don't have to! Pick whatever assortment you like!",
    },
    {
      title: "Assorted Candy Box",
      img: candy2,
      price: 14.95,
      description:
        "Comes with a wide assortment of gummies, mints, chocolates, hard candies, and many more!",
    },
    {
      title: "Jelly Beans",
      img: candy3,
      price: 4.95,
      description:
        "A huge bag of assorted jelly beans made with our homemade flavored syrups. Come taste the quality in every bean!",
    },
    {
      title: "Dalgona Candy",
      img: candy4,
      price: 9.95,
      description:
        "A common Korean candy made with melted sugar and baking soda. We've added our own ingredients to make some of the best we've ever had! A unique taste only found here!",
    },
  ];
  const [selectedCandy, setSelectedCandy] = useState<string | undefined>(
    undefined
  );
  const [ballElementList, setBallElementList] = useState<any[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);
  const animateBall = (item: any, rect: any) => {
    if (rect) {
      let newBall = document.createElement("div");
      newBall.classList.add("cartBall");
      newBall.style.left = rect.left + "px";
      newBall.style.top = rect.top + "px";
      newBall.innerHTML = "+1";
      animationOverlay.append(newBall);
      setTimeout(() => {
        setTimeout(() => {
          animationOverlay.removeChild(animationOverlay.children[0]);
        }, 670);
        for (let i = 0; i < animationOverlay.children.length; i++) {
          let child = animationOverlay.children[i];
          if (child.classList.contains("animate") == false) {
            child.classList.add("animate");
            return;
          }
        }
      }, 500);
    }
  };
  const addToCart = (item: any, e: any) => {
    cartItems.push(item);
    setCartItems([...cartItems]);
    if (animationOverlay) {
      animateBall(item, e.target.getBoundingClientRect());
    }
  };
  useEffect(() => {
    if (!animationOverlay)
      setAnimationOverlay(document.getElementById("animationOverlay"));
  });

  return (
    <>
      <CartComponent cartItems={cartItems} setCartItems={setCartItems} />
      <div className="salesTopBar">
        <div
          className={
            "topBarOptionBackground " +
            (subPage === SalesPage.Welcome ? " selected" : "")
          }
          onClick={() => setSubPage(SalesPage.Welcome)}
        >
          <div className="topBarOption headline four textPrimary">Welcome</div>
        </div>
        <div
          className={
            "topBarOptionBackground " +
            (subPage === SalesPage.Selection ? " selected" : "")
          }
          onClick={() => setSubPage(SalesPage.Selection)}
        >
          <div className="topBarOption headline four textPrimary">
            Selection
          </div>
        </div>
        <div
          className={
            "topBarOptionBackground " +
            (subPage === SalesPage.About ? " selected" : "")
          }
          onClick={() => setSubPage(SalesPage.About)}
        >
          <div className="topBarOption headline four textPrimary">Story</div>
        </div>
      </div>
      {subPage === SalesPage.Welcome && (
        <div className={"salesContainer "}>
          <div className="background">
            <Icon icon="SalesLeftBackground" viewBox="0 0 100 500" />
            <Icon icon="SalesRightBackground" viewBox="0 0 100 500" />
          </div>
          <div className="bodyContainer">
            <div className="salesContent" style={{ marginTop: 240 }}>
              <div className="flex">
                <div className="headline one candy">Candy</div>
                <div className="shop">
                  <div className="headline one ">Shop</div>
                </div>
              </div>

              <div className="headline two">Bringing you more candy!</div>
              <a
                className="designButton funButton"
                onClick={() => setSubPage(SalesPage.Selection)}
              >
                Get Candy!
              </a>
            </div>
            <div className="pictureContent">
              <div className="flexColumn">
                <div className="headline one textTitle">Santa's Elves</div>
                <div className="headline three textTeritary">
                  Feburary 22, 2022
                </div>
                <div className="headline four textSecondary">
                  This week we have been visited by Santa's Elves! They've
                  brought all their favorite treats along with them!
                </div>
              </div>
              <img src={lolipop} />
              <img src={candy} />
              <div className="flexColumn">
                <div className="headline one textTitle">Kid's Day</div>
                <div className="headline three textTeritary">
                  Janurary 18, 2022
                </div>
                <div className="headline four textSecondary">
                  Come on down with the whole family! We've setup stations for
                  all the kids to learn how candy is made and even make their
                  own!
                </div>
              </div>
            </div>
            <div className="pictureContent">
              <div className="flexColumn">
                <div className="headline one textTitle">
                  Chocolate Lovers Day
                </div>
                <div className="headline three textTeritary">
                  December 12, 2022
                </div>
                <div className="headline four textSecondary">
                  Come in and explore the world of chocolate. We've set up
                  booths with different chocolate vendors from around the world
                  for you to come in and taste!
                </div>
              </div>
              <img src={chocolate} />
              <img src={cakeBalls} />
              <div className="flexColumn">
                <div className="headline one textTitle">
                  Cake Ball Decorating
                </div>
                <div className="headline three textTeritary">
                  November 8, 2022
                </div>
                <div className="headline four textSecondary">
                  Come on in and have some fun with the whole family! We have
                  many different flavors and materials to decorate with so bring
                  the kids!
                </div>
              </div>
            </div>
            <div className="videoContent">
              <div className="headline four">
                Check out this candy making video we made to show you the
                dedication we take to the whole process!
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dnCmOc6EAHI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="videoContent">
              <div className="headline four textPlaceholder">
                Come check out our fine selection of candies and chocolates!
              </div>
              <a
                className="designButton funButton"
                onClick={() => setSubPage(SalesPage.Selection)}
              >
                Get Candy!
              </a>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      )}
      {subPage === SalesPage.Selection && (
        <div className={"salesContainer "}>
          <div className="background">
            <Icon icon="SalesLeftBackground" viewBox="0 0 100 500" />
            <Icon icon="SalesRightBackground" viewBox="0 0 100 500" />
          </div>
          <div className="bodyContainer">
            <div className="salesContent" style={{ marginTop: 240 }}>
              <div className="flex">
                <div className="headline one candy">Our</div>
                <div className="shop">
                  <div className="headline one ">Selection</div>
                </div>
              </div>
              <div className="headline one textTitle">Chocolates</div>
              {chocolates.map((item) => {
                return (
                  <CandyCard
                    item={item}
                    key={getRandomKey()}
                    addToCart={addToCart}
                    setSelectedCandy={setSelectedCandy}
                    parentSelectedCandy={selectedCandy}
                  />
                );
              })}
              <div className="headline one textPrimary">Candy</div>
              {candies.map((item) => {
                return (
                  <CandyCard
                    item={item}
                    key={getRandomKey()}
                    addToCart={addToCart}
                    setSelectedCandy={setSelectedCandy}
                    parentSelectedCandy={selectedCandy}
                  />
                );
              })}
            </div>

            <div className="footer"></div>
          </div>
        </div>
      )}
      {subPage === SalesPage.About && (
        <div className={"salesContainer About"}>
          <div className="background">
            <Icon icon="SalesLeftBackground" viewBox="0 0 100 500" />
            <Icon icon="SalesRightBackground" viewBox="0 0 100 500" />
          </div>
          <div className="bodyContainer">
            <div className="salesContent" style={{ marginTop: 240 }}>
              <div className="flex">
                <div className="headline one candy">Our</div>
                <div className="shop">
                  <div className="headline one ">Story</div>
                </div>
              </div>

              <div className="quote">
                <div className="headline two">
                  "It's about hardwork and dedication."{" "}
                </div>
                <div className="headline four textPlaceholder">
                  - Granddad Keber
                </div>
              </div>
            </div>
            <div className="pictureContent">
              <img src={candyShop} />
              <div className="flexColumn">
                <div className="headline four textSecondary">
                  In November 2008, Karen Keber opened up Candy Shop in Market
                  Square downtown Houlton, ME. The store was named for Karen's
                  late husband, Willy, and the idea for the candy store was
                  conceived as a way for her, a widow to work and care for her
                  three young children at the same time. She worked in the store
                  while they were at school and when they were home from school,
                  they helped out in the shoppe. It was a great way for the
                  family to be together while they made their living.
                </div>
              </div>

              <div className="flexColumn">
                <div className="headline four textSecondary">
                  When opening the store, Karen wanted customers to feel as
                  though they were traveling back in time to an old-fashioned,
                  specialty candy store. Aside from making much of the candy
                  herself, she stocked the shop with candy that most people
                  haven't seen in years and with other kinds of candy that most
                  people don't even know exist.
                </div>
              </div>
              <img src={candyShop2} />
              <img src={candyShop3} />
              <div className="flexColumn">
                <div className="headline four textSecondary">
                  In August of 2014, Karen and her new husband Matt Sutton
                  purchased a building at 57 Bay View Street in the charming
                  downtown area of Camden, ME. The building was completely
                  renovated and turned into a beautiful candy shoppe that opened
                  its doors on July 4, 2015.
                </div>
              </div>
            </div>
            <div className="salesContent" style={{ marginTop: 240 }}>
              <div className="quote">
                <div className="headline two">
                  "A job isn't finished until it's done."{" "}
                </div>
                <div className="headline four textPlaceholder">
                  - Granddad Keber
                </div>
              </div>
            </div>
            <div className="videoContent">
              <div className="headline four textPlaceholder">
                Come check out our fine selection of candies and chocolates!
              </div>
              <a
                className="designButton funButton"
                onClick={() => setSubPage(SalesPage.Selection)}
              >
                Get Candy!
              </a>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      )}
      {ballElementList.map((item) => {
        return item;
      })}
    </>
  );
};
export default SalesTheme;
const CandyCard = ({
  item,
  addToCart,
  setSelectedCandy,
  parentSelectedCandy,
}: {
  item: any;
  addToCart: any;
  setSelectedCandy: Dispatch<SetStateAction<string | undefined>>;
  parentSelectedCandy: string | undefined;
}) => {
  const dimensions = useWindowDimensions();
  const [iSelectedCandy, setInnerSC] = useState<string | undefined>();
  const setCandy = (value: string | undefined) => {
    if (iSelectedCandy != value) {
      setSelectedCandy(value);
      setInnerSC(value);
    } else {
      setSelectedCandy(undefined);
      setInnerSC(undefined);
    }
  };
  useEffect(() => {
    setInnerSC(parentSelectedCandy);
  }, []);
  return !dimensions.isMobile ? (
    <div className="candyCardContainer" key={getRandomKey()}>
      <div className="candyCardBackground">
        <div className="candyCard">
          <div
            className="imgContainer"
            onClick={() => {
              setCandy(item.title);
            }}
          >
            <div className="descriptionCardPositioner">
              <div className="descriptionCard">
                <div className="headline four textSecondary">
                  {item.description}
                </div>
              </div>
            </div>
            <img
              src={item.img}
              key={getRandomKey()}
              className={`unactiveImg ${
                iSelectedCandy === item.title ? " activeImg" : ""
              }`}
            />
            <div className="readMore">
              {iSelectedCandy === item.title ? "Close" : "Read More"}
            </div>
          </div>
          <div
            className="flex column gradientButtonBrown"
            onClick={(e) => {
              setCandy(undefined);
              addToCart(item, e);
            }}
          >
            <div className="headline four textPrimary">{item.title}</div>
            <div className="headline three">${item.price}</div>
            <div className="addButton">
              <Icon icon="Plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mobileCardContainer" key={getRandomKey()}>
      <div className="candyCardBackground">
        <div className="candyCard">
          <div
            className="imgContainer"
            onClick={() => {
              setCandy(item.title);
            }}
          >
            <div className="descriptionCardPositioner">
              <div className="descriptionCard">
                <div className="headline four textSecondary">
                  {item.description}
                </div>
              </div>
            </div>
            <img
              src={item.img}
              key={getRandomKey()}
              className={`unactiveImg ${
                iSelectedCandy === item.title ? " activeImg" : ""
              }`}
            />
            <div className="readMore">
              {iSelectedCandy === item.title
                ? "View Image"
                : "View Description"}
            </div>
          </div>
          <div
            className="flex gradientButtonBrown"
            onClick={(e) => {
              setCandy(undefined);
              addToCart(item, e);
            }}
          >
            <div className="flex column">
              <div className="headline four textPrimary">{item.title}</div>
              <div className="headline three">${item.price}</div>
            </div>

            <div className="addButton">
              <Icon icon="Plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
