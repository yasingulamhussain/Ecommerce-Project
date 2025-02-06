
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, ImageContainer, Image, PropertyText, Quantity, Arrow, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <PropertyText> {name} </PropertyText>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <PropertyText>{quantity}</PropertyText>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <PropertyText> {price}</PropertyText>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
