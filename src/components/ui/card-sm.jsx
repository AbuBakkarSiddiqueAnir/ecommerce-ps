import Button from "./button";

export default function CardSm({ product }) {
  console.log(product);
  return (
    <article className="p-2 border max-w-[220px] border-[#00000021]">
      <div>
        <span className="truncate text-[15px] font-normal">
          {product.category}
        </span>
        <h6 className="truncate text-[18px] font-normal text-[#034E53] mb-3">
          {product.title}
        </h6>

        <figure className="h-36 overflow-hidden mx-auto">
          <img
            className="mx-auto object-fill w-auto h-full"
            src={product.image}
          />
        </figure>

        <div className="my-3">
          <span className="text-[#0AAEB9] text-[18px]">RS {product.price}</span>
        </div>
        <Button className="w-full py-2 bg-[#15ADB7] hover:bg-[#2a7b81] duration-150 ">
          Add to cart
        </Button>
      </div>
    </article>
  );
}
