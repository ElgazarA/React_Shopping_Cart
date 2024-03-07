import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../css/Products/Products.css"
function Products({products , addToCart}) {
    // console.log(products);
  return (
    <>
        <div className="prods-wrapper">
        <Container>
        <Row className='g-5'>
            {products.map(prod=>(
                        <Col key={prod.id} s={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={prod.imageUrl} style={{"height": "250px"}} />
                            <Card.Body>
                              <Card.Title>{prod.title}</Card.Title>
                              <Card.Text>
                                {prod.desc}  
                              </Card.Text>
                              <p className='bg-info text-warning ps-2 fw-medium'>{prod.price}$</p>
                              <Button variant="primary" onClick={()=>addToCart(prod)}>add to cart</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                  ))}
        </Row>
        </Container>
        </div>
    </>
  )
}

export default Products
