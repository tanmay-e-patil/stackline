import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./util/store";

import SalesTable from "./components/SalesTable";
import NavBar from "./components/NavBar";
import SalesChart from "./components/SalesChart";
import ProductDetails from "./components/ProductDetails";
import { fetchProductData } from "./util/productSlice";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (product.loading) return <p>Loading...</p>;
  if (product.error) return <p>Error: {product.error}</p>;


  return (
    <div>
      <NavBar />
      <div className="flex-row min-h-screen flex w-full bg-gray-50 gap-4 p-4">
        <ProductDetails product={product.data} />
        <div className="w-3/4">
          <SalesChart product={product.data} />
          <SalesTable sales={product.data?.sales || []} />
        </div>
      </div>
    </div>
  );
}
