"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NAVIGATION = [["Home", "/"], ["Projects", "/projects"], ["About / Life", "/about"], ["Clients", "/clients"], ["Contact", "/contact"]];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = useCallback(() => setOpen((current) => !current), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="wordmark" href="/" onClick={closeMenu}>Prayag Nepal</Link>
        <button className={open ? "menu-button open" : "menu-button"} onClick={toggleMenu} aria-expanded={open} aria-controls="primary-nav" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <nav id="primary-nav" className={open ? "open" : ""} aria-label="Primary navigation">
          {NAVIGATION.map(([label, href]) => <Link key={href} className={path === href ? "active" : ""} href={href} onClick={closeMenu}>{label}</Link>)}
          <Link className="nav-contact" href="/contact" onClick={closeMenu}>Let&apos;s talk</Link>
        </nav>
      </div>
    </header>
  );
}
