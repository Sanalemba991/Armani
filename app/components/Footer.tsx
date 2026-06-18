"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG Icons - Professional & Clean
  const Icons = {
    MapPin: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    Phone: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    Mail: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    Instagram: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <path d="M5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
      </svg>
    ),
    Facebook: () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
  </svg>
),

Whatsapp: () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.88 11.88 0 005.78 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.43zM12.08 21.8a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.73.98 1-3.64-.24-.37a9.8 9.8 0 01-1.51-5.27c0-5.42 4.41-9.83 9.83-9.83 2.62 0 5.08 1.02 6.93 2.88a9.73 9.73 0 012.88 6.94c0 5.42-4.41 9.82-9.81 9.82zm5.39-7.37c-.29-.15-1.71-.84-1.97-.94-.26-.09-.45-.14-.64.15-.19.29-.74.94-.9 1.13-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.45-.86-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44 0 1.43 1.03 2.82 1.18 3.01.14.19 2.03 3.11 4.92 4.36.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.11.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.33z" />
  </svg>
),
    ArrowRight: () => (
      <svg
        className="w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
  };

  const services = [
    "Bouncy Castles",
    "Trampoline Zones",
    "Trackless Train Rides",
    "Popcorn & Food Stalls",
    "Candy Stations",
    "Mascot Characters",
  ];

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cancellation Policy", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      {/* Decorative Top Accent */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5">
            {/* Column 1: Brand & Value Proposition (1-4) */}
            <div className="lg:col-span-4">
              <div className="mb-5">
                <h2 className="text-lg lg:text-xl font-bold tracking-tight">
                  <span className="text-slate-900">Armaan</span>
                  <span className="text-orange-500 ml-1">Games</span>
                </h2>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Premium Event Entertainment
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-5 mb-5">
                Creating unforgettable moments for families across Bangalore.
                From intimate celebrations to large corporate events, we bring
                joy, safety, and professional entertainment to every occasion.
              </p>

              {/* Premium CTA */}
            </div>

            {/* Column 2: Services (5-7) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 pb-3 border-b-2 border-orange-200">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2 group">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0 transition-all duration-300 group-hover:bg-orange-600 group-hover:scale-125" />
                    <span className="text-slate-600 text-sm font-medium group-hover:text-orange-600 transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (8-9) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 pb-3 border-b-2 border-orange-200">
                Company
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 text-sm font-medium hover:text-orange-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      {link.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info (10-12) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 pb-3 border-b-2 border-orange-200">
                Get in Touch
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-orange-500 mt-1">
                    <Icons.MapPin />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-slate-700 text-sm font-medium">
                      Bangalore, Karnataka
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-orange-500 mt-1">
                    <Icons.Phone />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+917019881127"
                      className="text-slate-700 text-sm font-medium hover:text-orange-600 transition-colors duration-300"
                    >
                      +91 70198 81127
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-2 pt-2">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/armaan_games_and_entertainment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    title="Follow us on Instagram"
                  >
                    <Icons.Instagram />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/your-page-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    title="Follow us on Facebook"
                  >
                    <Icons.Facebook />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    title="Chat with us on WhatsApp"
                  >
                    <Icons.Whatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* Footer Bottom */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-slate-600">
            <p className="font-medium">
              © {currentYear} Armaan Games & Entertainment. All rights reserved.
            </p>
          </div>

          {/* Status & Policy Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-600 font-medium">
                Open for Bookings
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-300" />

            <div className="flex items-center gap-4">
              {policies.map((policy, idx) => (
                <React.Fragment key={policy.label}>
                  <a
                    href={policy.href}
                    className="text-slate-600 hover:text-orange-600 transition-colors duration-300 font-medium"
                  >
                    {policy.label}
                  </a>
                  {idx < policies.length - 1 && (
                    <span className="hidden md:inline text-slate-300">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
