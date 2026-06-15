"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    PartyPopper,
    ArrowRight,
    Sparkles,
    Palette,
    Gift,
    Star
} from "lucide-react";

interface DropdownItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when full-screen menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const themeItems: DropdownItem[] = [
        { title: "Superhero Adventure", description: "Action-packed missions for future heroes.", icon: <Sparkles className="w-5 h-5" />, href: "/themes/superhero" },
        { title: "Princess Fairytale", description: "Magical royal balls and fairytale events.", icon: <Star className="w-5 h-5" />, href: "/themes/princess" },
        { title: "Jungle Safari", description: "Wild animal encounters & outdoor exploration.", icon: <Gift className="w-5 h-5" />, href: "/themes/safari" },
        { title: "Space Explorer", description: "Cosmic games and astronaut missions.", icon: <PartyPopper className="w-5 h-5" />, href: "/themes/space" },
    ];

    const serviceItems: DropdownItem[] = [
        { title: "Premium Decor", description: "Custom balloon arches and themed backdrops.", icon: <Palette className="w-5 h-5" />, href: "/services/decor" },
        { title: "Magic & Puppets", description: "Captivating performances that spark imagination.", icon: <Sparkles className="w-5 h-5" />, href: "/services/magic-puppets" },
        { title: "Mascots & Hosts", description: "Energetic hosts keeping kids laughing and active.", icon: <PartyPopper className="w-5 h-5" />, href: "/services/mascots-hosts" },
    ];

    return (
        <>
            {/* Custom CSS for slow-motion dot morphing and overlay */}
            <style jsx>{`
                @keyframes slowFadeScaleIn {
                    0% { opacity: 0; transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes slowFadeOut {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.98); }
                }

                @keyframes paintReveal {
                    0% { 
                        clip-path: circle(0% at 100% 0%);
                        opacity: 0;
                    }
                    100% { 
                        clip-path: circle(150% at 100% 0%);
                        opacity: 1;
                    }
                }

                @keyframes paintConceal {
                    0% { 
                        clip-path: circle(150% at 100% 0%);
                        opacity: 1;
                    }
                    100% { 
                        clip-path: circle(0% at 100% 0%);
                        opacity: 0;
                    }
                }

                .dot-btn {
                    position: relative;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }

                .dot-btn span {
                    display: block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #a1a1aa; /* zinc-400 */
                    transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1); /* Slow motion ease */
                    position: absolute;
                }

                /* Default dot positions */
                .dot-btn span:nth-child(1) { transform: translateY(-9px); }
                .dot-btn span:nth-child(2) { transform: translateY(0); }
                .dot-btn span:nth-child(3) { transform: translateY(9px); }

                /* Morph to X (Active State) */
                .dot-btn.active span {
                    background-color: #f97316; /* orange-500 */
                    width: 28px;
                    height: 3px;
                    border-radius: 12px;
                }
                .dot-btn.active span:nth-child(1) {
                    transform: rotate(45deg);
                }
                .dot-btn.active span:nth-child(2) {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                .dot-btn.active span:nth-child(3) {
                    transform: rotate(-45deg);
                }

                .overlay-menu {
                    animation: paintReveal 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                .overlay-menu-closing {
                    animation: paintConceal 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .nav-link {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: linkReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                @keyframes linkReveal {
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* =========================================
          1. INITIAL TOP NAVBAR (Visible when at top)
          ========================================= */}
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 pointer-events-none transition-all duration-700 ease-in-out ${isScrolled ? "opacity-0 -translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"}`}>
                <header className="pointer-events-auto w-full rounded-full bg-transparent backdrop-blur-none border border-transparent shadow-none py-4 px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 focus:outline-none group relative z-10">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500 text-white transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-orange-500/30">
                                <PartyPopper className="w-4.5 h-4.5" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-tight leading-none text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                                    Armaan Games
                                </span>
                                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] mt-0.5 text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                                    Entertainment
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Links */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <Link href="/" className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Home</Link>
                            <Link href="/themes" className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Party Themes</Link>
                            <Link href="/services" className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Our Services</Link>
                            <Link href="/packages" className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Packages</Link>
                            <Link href="/gallery" className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Gallery</Link>
                        </nav>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4 relative z-10">
                            <Link href="/book" className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40">
                                Book A Party <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </header>
            </div>

            {/* =========================================
          2. SCROLLED TOP DOCK (Visible when scrolled down)
          ========================================= */}
            <div className={`fixed top-6 left-6 right-6 z-40 pointer-events-none flex items-center justify-between transition-all duration-700 ease-in-out ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>

                {/* Left Side: Compact Logo Pill */}
                <Link href="/" className="pointer-events-auto flex items-center gap-2.5 bg-zinc-900/90 backdrop-blur-xl rounded-full pl-2 pr-5 py-2 shadow-xl border border-zinc-700/50 group focus:outline-none">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-sm shadow-orange-500/30 group-hover:scale-105 transition-transform">
                        <PartyPopper className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">Armaan Games</span>
                </Link>

                {/* Right Side: Hamburger Menu Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto flex flex-col items-center justify-center w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-xl shadow-xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors focus:outline-none group gap-1.5"
                >
                    <span className="w-6 h-0.5 bg-zinc-400 group-hover:bg-orange-500 transition-colors rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 group-hover:bg-orange-500 transition-colors rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 group-hover:bg-orange-500 transition-colors rounded-full"></span>
                </button>
            </div>

            {/* =========================================
          3. FULLSCREEN OVERLAY MENU
          ========================================= */}
            {isOpen && (
                <div className={`fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-2xl flex flex-col justify-center ${isOpen ? 'overlay-menu' : 'overlay-menu-closing'}`}>

                    {/* Animated Close Button (The morphed dots) */}
                    <div className="absolute top-6 right-6">
                         <button
                            onClick={() => setIsOpen(false)}
                            className={`dot-btn active p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* Centered Navigation Links */}
                    <nav className="flex flex-col items-center justify-center gap-6 p-8">
                        <Link onClick={() => setIsOpen(false)} href="/" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.1s' }}>
                            Home
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/themes" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.2s' }}>
                            Party Themes
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/services" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.3s' }}>
                            Our Services
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/packages" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.4s' }}>
                            Packages
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/gallery" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.5s' }}>
                            Gallery
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/contact" className="nav-link text-4xl md:text-6xl font-extrabold text-zinc-200 hover:text-orange-500 transition-colors duration-200 tracking-tight" style={{ animationDelay: '0.6s' }}>
                            Contact
                        </Link>

                        {/* CTA at the bottom of the overlay menu */}
                        <div className="nav-link mt-12" style={{ animationDelay: '0.7s' }}>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href="/book"
                                className="flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30"
                            >
                                Book A Party <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </nav>

                    {/* Sub-details in the overlay */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                <PartyPopper className="w-4 h-4 text-orange-500" />
                                <span className="font-semibold tracking-wider uppercase text-[10px]">Armaan Games & Entertainment</span>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}