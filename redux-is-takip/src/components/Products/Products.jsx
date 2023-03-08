import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsFromFirebase } from "../../firebase/Config";
import { resetProductData, setProductData } from "../../slices/productsSlice";
import ProductModal from "../modals/ProductModal";
import ProductsContent from "./ProductsContent";

const Products = () => {
  const { products, productDetail } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = (selectedData) => {
    if (selectedData.id) {
      dispatch(setProductData(selectedData));
    }
    setIsOpen(true);
  };
  const handleModalClose = () => {
    dispatch(resetProductData());
    setIsOpen(false);
  };

  const handleProductDelete = async (id) => {
    await deleteProductsFromFirebase(id);
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <ProductModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={productDetail}
        handleModalClose={handleModalClose}
      />
      <h4 className="text-blue-400">Ürünler</h4>
      <div className="mb-3">
        <button
          onClick={handleModalOpen}
          className="text-blue-700 bg-blue-200 p-2 rounded-lg px-4 ease-in-out duration-500 hover:text-blue-50 hover:bg-blue-600"
        >
          Yeni Ürün
        </button>
      </div>
      {products?.length > 0 ? (
        <ProductsContent
          products={products}
          handleProductDelete={handleProductDelete}
          handleModalOpen={handleModalOpen}
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
