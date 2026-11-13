'use client';

import Image from 'next/image';
import { ArrowRight, Lightbulb, Target, TrendingUp, Globe } from 'lucide-react';
import { company } from '@/data/company';
import styles from './About.module.css';

const pillars = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Creativity & Innovation',
    desc: 'Bold ideas and creative execution that cut through the noise.',
  },
  {
    icon: <Target size={24} />,
    title: 'Strategic Thinking',
    desc: 'Data-informed planning that maximises campaign effectiveness.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Measurable Impact',
    desc: 'Campaigns built for measurable outcomes and business results.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Integrated Solutions',
    desc: 'Seamless offline and digital experiences across every touchpoint.',
  },
];

export default function About() {
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
    <section id="about" className={styles.about} aria-label="About Media Solutions">
      <div className="container">
        <div className={styles.grid}>
          {/* Visual column */}
          <div className={styles.visualCol}>
            <div className={styles.imageStack}>
              <div className={styles.foundedBadge} aria-hidden="true">
                <span className={styles.foundedYear}>{company.founded}</span>
                <span className={styles.foundedLabel}>Est. in Thane</span>
              </div>

              <div className={styles.imagePrimary}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Advertising professionals at work in a creative agency environment"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className={styles.imageSecondary}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="Marketing team collaborating on a campaign strategy"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>About Media Solutions</span>
            </div>

            <h2 className={styles.heading}>
              Connecting Brands.<br />Creating Impact.
            </h2>

            <p className={styles.description}>{company.description}</p>

            <ul className={styles.pillars} role="list">
              {pillars.map((p) => (
                <li key={p.title} className={styles.pillar}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    {p.icon}
                  </span>
                  <span className={styles.pillarTitle}>{p.title}</span>
                  <span className={styles.pillarDesc}>{p.desc}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className={styles.ctaLink}
              onClick={(e) => handleNavClick(e, '#services')}
            >
              Explore Our Services
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

