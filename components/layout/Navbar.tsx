'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Our Clients' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link
            href="#home"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Media Solutions — Home"
          >
            <div className={styles.logoMark} aria-hidden="true">
              <span className={styles.logoMarkText}>MS</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Media Solutions</span>
              <span className={styles.logoSub}>Complete Marketing Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let&apos;s Talk
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, link.href)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileNavDivider} aria-hidden="true" />
        <a
          href="#contact"
          className={styles.mobileCtaButton}
          onClick={(e) => handleNavClick(e, '#contact')}
          tabIndex={menuOpen ? 0 : -1}
        >
          Let&apos;s Talk
        </a>
      </nav>
    </>
  );
}

