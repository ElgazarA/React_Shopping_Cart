import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import words from "./words";
import data from "./data.json";
import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Cart from "./components/Cart/Cart";
import { fetch_products } from "./store/reducers/productReducer";
import { Link } from "react-router-dom";
function App() {
  const [productsData, setProductsData] = useState(data);
  const [size, setSize] = useState();
  const [orderValue, setOrderValue] = useState();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart_items")) || []
  );
  const dispatch = useDispatch();

  const GlobalState = useSelector((state) => state);
  useEffect(() => {
    // dispatch(fetch_products());
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
  }, [cartItems]);
  const filter_by_size = (e) => {
    setSize(e.target.value);

    if (e.target.value == "All") {
      setProductsData(data);
    } else {
      let prodClone = productsData;
      let newProd = prodClone.filter(
        (p) => p.size.indexOf(e.target.value) != -1
      );
      setProductsData(newProd);
    }
  };
  const orderBy = (e) => {
    setOrderValue(e.target.value);
    // console.log(e.target.value);
    let prodClone = [...productsData];
    let newProd = prodClone.sort((a, b) => {
      switch (e.target.value) {
        case "Lower":
          return a.price - b.price;
        case "Higher":
          return b.price - a.price;
        default:
          return a.id < b.id ? 1 : -1;
      }
    });
    console.log(productsData);
    console.log(newProd);
    setProductsData(newProd);
  };
  console.log(GlobalState.login.isLogIn);
  // ---------------------
  const addToCart = (prod) => {
    console.log(prod);
    const cartItemsClone = [...cartItems];
    let itemInCart = false;
    cartItemsClone.forEach((item) => {
      if (item.id === prod.id) {
        item.qty++;
        itemInCart = true;
      }
    });
    if (!itemInCart) {
      cartItemsClone.push({ ...prod, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };
  // ----------------
  const removeFromCart = (prod) => {
    const cartItemsClone = [...cartItems];
    let newItems = cartItemsClone.filter((item) => item.id != prod.id);
    setCartItems(newItems);
  };
  //-------------------
  const scrollToCart = () => {
    window.scrollTo({
      top: document.getElementById("cart").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="layout">
      <Header />
      <Container fluid>
        <main className="row">
          <Row className="my-5">
            <Col lg={9} md={{ span: 12, offset: 0 }}>
              <Products
                className="col col-8"
                products={productsData}
                addToCart={addToCart}
              />
            </Col>
            <Col
              lg={3}
              md={{ span: 12, offset: 0 }}
              className="d-flex flex-column"
            >
              <Filter
                className="col col-4"
                filter_by_size={filter_by_size}
                sizeValue={size}
                orderBy={orderBy}
                orderValue={orderValue}
              />
                <button
                  className="btn btn-primary border-top border-warning border-3"
                  onClick={scrollToCart}
                >
                  Go to Cart
                </button>
                <Link  to="/login" className="btn btn-primary mt-3">
                      login
                  </Link>
              </Col>
          </Row>
            <Cart
              items={cartItems}
              itemsCount={cartItems.length}
              removeFromCart={removeFromCart}
            />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
