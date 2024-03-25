"use client";

import products from "@/data/data";
import { getCapitalizeFirstLetter } from "@/utils/app";
import { usePathname, useRouter } from "next/navigation";

const CategorySideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategory = (category) => {
    if (category === "all") {
      router.push(`/category/all`);
    } else {
      router.push(`/category/${category}`);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              pathname === `/category/${category ? category : "all"}`
                ? "active"
                : ""
            }`}
            value={category}
            onClick={() => handleCategory(category)}
          >
            {getCapitalizeFirstLetter(category)}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategorySideBar;
