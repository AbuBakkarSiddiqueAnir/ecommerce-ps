import Logo from "@/assets/Logo";
import Filter from "../filter";
import Button from "../ui/button";
import User from "@/assets/User";
import Heart from "@/assets/Heart";
import Cart from "@/assets/Cart";
import Headphone from "@/assets/headphone";

export default function HeaderTop({ options }) {
  return (
    <header className="px-[4rem] py-[1.4rem] bg-green-main flex justify-between items-center text-white">
      <div className="flex items-center gap-x-10">
        <Logo />
        <Filter options={options} />
      </div>
      <div className="flex items-center gap-x-7">
        <div className="flex flex-col">
          <p className="text-[9px]">Call Us Now</p>
          <div className="flex">
            <Headphone />
            <span className="text-[13px]">+011 5827918</span>
          </div>
          <Button className={"bg-transparent p-0 text-[13px] text-left"}>
            SignIn
          </Button>
        </div>
        <div className="flex gap-x-6">
          <Button className={"bg-transparent p-0"}>
            <User />
          </Button>
          <Button className={"bg-transparent p-0"}>
            <Heart />
          </Button>
          <Button className={"bg-transparent p-0 relative flex gap-1"}>
            <>
              <Cart />
              <span className="absolute -top-4 left-2 text-[#FDDE3B]">3</span>
              <span className="text-[15px] leading-5 font-normal">Cart</span>
            </>
          </Button>
        </div>
      </div>
    </header>
  );
}
