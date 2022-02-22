import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getRandomKey } from "../pages/ThemeSwitcher/SalesTheme/SalesTheme";
import Icon from "./Icon/Icon";
interface iCart {
  cartItems: any[];
  setCartItems: Dispatch<SetStateAction<any[]>>;
}
const CartComponent = (props: iCart) => {
  const [cartNum, setCartNum] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartTotal, setCartTotal] = useState<string>("");
  const [openContext, setOpenContext] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCartNum(props.cartItems.length);
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 300);
    }, 1170);
    return () => clearTimeout(timeout);
  }, [props.cartItems]);
  useEffect(() => {
    let total = 0;
    if (props.cartItems.length > 0) {
      props.cartItems.forEach((item) => {
        total += item.price ?? 0;
      });
    }
    var re = new RegExp("^-?\\d+(?:.\\d{0," + 2 + "})?");
    let regexed = total.toString().match(re);
    if (regexed) {
      let price = regexed[0];
      const afterDecimal = price.split(".");
      if (afterDecimal[1]) {
        if (afterDecimal[1].length === 1) {
          price = price.toString() + "0";
        }
      }
      setCartTotal(price);
    } else {
      setCartTotal(total.toString());
    }
  }, [props.cartItems]);
  const deleteAll = () => {
    props.setCartItems([]);
  };
  const deleteItem = (item: any) => {
    props.cartItems.forEach((cartItem, i) => {
      if (item.title === cartItem.title) {
        props.cartItems.splice(i, 1);
        props.setCartItems([...props.cartItems]);
        return;
      }
    });
  };
  const contextOptions = [
    { label: "Move all to Wishlist", action: () => {} },
    { label: "Empty Cart", action: deleteAll },
  ];

  return (
    <>
      <div
        id="cart"
        className={"cart " + (animate ? " pop" : "")}
        onClick={() => setShowCart(!showCart)}
      >
        <span className="headline four">{cartNum ?? ""}</span>
        <Icon icon="Cart" />
      </div>
      {showCart && (
        <div className="cartDropdown">
          <div className="cartHeader">
            <div className="rightPositioner">
              <div
                className="context"
                onClick={() => setOpenContext(!openContext)}
              >
                <Icon icon="Context" />
              </div>
              {openContext && (
                <div className="contextMenu">
                  {contextOptions.map((item) => {
                    return (
                      <div
                        className="contextMenuItem headline six"
                        onClick={() => {
                          setOpenContext(false);
                          item.action();
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="headline two textTitle">My Cart</div>
          </div>
          <div className="cartChildren">
            {props.cartItems.length > 0 ? (
              props.cartItems.map((item, i) => {
                return (
                  <div key={getRandomKey()} className="cartItem">
                    <div className="rightPositioner">
                      <div className="delete" onClick={() => deleteItem(item)}>
                        <Icon icon="Delete" />
                      </div>
                    </div>
                    <img src={item.img} />
                    <div className="headline four">{item.title}</div>
                  </div>
                );
              })
            ) : (
              <div className="center">
                <Icon icon="NoItems" fontSize={80} />
                <div className="headline four">No items in cart</div>
              </div>
            )}
          </div>
          <div className="footer">
            <button className="button success" style={{ height: 54 }}>
              Checkout
            </button>
            <div className="headline three textPrimary">${cartTotal}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default CartComponent;
