import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import {Col, Container, Row} from 'react-bootstrap';
import {useSearchParams} from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();   //👈 URL의 쿼리를 읽어오는 React-Hook.

  const getproducts = async () => {
    let searchQuery = query.get('q') || '';
    const url = `https://my-json-server.typicode.com/hanail1125/jsonserver-shoppingmall/products?q=${searchQuery}`;
    // const url = `http://localhost:5000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    setProductList(data);
  };

  useEffect(() => {
    getproducts();
  }, [query]);   //👈 useEffect()에서 query 값의 변화를 감지. => 생략하면 검색불가.

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, idx) => (
            <Col lg={3} key={idx}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
