import Menu from "@/assets/Menu";
import Button from "../ui/button";
import Link from "next/link";
import Facebook from "@/assets/Facebook";
import Twitter from "@/assets/twitter";
import LinkedIn from "@/assets/linkedin";
import Instagram from "@/assets/insta";

export default function Navbar() {
  return (
    <nav className="px-[4rem] py-[0.8rem] bg-green-heavy text-white flex shadow-nav-bar">
      <Button className="p-0 bg-transparent flex gap-x-3 items-center font-normal">
        <Menu />
        <span className="text-[17px] font-normal">Browse By Category</span>
      </Button>
      <menu className="flex gap-x-[2.25rem] items-center ml-12">
        <Link className="text-[13px] font-normal " href={"/"}>
          Home
        </Link>
        <Link className="text-[13px] font-normal " href={"/"}>
          Easy Monthly Installments
        </Link>
        <Link className="text-[13px] font-normal " href={"/"}>
          Shop by Brands
        </Link>
        <Link className="text-[13px] font-normal " href={"/"}>
          Become a Vendor
        </Link>
      </menu>
      <div className="flex-1  gap-x-6 flex justify-end">
        <Button link="/social" className="bg-transparent p-0">
          <Facebook />
        </Button>
        <Button link="/social" className="bg-transparent p-0">
          <Twitter />
        </Button>
        <Button link="/social" className="bg-transparent p-0">
          <LinkedIn />
        </Button>
        <Button link="/social" className="bg-transparent p-0">
          <Instagram />
        </Button>
      </div>
    </nav>
  );
}
