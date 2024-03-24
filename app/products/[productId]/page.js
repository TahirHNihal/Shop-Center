"use client";
import products from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = ({ params: { productId } }) => {
    
  const [imgUrl, setImgUrl] = useState("");

  productId = parseInt(productId, 10);
  const product = products.filter((product) => product.id === productId)[0];

  if (product?.length === 0) {
    return <div>Product not found</div>;
  }
  const handleProductImage = (imgUrl) => {
    setImgUrl(imgUrl.target.currentSrc);
    // console.log(imgUrl.target.currentSrc);
  };
  return (
    <>
      <main className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                width={1080}
                height={1080}
                src={`${imgUrl ? imgUrl : product?.thumbnail}`}
                className="w-[400px] h-[500px] mx-auto object-cover"
                alt="Thumbnail"
              />

              <div className="flex gap-4 mt-4">
                {product?.images &&
                  product?.images.map((imgUrl) => (
                    <>
                      <img
                        src={`${imgUrl}`}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                        alt="product image"
                        onClick={(imgUrl) => handleProductImage(imgUrl)}
                      />
                    </>
                  ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {product?.title}
              </h1>
              <span className="text-[#919090] my-3">
                <Link href={`/category/${product?.category}`}>
                  {product?.category}
                </Link>
              </span>
              <div className="mt-3 flex items-center justify-start gap-1">
                {product?.rating}
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt="star icon"
                />
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <p className="my-3">
                  {/* <span className="text-rose-600 opacity-60 line-through">
                    $205.00
                  </span> */}
                  <span className="font-bold text-2xl">${product?.price}</span>
                </p>
              </div>
              <div>
                <p className="leading-7">{product?.description}</p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - $195
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;