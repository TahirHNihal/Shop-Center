import { getOriginalPrice } from "@/utils/app";
import Link from "next/link";

const Product = ({ product }) => {

  const originalPrice = getOriginalPrice(
    product?.price,
    product?.discountPercentage
  );
  
  return (
    <>
      <div>
        <Link className="text-base font-bold" href={`/products/${product?.id}`}>
          <div
            className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
            style={{ backgroundImage: `url(${product?.thumbnail})` }}
          ></div>
        </Link>
        <h2 className="text-sm lg:text-base mt-2">
          <Link
            className="text-base font-bold"
            href={`/products/${product?.id}`}
          >
            {product?.title}
          </Link>
          <span className="text-[#919090]">
            <Link href={`/category/${product?.category}`}>
              ({product?.category})
            </Link>
          </span>
        </h2>
        <p className="text-[#919090] text-sm ">{product?.description}</p>

        <p className="text-rose-600 text-sm mt-4">
          <span className="text-[#919090] line-through">${originalPrice}</span>{" "}
          ${product?.price}
        </p>
      </div>
    </>
  );
};

export default Product;
