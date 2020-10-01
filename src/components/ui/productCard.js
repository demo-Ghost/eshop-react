import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, description, price } = product;

  return (
    <div className="card col-12 col-sm-6 col-md-3 flex-wrap px-0 m-2">
      <img
        className="card-img-top img-fluid"
        src={image}
        alt="Card image cap"
      />
      <div className="card-body p-2">
        <span className="card-title font-weight-bold">{name}</span>
        <span className="text-primary font-weight-bold float-right">
          {price}
        </span>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
