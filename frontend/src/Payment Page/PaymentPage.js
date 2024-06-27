import React, { useState } from "react";
import "./PaymentPage.css";
import CreditCardInput from "react-credit-card-input";
import Button from "../Button/Button";
function PaymentPage() {
  const [upiOption, setUpiOption] = useState(false);
  const [cardOption, setCardOption] = useState(true);

  const upiPayment = () => {
    setUpiOption(true);
    setCardOption(false);
  };
  const CardPayment = () => {
    setUpiOption(false);
    setCardOption(true);
  };
  return (
    <div className="paymentpage">
      <div className="paymentpage_left">
        <h6>Pay on delivery</h6>
        <span onClick={upiPayment}>UPI</span>
        <span onClick={CardPayment}>Cards</span>
      </div>
      {cardOption && (
        <div className="paymentpage_right">
          <h6>Credit & Debit Cards</h6>
          <p>Add New Card For Payment</p>
          <div className="paymentpage_right_cardNo">
            <p>Card Number</p>
            <input type="text" />
          </div>
          <div className="paymentpage_right_expiry">
            <span>
              <p>Expiry Date (MM/YY) </p>
              <input type="text" />
            </span>
            <span>
              <p>CVV CODE</p>
              <input type="text" />
            </span>
          </div>
          <div className="paymentpage_right_holder">
            <p>Holder Name</p>
            <input type="text" />
          </div>
          <div className="paymentpage_right_checkbox">
            <input type="checkbox" />
            <p>
              Your card details will be saved securely for future transactions,
              based on the industry standards.
            </p>
          </div>
          <Button bg="#6C98FF" color="#fff">
            Make Payment
          </Button>
        </div>
      )}
      {upiOption && (
        <div className="paymentpage_right">
          <h6>Transfer money from your bank account using your UPI app</h6>

          <div className="paymentpage_right_upi">
            <p>Pay via new UPI ID</p>
            <input type="text" />
            <p>The UPI ID is in the format of name/phone number@bankname</p>
          </div>
          <div className="paymentpage_right_checkbox">
            <input type="checkbox" />
            <p>
              Your card details will be saved securely for future transactions,
              based on the industry standards.
            </p>
          </div>
          <Button bg="#6C98FF" color="#fff">
            Make Payment
          </Button>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
