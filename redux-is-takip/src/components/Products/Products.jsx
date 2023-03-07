import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromDb, fetchProductsFromDb } from "../api/api";
import ProductsContent from "./ProductsContent";
import ProductsNavbar from "./ProductsNavbar";

const Products = () => {
  const {products} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(products)
  const handleProductDelete = (id) => {
    dispatch(deleteProductFromDb(id));
  };

  useEffect(() => {
    dispatch(fetchProductsFromDb());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-2 p-2">
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
