import React from 'react';
import './ProductShowcase.css';
import organic from '../../assets/organic.png';
import fresh from '../../assets/fresh.png';
import arrow_icon_w from '../../assets/ICON/arrow_circle_right_24dp_FFFFFF_FILL1_wght200_GRAD0_opsz24.png'


const ProductCard = ({ title, imageSrc, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <div className="image-container">
      <img
        src={imageSrc}
        alt={title}
        className="product-image"
      />
    </div>
    <div className="overlay">
      <div className="content">
        <button className="learn-more">
          <p>Learn more</p>
          <img src={arrow_icon_w} alt="" />
        </button>
      </div>
    </div>
  </div>
);

const ProductShowcase = () => {
  const products = [
    {
      title: "Organic products",
      image: organic,
      onClick: () => console.log("Organic products clicked")
    },
    {
      title: "Fresh vegetables",
      image: fresh,
      onClick: () => console.log("Fresh vegetables clicked")
    }
  ];

  return (
    <div className="container">
      <div className="grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            imageSrc={product.image}
            onClick={product.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;