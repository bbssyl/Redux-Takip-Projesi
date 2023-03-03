import { useEffect } from "react";
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
    <div className="flex flex-col gap-2">
      <h4 className="text-blue-400">Ürünler</h4>
      <ProductsNavbar />
      {products?.length > 0 ? (
        <ProductsContent
          products={products}
          handleProductDelete={handleProductDelete}
        />
      ) : (
        <div className="text-green-700 bg-green-200 p-4 rounded-lg">
          Kayıtlı ürün bulunmamaktadır.
        </div>
      )}
    </div>
  );
};

export default Products;
