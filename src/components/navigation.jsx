export default function Navigation({
  slides = [],
  scrollTo,
  activeSlideIndex,
}) {
  return (
    <div className="absolute left-[45%] bottom-6 flex gap-x-4">
      {slides.map((_, index) => (
        <button
          onClick={() => scrollTo(index)}
          className={`w-12 h-3 rounded-lg bg-[#AA9393] ${
            index === activeSlideIndex ? "bg-green-900" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}
