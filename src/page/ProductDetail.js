import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hanail1125/jsonserver-shoppingmall/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log('data => ', data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container style={{marginTop: 20}}>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="이미지" width={420} />
        </Col>
        <Col className='product-info'>
          <div>
            <div className='pn'>{product?.new === true ? '신제품' : null}</div>
            <div className='pt'>{product?.title}</div>
            <div className='pp'>₩{product?.price}</div>
            <div className='pc'>{product?.choice === true ? 'Conscious choice' : null}</div>
            <Form.Select aria-label="Default select example" className='form-select'>
              <option>사이즈 선택</option>
              <option value="1">L</option>
              <option value="2">M</option>
              <option value="3">S</option>
            </Form.Select>
          </div>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
