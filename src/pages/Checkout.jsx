import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import emailjs from '@emailjs/browser'
import { cartActions } from '../store/shopping-cart/cartSlice'
import "../styles/checkout.css";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  console.log(enterName, enterEmail, enterNumber, enterCountry, enterCity, postalCode)

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const totalAmount = cartTotalAmount;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if(totalAmount == 0) {
      alert('You must to add something to a cart')
    } else if (totalAmount) {
      emailjs.sendForm('service_osloz16', 'template_3cbixpr', e.target, 'PhgvgsCyJAJxrTpJK')
      alert('Your order is successfully arrived');
      setTimeout(() => {
        dispatch(cartActions.deleteItems())
      }, 500)
    }
  };

  const clearCart = () => {

  }

  return (
      <Helmet title="Checkout">
        <CommonSection title="Checkout" />
        <section>
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h6 className="mb-4">Shipping Address</h6>
                <form className="checkout__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name='name_form'
                        required
                        onChange={(e) => setEnterName(e.target.value)}
                    />
                  </div>

                  <div className="form__group">
                    <input
                        type="email"
                        name='email_form'
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEnterEmail(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                        type="number"
                        placeholder="Phone number"
                        name='phone_form'
                        required
                        onChange={(e) => setEnterNumber(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                        type="text"
                        placeholder="Country"
                        name='country_form'
                        required
                        onChange={(e) => setEnterCountry(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                        type="text"
                        placeholder="City"
                        name='city_form'
                        required
                        onChange={(e) => setEnterCity(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                        type="number"
                        name='postal_form'
                        placeholder="Postal code"
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                        type="number"
                        name='sum_form'
                        placeholder={totalAmount}
                        value={totalAmount}
                        required
                        onChange={totalAmount}
                    />
                  </div>
                  <button onClick={clearCart} type="submit" className="addTOCart__btn">
                    Payment
                  </button>
                </form>
              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>${cartTotalAmount}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>${totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Checkout;