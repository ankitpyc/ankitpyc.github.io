"use client";

import { useState } from "react";
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
          Ankit Mishra
        </Link>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out">Home</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out">About</Link></li>
            <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out">Projects</Link></li>
            <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out">Blog</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden transition-colors duration-200 ease-in-out" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-sm border-b border-border/40 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 ease-in-out text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200 ease-in-out text-lg" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-200 ease-in-out text-lg" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/blog" className="text-foreground hover:text-primary transition-colors duration-200 ease-in-out text-lg" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200 ease-in-out text-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
