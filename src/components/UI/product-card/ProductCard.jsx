import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
    const { idCategory, strCategory, strCategoryThumb, price = Math.floor(Math.random() * 1000) } = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                idCategory,
                strCategory,
                strCategoryThumb,
                price,
            })
        );
    };

    return (
        <div className="product__item">
            <div className="product__img">
                <img src={strCategoryThumb} alt="product-img" className="w-50" />
            </div>

            <div className="product__content">
                <h5>
                    <Link>{strCategory}</Link>
                </h5>
                <div className=" d-flex align-items-center justify-content-between ">
                    <span className="product__price">${price}</span>
                    <button className="addTOCart__btn" onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;