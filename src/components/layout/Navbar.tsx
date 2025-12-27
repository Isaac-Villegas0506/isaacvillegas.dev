"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn is available, usually provided in these templates. If not I will create it.

// Since I haven't checked for @/lib/utils, I will define a simple helper or assume it exists if I saw clsx/tailwind-merge in package.json
// Just in case, I'll inline the class usage or CREATE lib/utils first. `clsx` and `tailwind-merge` are in package.json.
// I'll create `src/lib/utils.ts` in the next step to be safe.

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Mi Historia", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Visión", href: "#vision" },
        { name: "Conversemos", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            Isaac Villegas
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider hidden sm:block">
                            Building the future
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-secondary-foreground whitespace-nowrap">
                                En constante crecimiento
                            </span>
                        </div>

                        <div className="flex items-center gap-2 pl-4 border-l border-border/30">
                            <a
                                href="https://github.com/isaacvillegas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/isaacvillegas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <button
                                onClick={toggleTheme}
                                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-xl animate-in slide-in-from-top-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-foreground py-2 border-b border-border/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between pt-4">
                            <span className="text-sm text-muted-foreground">Tema</span>
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2 text-foreground"
                            >
                                {theme === "dark" ? (
                                    <>
                                        <Sun size={18} /> Claro
                                    </>
                                ) : (
                                    <>
                                        <Moon size={18} /> Oscuro
                                    </>
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
