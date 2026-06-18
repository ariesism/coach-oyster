export default function RightSlideIndicator({ slides, activeSlide, setActiveSlide }) {
  return (
    <div className="lg:col-span-4 justify-self-end hidden lg:flex flex-col items-end gap-6">
      {slides.map((slide) => (
        <button
          key={slide}
          onClick={() => setActiveSlide(slide)}
          className="group flex items-center gap-4 focus:outline-none"
        >
          <span
            className={`text-sm font-semibold tracking-wider transition-all duration-300 font-display ${
              activeSlide === slide ? 'text-[#4DEEEA] text-lg' : 'text-gray-500 group-hover:text-gray-300'
            }`}
          >
            {slide.replace('slide', '0')}
          </span>
          <div
            className={`h-[2px] transition-all duration-300 ${
              activeSlide === slide ? 'w-16 bg-[#4DEEEA]' : 'w-6 bg-gray-700 group-hover:bg-gray-500'
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
}
