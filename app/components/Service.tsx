"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// A premium, smooth easing curve
const easeSmooth = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-0">
          {/* ============ LEFT: Text Content ============ */}
          <motion.div
            className="flex flex-col justify-start space-y-7 pt-2 flex-shrink-0 w-full lg:w-[420px]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: easeSmooth, delay: 0.2 }}
          >
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 w-fit">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-[10px] font-semibold text-orange-500 tracking-widest uppercase">
                Bangalore’s Kids Party Experts
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Bouncy | Trampoline | Train
              <br />
              Popcorn | Candy | Mascots
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Make your child's birthday magical with our premium party services
              in Bangalore. From bouncing fun to sweet treats, we create
              unforgettable memories.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center cursor-pointer space-x-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25  group w-fit">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 cursor-pointer group-hover:translate-x-1 transition-transform" />{" "}
            </button>

            {/* Contact */}
          </motion.div>

          {/* ============ RIGHT: S-Curve + 3 Cards ============ */}
          <div className="relative flex-1" style={{ height: "520px" }}>
            {/* SVG S-curve with nodes */}
            <svg
              viewBox="0 0 800 520"
              fill="none"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fdba74" />
                  <stop offset="40%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>

              {/* S-curve path */}
              <motion.path
                d="M 100,430
       C 100,340 200,320 400,280
       C 580,240 700,180 700,80"
                stroke="url(#curveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Node 1 */}
              <motion.circle
                cx="100"
                cy="430"
                r="9"
                fill="white"
                stroke="#f97316"
                strokeWidth="2.5"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 1.0 }}
              />
              <motion.circle
                cx="100"
                cy="430"
                r="4"
                fill="#f97316"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 1.1 }}
              />

              {/* Node 2 */}
              <motion.circle
                cx="400"
                cy="280"
                r="9"
                fill="white"
                stroke="#f97316"
                strokeWidth="2.5"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 1.7 }}
              />
              <motion.circle
                cx="400"
                cy="280"
                r="4"
                fill="#f97316"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 1.8 }}
              />

              {/* Node 3 */}
              <motion.circle
                cx="700"
                cy="80"
                r="9"
                fill="white"
                stroke="#f97316"
                strokeWidth="2.5"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 2.4 }}
              />
              <motion.circle
                cx="700"
                cy="80"
                r="4"
                fill="#f97316"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 2.5 }}
              />

              {/* Watermark numbers */}
              <text
                x="30"
                y="500"
                fontSize="200"
                fontWeight="900"
                fill="#fff7ed"
                fontFamily="sans-serif"
                style={{ userSelect: "none" }}
              >
                1
              </text>

              <text
                x="290"
                y="420"
                fontSize="200"
                fontWeight="900"
                fill="#fff7ed"
                fontFamily="sans-serif"
                style={{ userSelect: "none" }}
              >
                2
              </text>

              <text
                x="590"
                y="260"
                fontSize="200"
                fontWeight="900"
                fill="#fff7ed"
                fontFamily="sans-serif"
                style={{ userSelect: "none" }}
              >
                3
              </text>
            </svg>

            {/* Card 1 — bottom left, anchoorange near node 1 */}
            <motion.div
              className="absolute z-10"
              style={{ left: "0px", bottom: "8px", width: "260px" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 1.0 }}
            >
              <ServiceCard
                title="Bouncy & Trampoline"
                description="Let your kids jump for joy with our safe, colorful bouncy castles and trampolines. Perfect for hours of active fun!"
                image="https://picsum.photos/seed/bouncy-party/520/400.jpg"
                number="1"
              />
            </motion.div>

            {/* Card 2 — center, anchoorange near node 2 */}
            <motion.div
              className="absolute z-10"
              style={{
                left: "38%",
                top: "48%",
                transform: "translate(-20%, -10%)",
                width: "265px",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 1.7 }}
            >
              <ServiceCard
                title="Popcorn & Candy"
                description="Sweeten the celebration with our delicious popcorn machine and candy bar. A hit with kids of all ages!"
                image="https://picsum.photos/seed/candy-popcorn/530/400.jpg"
                number="2"
              />
            </motion.div>

            {/* Card 3 — top right, anchoorange near node 3 */}
            <motion.div
              className="absolute z-10"
              style={{ right: "0px", top: "0px", width: "260px" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 2.4 }}
            >
              <ServiceCard
                title="Train & Mascots"
                description="Surprise your little ones with a fun train ride and lovable mascots who will dance, play, and make photos memorable!"
                image="https://picsum.photos/seed/train-mascot/520/400.jpg"
                number="3"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  image,
  number,
}: {
  title: string;
  description: string;
  image: string;
  number: string;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-xl shadow-gray-900/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
      {/* Background Image — covers entire card */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Watermark number inside card */}
      <span className="absolute -bottom-4 -right-2 text-[120px] font-black text-white/[0.07] leading-none select-none pointer-events-none">
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10 p-5">
        <h3 className="font-bold text-white mb-2 flex items-center space-x-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
          <span>{title}</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed pl-6">
          {description}
        </p>
      </div>
    </div>
  );
}
