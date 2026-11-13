'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const bgPanels = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    alt: 'Large-format outdoor billboard advertising campaign',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85',
    alt: 'Brand activation and experiential marketing event',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85',
    alt: 'City street advertising and outdoor media',
  },
  {
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=85',
    alt: 'Digital out-of-home advertising screens',
  },
];

const stats = [
  { label: 'Established', value: '2012' },
  { label: 'Services', value: '9+' },
  { label: 'Location', value: 'Thane, MH' },
  { label: 'Focus', value: 'India & Beyond' },
];

export default function Hero() {
  const panelRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      panelRefs.current.forEach((el) => {
        if (el) {
          const img = el.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero">
      {/* Cinematic background */}
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.bgGrid}>
          {bgPanels.map((panel, i) => (
            <div
              key={i}
              className={styles.bgPanel}
              ref={(el) => { if (el) panelRefs.current[i] = el; }}
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className={styles.overlay} />
        <div className={styles.overlayLeft} />
      </div>

      {/* Content */}
      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>
              Complete Marketing Solutions — Est. 2012
            </span>
          </div>

          <h1 className={styles.headline}>
            WE MAKE<br />
            BRANDS <span className={styles.headlineAccent}>IMPOSSIBLE</span><br />
            TO IGNORE.
          </h1>

          <p className={styles.subheading}>
            From outdoor visibility to integrated brand experiences, we connect
            businesses with audiences through impactful media and marketing
            solutions.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="#services"
              className={styles.ctaPrimary}
              onClick={(e) => handleNavClick(e, '#services')}
            >
              Explore Our Services
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={styles.ctaSecondary}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let&apos;s Discuss Your Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className={styles.statsStrip} aria-hidden="true">
        <div className={`container ${styles.statsInner}`}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

