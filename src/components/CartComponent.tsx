import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../ThemeManager";
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
  const cartContextRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useWindowDimensions();
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
  const checkContextClose = (e: any) => {
    if (cartContextRef.current) {
      if (!cartContextRef.current.contains(e.target)) {
        setOpenContext(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("click", checkContextClose);
    return () => {
      window.removeEventListener("click", checkContextClose);
    };
  }, []);
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
        <h4>{cartNum ?? ""}</h4>
        <Icon icon="Cart" />
      </div>
      {showCart && (
        <div className="cartDropdown">
          <div className="cartHeader flexSB">
            <h2 className="text-headline">My Cart</h2>
            
            <div className="flex noWrap">
              {dimensions.isMobile && (
                <div
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                >
                  <Icon icon="Close" fontSize={24} />
                </div>
              )}
              <div
                className="context"
                ref={cartContextRef}
                onClick={() => setOpenContext(!openContext)}
              >
                <Icon icon="Context" />
              </div>
              {openContext && (
                <div className="contextMenu">
                  {contextOptions.map((item) => {
                    return (
                      <div
                        key={`context-option-${item.label}`}
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
          </div>
          <div className="cartChildren">
            {props.cartItems.length > 0 ? (
              props.cartItems.map((item, i) => {
                return (
                  <div key={`cart=items-${item.title}`} className="cartItem">
                    <div className="rightPositioner">
                      <div className="delete" onClick={() => deleteItem(item)}>
                        <Icon icon="Delete" />
                      </div>
                    </div>
                    <img alt={item.title} src={item.img} />
                    <h4>{item.title}</h4>
                  </div>
                );
              })
            ) : (
              <div className="center">
                <Icon icon="NoItems" fontSize={80} />
                <h4>No items in cart</h4>
              </div>
            )}
          </div>
          <div className="footer">
            <button className="button success" style={{ height: 54 }}>
              Checkout
            </button>
            <h3 className="text-sub-headline">${cartTotal}</h3>
          </div>
        </div>
      )}
    </>
  );
};
export default CartComponent;
