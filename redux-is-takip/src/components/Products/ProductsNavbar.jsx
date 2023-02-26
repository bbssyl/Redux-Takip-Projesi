import React from "react";

const ProductsNavbar = () => {
  return (
    <div className="p-4">
      <div className="d-flex gap-2 justify-content-center p-4 border-bottom">
        <button className="btn btn-primary bg-gradient rounded-pill">
          Yeni Ürün
        </button>
        <button className="btn btn-warning bg-gradient rounded-pill">
          Ürün Listesi
        </button>
      </div>
    </div>
  );
};

export default ProductsNavbar;
