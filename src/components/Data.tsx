import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/data/apiSlice";

export function Data() {
  const {
    data: allProductsData,
    isError,
    isLoading,
  } = useGetAllProductsQuery("*");

  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);

  if (isLoading) return <h1> Loading...</h1>;

  if (isError) return <span style={{ color: "red" }}></span>;

  return (
    <>
      <ul>
        {allProductsData.products.map((product: any, index: number) => (
          <li key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </>
    // <>
    //   {!isError ? (
    //     <ul>
    //       {allProductsData.products.map((product: any, index: number) => (
    //         <li key={index}>{product}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Database is not available</p>
    //   )}
    // </>
  );
}
