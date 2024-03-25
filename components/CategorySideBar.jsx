"use client";

import { usePathname, useRouter } from "next/navigation";

const CategorySideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategory = (e) => {
    let value = e.target.value;
    router.push(`/category/${value}`);
  };
  return (
    <>
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <button
          className={`hover:border-b border-black block h-6 box-border mt-4 ${
            pathname === "/category/all" ? "active" : ""
          }`}
          value={"all"}
          onClick={(e) => handleCategory(e)}
        >
          All
        </button>
        <button
          className={`hover:border-b border-black block h-6 box-border mt-4 ${
            pathname === "/category/smartphones" ? "active" : ""
          }`}
          value={"smartphones"}
          onClick={(e) => handleCategory(e)}
        >
          Smartphones
        </button>
        <button
          className={`hover:border-b border-black block h-6 box-border mt-4 ${
            pathname === "/category/laptops" ? "active" : ""
          }`}
          value={"laptops"}
          onClick={(e) => handleCategory(e)}
        >
          Laptops
        </button>
        <button
          className={`hover:border-b border-black block h-6 box-border mt-4 ${
            pathname === "/category/fragrances" ? "active" : ""
          }`}
          value={"fragrances"}
          onClick={(e) => handleCategory(e)}
        >
          Fragrances
        </button>
      </div>
    </>
  );
};

export default CategorySideBar;
