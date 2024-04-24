import useEmblaCarousel from "embla-carousel-react";

import ArrowLeft from "@/assets/ArrowLeft";
import ArrowRight from "@/assets/ArrowRight";
const slides = [
  {
    id: 1,
    title: "Electronics",
    image: "/electronics.png",
  },
  {
    id: 2,
    title: "Fashion",
    image: "/fashion.png",
  },
  {
    id: 3,
    title: "Appliance",
    image: "/appliance.png",
  },
  {
    id: 4,
    title: "Babies",
    image: "/babies.png",
  },
  {
    id: 5,
    title: "Electronics",
    image: "/electronics.png",
  },
  {
    id: 6,
    title: "Fashion",
    image: "/fashion.png",
  },
  {
    id: 7,
    title: "Appliance",
    image: "/appliance.png",
  },
  {
    id: 8,
    title: "Babies",
    image: "/babies.png",
  },
];

export default function CategorySlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const prev = () => emblaApi.scrollPrev();
  const next = () => emblaApi.scrollNext();

  return (
    <div className="w-full relative">
      <div className="overflow-hidden relative mx-20 mt-5" ref={emblaRef}>
        <div className="flex ">
          {slides.map((slide, index) => (
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              key={index}
              className=" h-[18rem] relative bg-no-repeat  bg-cover flex-grow-0 flex-shrink-0 basis-[100%] md:basis-[40%] lg:basis-[17%] mx-6"
            >
              <div className=" bg-[#FEF9F9] shadow-[0px_1px_7px_0px_#00000091] px-3 py-2 text-[25px] text-black leading-[34px] absolute -left-4 bottom-4 w-full flex justify-between">
                <span className="">{slide.title}</span>

                <span className="text-teal-light">Shop</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="bg-transparent p-2 absolute left-2 top-1/2"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={next}
        className="bg-transparent p-2 absolute right-2 top-1/2"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
