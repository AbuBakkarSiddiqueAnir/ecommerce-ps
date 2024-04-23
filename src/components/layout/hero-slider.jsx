import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import Navigation from "../navigation";
import Autoplay from "embla-carousel-autoplay";
const slides = [1, 2, 3];

export default function HeroSlider() {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedSlideIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
  }, [emblaApi]);

  const scrollTo = (to) => {
    emblaApi.scrollTo(to);
    setSelectedSlideIndex(to);
  };

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex">
        {slides.map((_, index) => (
          <div
            key={index}
            className="min-w-0 flex-grow-0 flex-shrink-0 basis-full"
          >
            <div className="w-full bg-[url('/hero.png')] bg-cover">
              <div className="px-16 py-24 text-black max-w-[550px]">
                <h1 className="text-h-huge text-teal-light leading-[53px] mb-3">
                  <span className="text-black">Shop</span> Computer & experience
                </h1>
                <p className="text-b-[13px] mb-6 leading-5">
                  You cannot inspect quality into the product; it is already
                  there. <br /> I am not a product of my circumstances. I am a
                  product of my decisions.
                </p>
                <Button
                  link="/"
                  className="px-5 rounded-xs py-3 text-b-2 text-white bg-teal-light"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navigation
        scrollTo={scrollTo}
        activeSlideIndex={selectedSlideIndex}
        slides={slides}
      />
    </div>
  );
}
