import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../../css/Cart/Cart.css"
import Checkout from "../Checkoutform/Checkout";

export default function Cart({ items, itemsCount, removeFromCart }) {
  const [showForm , setShowForm] = useState(false);
  const [formValue , setFormValue] = useState("");
  let totalPrice = items.length > 0 ? items.reduce((acc, item) => {return acc + item.price * item.qty;  }, 0) :0;

  const submitOrder=(e)=>{
    e.preventDefault();
    const order = {
      name: formValue.Name,
      email: formValue.Email,
    }
    console.log(order)
    setShowForm(false)
  }
  const handelChange =(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormValue((prevState)=> ({...prevState, [e.target.name]:e.target.value}));
  }
  return (
    <section className="h-100 h-custom" id="cart" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">
                          {items.length > 0
                            ? `You have ${itemsCount} items in your cart`
                            : "cart is Empty"}
                        </p>
                      </div>
                    </div>

                    {items.map((item) => {
                      return (
                        <MDBCard className="mb-3" key={item.id}>
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={item.imageUrl}
                                    fluid
                                    className="rounded-3"
                                    style={{ width: "65px" }}
                                    alt="Shopping item"
                                  />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5">
                                    {item.title}
                                  </MDBTypography>
                                  <p className="small mb-0">{items.desc}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography
                                    tag="h5"
                                    className="fw-normal mb-0"
                                  >
                                    {item.qty}
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                    ${item.price}
                                  </MDBTypography>
                                </div>
                                <a
                                  href="#!"
                                  style={{ color: "#cecece" }}
                                  onClick={() => removeFromCart(item)}
                                >
                                  <MDBIcon fas icon="trash-alt" />
                                </a>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      );
                    })}
                  </MDBCol>
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <MDBTypography tag="h5" className="mb-0">
                          Card details
                        </MDBTypography>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">
                            ${totalPrice}
                         </p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total</p>
                          <p className="mb-2">${totalPrice>0? totalPrice-20:0}</p>
                        </div>

                        <MDBBtn color="info" block size="lg" onClick={()=>setShowForm(true)}>
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>

                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    {showForm && <Checkout setShowForm={setShowForm} submitOrder={submitOrder} handelChange={handelChange}/>}
      

    </section>
  );
}
