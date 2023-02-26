import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  removeProduct,
} from "../../slices/productsSlice";
import ProductsContent from "./ProductsContent";
import ProductsNavbar from "./ProductsNavbar";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleProductDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(removeProduct(id));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="row g-4">
      <ProductsNavbar />
      <ProductsContent
        products={products}
        handleProductDelete={handleProductDelete}
      />
    </div>
  );
};

export default Products;
