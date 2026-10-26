
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Commet } from 'react-loading-indicators';
import useFetch from './custom-hook/useFetch';

const ProductList = () => {
  const {
    data: products,
    error,
    loading: isLoading
  } = useFetch('http://localhost:4000/products');

  if (isLoading) {
    return (
      <div>
        <center>
          <Commet
            color="#a9aaba"
            size="medium"
            text="Loading"
            textColor="#6c729f"
          />
        </center>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(products)) {
    return <p>Invalid product data received.</p>;
  }

  return (
    <div>
      <h1>Product List</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <section className="products">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: '18rem' }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ width: '9rem', height: '12rem', objectFit: 'contain' }}
                />
              </center>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <Card.Text
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                  }}
                >
                  ${product.price}
                </Card.Text>

                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
};

export default ProductList;