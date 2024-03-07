import React, { useState } from "react";
import "./LogIn.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {isLogIn} from "../../store/reducers/login"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  // const handleSubmit = (values) => {
  //   // Handle form submission here, e.g., call API to authenticate user
  //   console.log(values);
  // };

  function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const onSubmit = async (e) => {
      e.preventDefault();
      // console.log(data)
      const response = await fetch(
        "https://eco-api-one.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }

      );
      
      const result = await response.json();
      window.localStorage.setItem("token", result?.token);
      console.log(result);
      if (response.status === 200) {
        // If login successful, navigate to home page
        navigate('/');
        // dispatch();
      } else {
        // Handle unsuccessful login (e.g., show error message)
        prompt("Login failed");
      }
    };

    return (
      <MDBContainer className=" logIn_container">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Log In Now</h2>

                
                    <form onSubmit={onSubmit}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        id="form3"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form4"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <div className="d-flex justify-content-center mb-4">
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheckDefault"
                          label="Subscribe to our newsletter"
                        />
                      </div>
                      <MDBBtn className="w-100 mb-4" size="md" type="submit">
                        log in
                      </MDBBtn>
                      <span>Don't have an account ..</span>
                      <Link  to="/register" className="btn btn-secundary mt-3">register</Link>
             
                    </form>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              className="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    );
  }

  return <LogIn />;
};

export default Login;
