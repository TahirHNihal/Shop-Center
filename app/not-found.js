import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      {/* <div className="h-[550px] w-[550px] flex flex-col justify-center items-center bg-cover bg-[url('/assets/404-Notfound.gif')]">
      </div> */}

      <h1 className="text-9xl font-semibold">404</h1>
      <Image
        src="/assets/404-Notfound.gif"
        width={650}
        height={650}
        alt="404"
        className="mb-[-50px]"
      />
      <h3 className="text-5xl mb-4">Page not found</h3>
      <Link href="/" className="bg-green-600 text-white rounded px-4 py-2">
        Return Home
      </Link>
    </div>
  );
}
