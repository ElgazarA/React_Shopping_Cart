import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/Checkoutform/Checkout.css";
import Input from "../InputComponent/Input";

function Checkout({ setShowForm, submitOrder, handelChange }) {
  return (
    <div className="checkout-form bg-dark">
      <span className="exit" onClick={() => setShowForm(false)}>
        x
      </span>

      <Form onSubmit={submitOrder} className="ps-4 pe-4">
        <Input
          label="Name"
          placeholder="enter name"
          name="Name"
          onChange={handelChange}
        />
        <Input
          label="Email"
          name="Email"
          placeholder="enter email"
          onChange={handelChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
