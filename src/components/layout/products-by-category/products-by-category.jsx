"use client";
import { useEffect, useState } from "react";
import Header from "./header";
import {
  productsApi,
  useGetAllProductsByCategoryQuery,
} from "@/store/apis/productsApi";
import { useDispatch } from "react-redux";
import SelectCard from "./Card";

export default function ProductsByCategory({ categories }) {
  const {
    isLoading,
    data: products,
    isError,
    isSuccess,
  } = useGetAllProductsByCategoryQuery("electronics");
  const [productsData, setProductsData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductsData(products);
  }, [isSuccess]);

  const handleSelectCategory = (category) => setCurrentCategory(category);

  useEffect(() => {
    (async () => {
      setProductsData([]);
      const response = await dispatch(
        productsApi.endpoints.getAllProductsByCategory.initiate(
          currentCategory,
          { subscribe: true, forceRefetch: true }
        )
      );
      setProductsData(response.data);
    })();
  }, [currentCategory]);

  if (isError) return <div>error</div>;
  return (
    <section className="p-16">
      <Header
        handleSelectCategory={handleSelectCategory}
        currentCategory={currentCategory}
        categories={categories}
      />
      <div className="grid product-template-cols  gap-4">
        {(isLoading || productsData.length < 1) && (
          <>
            {new Array(5).fill(null).map((_, index) => (
              <div
                className={`p-6 border ${
                  index === 2 ? "h-[48rem]" : "h-full"
                } animate-pulse bg-gray-200 item-${index + 1}`}
              ></div>
            ))}
          </>
        )}
        {productsData?.length > 0 &&
          productsData?.map((product, index) => {
            return <SelectCard index={index} product={product} />;
          })}
      </div>
    </section>
  );
}
