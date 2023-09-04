import React from 'react';
import {useNavigate} from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item?.id}`);
  };

  return (
    <div className='productCard' onClick={showDetail}>
      <img src={item?.img} width='100%' alt='이미지' />
      <div>{item?.choice === true ? 'Conscious choice' : null}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? '신제품' : null}</div>
    </div>
  );
};

export default ProductCard;
