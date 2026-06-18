"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const reviews = [
  {
    id: 1,
    text: "Armaan Games made my daughter's birthday unforgettable! The bouncy castle and train ride were the highlights. All the kids had an absolute blast. Highly recommend!",
    rating: 5,
    name: "Priya",
    timeAgo: "1 week ago",
    avatar: "https://i.pravatar.cc/48?img=11",
  },
  {
    id: 2,
    text: "We hiorange Armaan Games for our society's annual kids event. The mascots were a huge hit with the children, and the popcorn/candy station was a treat. Professional and punctual team!",
    rating: 5,
    name: "Rahul",
    timeAgo: "10 days ago",
    avatar: "https://i.pravatar.cc/48?img=47",
  },
  {
    id: 3,
    text: "Best kids party organizers in Bangalore! The trampoline and bouncy castle setup was top-notch. Safe, clean, and so much fun. My son is still talking about it weeks later!",
    rating: 5,
    name: "Sneha",
    timeAgo: "2 weeks ago",
    avatar: "https://i.pravatar.cc/48?img=52",
  },
  {
    id: 4,
    text: "Armaan Games deliveorange an amazing experience for our twin's birthday. The train ride and character appearances kept everyone entertained. The team was so friendly and professional.",
    rating: 5,
    name: "Vikram",
    timeAgo: "3 weeks ago",
    avatar: "https://i.pravatar.cc/48?img=32",
  },
  {
    id: 5,
    text: "Booked Armaan Games for a corporate family day event. The variety of activities - bouncy castles, trampolines, and candy stations - was perfect. Kids and parents both enjoyed it thoroughly!",
    rating: 5,
    name: "Ananya",
    timeAgo: "1 month ago",
    avatar: "https://i.pravatar.cc/48?img=45",
  },
  {
    id: 6,
    text: "The mascots from Armaan Games were the life of the party! My daughter couldn't stop hugging them. The popcorn and candy added the perfect touch. Highly recommended for any kids event!",
    rating: 5,
    name: "Deepak",
    timeAgo: "1 month ago",
    avatar: "https://i.pravatar.cc/48?img=33",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleStar() {
  return (
    <svg
      className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonal() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive visible count
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Clamp current when visibleCount changes
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  // Remove first load state after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => Math.max(0, c - 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => Math.min(maxIndex, c + 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [maxIndex, isAnimating]);

  // Slide by measuring actual element widths
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    const firstCard = track.children[0] as HTMLElement;
    const cardWidth = firstCard.offsetWidth;
    const gap = 20; // tailwind gap-5 = 20px

    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
  }, [current, visibleCount]);

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20 px-5 sm:px-6 font-sans overflow-hidden">
      {/* Heading with animation */}
      <div 
        className={`text-center mb-6 sm:mb-8 transition-all duration-700 ease-out ${
          isFirstLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight tracking-tight">
          What parents say,
          <br />
          <span className="font-bold">trusted by hundoranges.</span>
        </h2>
      </div>

      {/* Google Reviews badge with animation */}
      <div 
        className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-10 sm:mb-14 transition-all duration-700 delay-100 ease-out ${
          isFirstLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="text-base sm:text-lg text-[#444] font-medium">4.9/5</span>
        <GoogleStar />
        <span className="text-base sm:text-lg font-bold text-[#1a1a1a] tracking-wide">
          Google Reviews
        </span>
        <span className="text-sm sm:text-base text-[#666]">Based on 230+ reviews</span>
      </div>

      {/* Cards row */}
      <div className="max-w-7xl mx-auto flex gap-6 items-start">
        {/* Left label + controls (desktop) */}
        <div 
          className={`hidden md:flex flex-col justify-between min-w-[180px] pt-4 pb-2 h-full transition-all duration-700 delay-200 ease-out ${
            isFirstLoad ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
          }`}
        >
          <div>
           <svg
  width="64"
  height="52"
  viewBox="0 0 64 52"
  fill="none"
  className="mb-6"
>
  <text
    x="0"
    y="52"
    fontSize="80"
    fill="#f97316"
    fontFamily="Georgia, serif"
    fontWeight="bold"
  >
    &ldquo;
  </text>
</svg>
            <p className="text-2xl font-semibold text-[#1a1a1a] leading-snug mt-[-16px]">
              Happy
              <br />
              kids, happy
              <br />
              parents
            </p>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={prev}
              disabled={current === 0 || isAnimating}
              className={`p-1 text-[#333] disabled:text-[#bbb] transition-all hover:text-black ${
                isAnimating ? 'opacity-50' : 'opacity-100'
              }`}
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex-1 h-px bg-[#333]" />
            <button
              onClick={next}
              disabled={current >= maxIndex || isAnimating}
              className={`p-1 text-[#333] disabled:text-[#bbb] transition-all hover:text-black ${
                isAnimating ? 'opacity-50' : 'opacity-100'
              }`}
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Review cards */}
        <div 
          className={`flex-1 overflow-hidden transition-all duration-700 delay-300 ease-out ${
            isFirstLoad ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
          }`}
        >
          <div
            ref={trackRef}
            className={`flex gap-5 transition-transform duration-500 ease-in-out ${
              isAnimating ? 'transition-transform duration-500 ease-in-out' : ''
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`flex-shrink-0 bg-white rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm transition-all duration-500 ease-out ${
                  isFirstLoad ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`,
                  transitionDelay: isFirstLoad ? `${index * 100}ms` : '0ms',
                }}
              >
                <p className="text-[14px] sm:text-[15px] text-[#333] leading-relaxed mb-5 sm:mb-6">
                  {review.text}
                </p>
                <div>
                  <StarRating count={review.rating} />
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        {review.name}
                      </p>
                      <p className="text-xs text-[#999]">{review.timeAgo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={current === 0 || isAnimating}
          className={`p-2 text-[#333] disabled:text-[#bbb] transition-all hover:text-black ${
            isAnimating ? 'opacity-50' : 'opacity-100'
          }`}
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="w-24 h-px bg-[#333]" />
        <button
          onClick={next}
          disabled={current >= maxIndex || isAnimating}
          className={`p-2 text-[#333] disabled:text-[#bbb] transition-all hover:text-black ${
            isAnimating ? 'opacity-50' : 'opacity-100'
          }`}
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}