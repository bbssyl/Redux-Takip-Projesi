import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const ProductsContent = ({ products, handleProductDelete }) => {
  return (
    <>
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {products?.map((product) => {
          return (
            <div className="w-full" key={product.id}>
              <div className="shadow-md  p-4 h-full rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-blue-400">
                      {product.name}
                    </span>
                    <div className="flex gap-2 items-center">
                      <small className="font-ligth italic text-gray-400">
                        {product.type}
                      </small>
                      <button className="text-sm text-gray-400 hover:bg-gray-500 hover:text-gray-50 p-1 rounded-full ease-in-out duration-500">
                        <AiFillEdit />
                      </button>

                      <button
                        onClick={() => handleProductDelete(product.id)}
                        className="text-sm text-red-400 hover:bg-red-500 hover:text-red-50 p-1 rounded-full ease-in-out duration-500"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row flex-wrap items-center justify-between">
                        <div className="flex flex-col gap-2">
                          <div>
                            <span className="font-bold">Marka: </span>
                            <span className="">{product.brand}</span>
                          </div>
                          <div>
                            <span className="font-bold">Model: </span>
                            <span className="">{product.model}</span>
                          </div>
                        </div>
                        <div>
                          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-blue-50 rounded-3xl p-2">
                            ₺{product.price}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p>
                          <span className="font-bold">Açıklama: </span>
                          <span className="text-gray-500 italic font-light">
                            {product.info}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsContent;
