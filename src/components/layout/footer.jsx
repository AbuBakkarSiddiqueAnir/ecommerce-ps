import Facebook from "@/assets/Facebook";
import Logo from "@/assets/Logo";
import Instagram from "@/assets/insta";
import LinkedIn from "@/assets/linkedin";
import Twitter from "@/assets/twitter";

export default function Footer() {
  return (
    <footer className="w-full pl-48 pr-10  mx-auto py-14 bg-[#393939]">
      <div className="w-full ">
        <div className="w-full grid grid-cols-4">
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
              <li className="text-b-2 font-normal "> Installments</li>
              <li className="text-b-2 font-normal "> Electronics</li>
              <li className="text-b-2 font-normal "> Grocery</li>
              <li className="text-b-2 font-normal "> Health & Beauty</li>
              <li className="text-b-2 font-normal "> Home Appliances</li>
              <li className="text-b-2 font-normal "> Mobile Accessories</li>
            </ul>
          </div>
          <div>
            <h6 className="text-[#00CAD7] text-[20px] mb-[21px]">
              Information
            </h6>
            <ul className="flex-col text-white flex gap-3">
              <li className="text-b-2 font-normal "> About Us</li>
              <li className="text-b-2 font-normal "> Contact Us</li>
              <li className="text-b-2 font-normal "> FAQs</li>
              <li className="text-b-2 font-normal "> Shipping & Return</li>
              <li className="text-b-2 font-normal "> Privacy policy</li>
              <li className="text-b-2 font-normal "> Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h6 className="text-[#00CAD7] text-[20px] mb-[21px]">
              Customer Care
            </h6>
            <ul className="flex-col text-white flex gap-3">
              <li className="text-b-2 font-normal ">My Account</li>
              <li className="text-b-2 font-normal "> Track Your Order</li>
              <li className="text-b-2 font-normal "> Recently Viewed</li>
              <li className="text-b-2 font-normal "> Wishlist</li>
              <li className="text-b-2 font-normal "> Compare</li>
              <li className="text-b-2 font-normal "> Become a Vendor</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
