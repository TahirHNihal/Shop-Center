"use client";

import Product from "@/components/Product";
import products from "@/data/data";
import { useEffect, useState } from "react";

const page = ({ params: { categoryName } }) => {
  const [catProducts, setCatProducts] = useState(products);

  useEffect(() => {
    if (categoryName) {
      if (categoryName === "all") {
        setCatProducts(products);
      } else {
        const newCatProducts = catProducts.filter(
          (product) => product.category === categoryName
        );
        setCatProducts(newCatProducts);
      }
    }
  }, [categoryName]);
  return (
    <>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        {catProducts &&
          catProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default page;
