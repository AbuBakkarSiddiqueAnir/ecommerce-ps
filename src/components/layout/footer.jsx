import Facebook from "@/assets/Facebook";
import Logo from "@/assets/Logo";
import Instagram from "@/assets/insta";
import LinkedIn from "@/assets/linkedin";
import Twitter from "@/assets/twitter";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  p-10 lg:p-36    mx-auto py-14 bg-[#393939]">
      <div className="w-full ">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-b-2 tracking-tighter font-normal text-teal-light">
              Got questions? Call us 24/7!
            </p>
            <div className="my-[14px]">
              <span className="block text-[15px] text-white">
                {" "}
                03 111 666 144
              </span>
              <span className="block text-[15px] text-white">
                {" "}
                0317 1777015.
              </span>
            </div>
            <p className="text-b-2 tracking-tighter font-normal text-teal-light">
              Contact info
            </p>
            <span className="block text-[15px] text-white">
              info@winstore.pk
            </span>
            <div className="mt-4 flex gap-x-3 items-center">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
          <div className="">
            <h6 className="text-[#00CAD7] text-[20px] mb-[21px]">Trending</h6>
            <ul className="flex-col text-white flex gap-3">
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Installments </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Electronics </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Grocery </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Health & Beauty </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Home Appliances </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Mobile Accessories </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-[#00CAD7] text-[20px] mb-[21px]">
              Information
            </h6>
            <ul className="flex-col text-white flex gap-3">
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> About Us </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Contact Us </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> FAQs </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Shipping & Return </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Privacy policy </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Terms & Conditions </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-[#00CAD7] text-[20px] mb-[21px]">
              Customer Care
            </h6>
            <ul className="flex-col text-white flex gap-3">
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/">My Account </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Track Your Order </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Recently Viewed </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Wishlist </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Compare </Link>
              </li>
              <li className="text-b-2 font-normal ">
                {" "}
                <Link href="/"> Become a Vendor </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mt-10 items-center justify-start">
          <Image src={"/v1.svg"} width={97} height={55} />
          <Image src={"/v2.svg"} width={97} height={55} />
          <Image src={"/v3.svg"} width={97} height={55} />
          <Image src={"/v4.svg"} width={97} height={55} />
        </div>
      </div>
    </footer>
  );
}
