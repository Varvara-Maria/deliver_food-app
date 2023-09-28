import React from "react";
import { ListGroupItem } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { idCategory , strCategory , price = Math.floor(Math.random() * 1000), strCategoryThumb , quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
        cartActions.addItem({
          idCategory,
          strCategory,
          price,
          strCategoryThumb,
        })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(idCategory));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(idCategory));
  };

  return (
      <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2 mb-4">
          <img src={strCategoryThumb} alt="product-img" width='30%' />

          <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
              <h6 className="cart__product-title">{strCategory}</h6>
              <p className=" d-flex align-items-center gap-5 cart__product-price">
                {quantity}x <span>${totalPrice}</span>
              </p>
              <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
                <span className="quantity">{quantity}</span>
                <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
              </div>
            </div>

            <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
          </div>
        </div>
      </ListGroupItem>
  );
};

export default CartItem;