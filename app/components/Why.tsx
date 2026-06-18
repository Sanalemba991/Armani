"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Variants } from "framer-motion";
import { JSX } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
        <circle cx="32" cy="28" r="12" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="28" r="8" stroke="#8B7A1A" strokeWidth="2" fill="none"/>
        <rect x="30" y="20" width="4" height="4" stroke="#8B7A1A" strokeWidth="1.5" fill="none"/>
        <path d="M20 44L32 38L44 44L40 32L48 24H36L32 12L28 24H16L24 32L20 44Z" stroke="#8B7A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Bouncy Castles & Trampolines",
    description:
      "Massive inflatable bouncy castles and trampolines that keep kids entertained for hours with safe, supervised fun.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
        <circle cx="32" cy="24" r="14" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="24" r="9" stroke="#8B7A1A" strokeWidth="2" fill="none"/>
        <path d="M24 36L20 52L32 46L44 52L40 36" stroke="#8B7A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 24L31 27L36 20" stroke="#8B7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Train Rides & Entertainment",
    description:
      "Exciting train rides and engaging entertainment options that make every party a magical experience for children.",
  },
];

const sideFeatures = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
        <rect x="14" y="8" width="28" height="36" rx="2" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <rect x="22" y="4" width="12" height="8" rx="2" stroke="#8B7A1A" strokeWidth="2" fill="none"/>
        <line x1="20" y1="22" x2="36" y2="22" stroke="#8B7A1A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="36" y2="28" stroke="#8B7A1A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="44" cy="38" r="10" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="44" cy="38" r="6" stroke="#8B7A1A" strokeWidth="2" fill="none"/>
        <rect x="42" y="34" width="4" height="4" stroke="#8B7A1A" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Popcorn & Candy Treats",
    description: (
      <>
        Delicious popcorn and candy stations that add sweetness to every celebration.{" "}
        
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
        <circle cx="20" cy="20" r="8" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="44" cy="20" r="8" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="16" r="8" stroke="#8B7A1A" strokeWidth="2.5" fill="none"/>
        <path d="M8 44c0-6.627 5.373-8 12-8s12 1.373 12 8" stroke="#8B7A1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M32 44c0-6.627 5.373-8 12-8s12 1.373 12 8" stroke="#8B7A1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M24 52l1.5-3 1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L21 52.5l3-.5z" fill="#8B7A1A"/>
        <path d="M32 52l1.5-3 1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L29 52.5l3-.5z" fill="#8B7A1A"/>
        <path d="M40 52l1.5-3 1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L37 52.5l3-.5z" fill="#8B7A1A"/>
      </svg>
    ),
    title: "Mascots & Characters",
    description: (
      <>
        Beloved mascots and character appearances that bring smiles and create unforgettable memories.{" "}
       
      </>
    ),
  },
];

// --- Animation Variants ---

const easeOut = "easeOut";

const leftColVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOut },
  },
};

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.15, ease: easeOut },
  },
};

const middleColVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const rightColVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const featureCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

// --- Reusable Animated Feature Row ---

function AnimatedFeatureRow({
  feature,
  index,
}: {
  feature: { icon: JSX.Element; title: string; description: string | JSX.Element };
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <motion.div
        variants={featureCardVariants}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex gap-4 sm:gap-5 items-start py-6 sm:py-8 group cursor-default"
      >
        <motion.div
          variants={iconVariants}
          animate={{
            scale: hovered ? 1.1 : 1,
            rotate: hovered ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="flex-shrink-0 mt-1"
        >
          {feature.icon}
        </motion.div>
        <div className="overflow-hidden">
          <motion.h3
            variants={textFadeUp}
            className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-2"
          >
            {feature.title}
          </motion.h3>
          <motion.p
            variants={textFadeUp}
            className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed"
          >
            {feature.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Why() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="bg-white w-full py-10 sm:py-12 md:py-14 lg:py-16 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-0">
          {/* Left Column */}
          <motion.div
            variants={leftColVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-[38%] flex flex-col justify-center pr-0 lg:pr-16"
          >
            <motion.p
              variants={leftItemVariants}
              className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-medium tracking-wide"
            >
              Why Choose Armaan <span className="text-orange-500">Games</span>?
            </motion.p>

            <motion.h2
              variants={headingReveal}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-5 sm:mb-6"
            >
              Bangalore's
              <br />
              <span className="relative inline-block">
                Kids Party Experts
                {/* Decorative underline */}
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: easeOut }}
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#8B7A1A] rounded-full"
                />
              </span>
            </motion.h2>

            <motion.p
              variants={leftItemVariants}
              className="text-[13px] sm:text-[15px] text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xs"
            >
              We create unforgettable birthday parties and events with bouncy castles, trampolines, train rides, popcorn, candy, and lovable mascots across Bangalore.
            </motion.p>

            <motion.div
              variants={leftItemVariants}
              className="flex gap-6 items-center"
            >
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-orange-400 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  DM "PARTY" for Packages{" "}
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="text-base inline-block"
                  >
                    ›
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            variants={middleColVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-[32%] flex flex-col justify-center gap-0 border-r-0 lg:border-r border-gray-200 pr-0 lg:pr-12"
          >
            {features.map((feature, i) => (
              <div key={feature.title}>
                <AnimatedFeatureRow feature={feature} index={i} />
                {i < features.length - 1 && (
                  <motion.hr
                    variants={dividerVariants}
                    className="border-gray-200"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-[30%] flex flex-col justify-center gap-0 pl-0 lg:pl-12"
          >
            {sideFeatures.map((feature, i) => (
              <div key={feature.title}>
                <AnimatedFeatureRow feature={feature} index={i} />
                {i < sideFeatures.length - 1 && (
                  <motion.hr
                    variants={dividerVariants}
                    className="border-gray-200"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}