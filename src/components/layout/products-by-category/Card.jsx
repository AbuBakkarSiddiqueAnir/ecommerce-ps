const SelectCard = ({ product, index }) => {
  let CardComponent;

  if (index === 2) {
    CardComponent = Card.variant2;
  } else if (index === 0 || index === 3) {
    CardComponent = Card;
  } else {
    CardComponent = Card.variant1;
  }

  return <CardComponent product={product} index={index} />;
};

const Card = ({ product, index }) => {
  return (
    <div key={product?.id} className={`p-6 border  item-${index + 1}`}>
      <div className="flex">
        <div className=" ">
          <h6 className="text-black text-xl leading-10 mb-2">
            {product?.title}
          </h6>
          <span className="block text-[27px] text-[#0AAEB9]">
            Rs.{product?.price}
          </span>
          <span className="block text-[18px] mb-2 ">
            {" "}
            Rs. <span className="line-through">{product?.price}</span>
          </span>
        </div>
        <div className="text-[36px] px-6 leading-[44px] text-center">
          <span className="text-[#0AAEB9]">Special</span> <br /> Offer
        </div>
      </div>
      <div className="flex mt-4">
        <div className="bg-gradient-to-r max-w-min from-blue-400 to-green-500 px-10 py-4 text-2xl font-normal flex justify-center items-center">
          Save <br /> 10%
        </div>
        <figure className="h-32 overflow-hidden mx-auto">
          <img
            className="mx-auto object-fill w-auto h-full"
            src={product?.image}
          />
        </figure>
      </div>
    </div>
  );
};

Card.variant1 = ({ product, index }) => {
  return (
    <div key={product?.id} className={`p-6 border  item-${index + 1}`}>
      <div className="flex">
        <div className=" max-w-[70%] ">
          <div className="text-[36px] leading-[44px] text-left">
            <span className="text-red-800">Special</span> <br /> Offer
          </div>
          <h6 className="text-black text-xl leading-10 mb-2">
            {product?.title}
          </h6>
          <span className="block text-[27px] text-red-800">
            Rs.{product?.price}
          </span>
          <span className="block text-[18px] mb-2 ">
            {" "}
            Rs. <span className="line-through">{product?.price}</span>
          </span>
        </div>
        <div className="flex justify-end flex-1">
          <div className="bg-gradient-to-r  from-[#EE9CA7] to-[#FFDDE1] rounded-full w-[8rem] h-[8rem] aspect-square text-2xl font-normal flex justify-center items-center">
            Save <br /> 10%
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/2">
          <span className="block text-[18px] mb-2 text-[#0AAEB9]">
            {" "}
            Rs. <span className="">Already Sold: 6 </span>
          </span>
          <span className="block text-[18px] text-[#0AAEB9]">
            {" "}
            Rs. <span className="">Available: 16 </span>
          </span>
        </div>
        <figure className="h-32 overflow-hidden mx-auto">
          <img
            className="mx-auto object-fill w-auto h-full"
            src={product?.image}
          />
        </figure>
      </div>
    </div>
  );
};

Card.variant2 = ({ product, index }) => {
  return (
    <div
      key={product?.id}
      className={`p-6 border flex flex-col  item-${index + 1}`}
    >
      <div className="h-4/5 relative">
        <figure className="h-full pt-16 flex flex-col justify-center -z-30 bg-transparent overflow-hidden mx-auto">
          <img
            className="mx-auto object-fill w-auto max-h-[24rem]"
            src={product?.image}
          />
        </figure>
        <div className="absolute left-2 top-2">
          <div className="text-[36px] px-6 leading-[44px] z-40 text-left">
            <span className="text-red-800">Special</span> <br /> Offer
          </div>
        </div>
        <div className="absolute right-2 top-2">
          <div className="bg-gradient-to-r max-w-min from-[#FF512F] to-[#DD2476] rounded-full p-12 text-4xl font-normal flex justify-center items-center">
            Save <br /> 10%
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h6 className="text-black text-xl leading-8 mb-2">{product?.title}</h6>

        <span className="block text-[27px] text-red-800">
          Rs.{product?.price}
        </span>
        <span className="block text-[18px] mb-1 ">
          {" "}
          Rs. <span className="line-through">{product?.price}</span>
        </span>
        <div className="flex gap-5">
          <span className="block text-[18px] mb-1 text-[#0AAEB9]">
            {" "}
            Rs. <span className="">Already Sold: 6 </span>
          </span>
          <span className="block text-[18px] text-[#0AAEB9]">
            {" "}
            Rs. <span className="">Available: 16 </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
