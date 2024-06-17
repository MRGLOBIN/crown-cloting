import { useContext } from "react";
import shoppingBag from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconImg,
  CartItemCount,
  CartIconContainer,
} from "./cartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsOpen, cartCount } = useContext(CartContext);

  const toggleisCartOpen = () => {
    setIsOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <CartIconImg src={shoppingBag} alt="CartIcon" className="shopping-icon" />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
