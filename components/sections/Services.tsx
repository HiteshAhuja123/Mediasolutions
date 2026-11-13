import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import styles from './Services.module.css';

// Unsplash images per service (placeholder, to be replaced with real campaign work)
const serviceImages: Record<string, string> = {
  'ooh-advertising':
    '/images/stock/photo-1558618666-fcd25c85cd64.jpg',
  'dooh-advertising':
    '/images/stock/photo-1555529669-e69e7aa0ba9a.jpg',
  'cinema-advertising':
    '/images/stock/photo-1517604931442-7e0c8ed2963c.jpg',
  'television-advertising':
    '/images/stock/photo-1593784991095-a205069470b6.jpg',
  'print-advertising':
    '/images/stock/photo-1504711434969-e33886168f5c.jpg',
  'btl-marketing':
    '/images/stock/photo-1540575467063-178a50c2df87.jpg',
  'digital-marketing':
    '/images/stock/photo-1432888498266-38ffec3eaf0a.jpg',
  'event-management':
    '/images/stock/photo-1492684223066-81342ee5ff30.jpg',
  'brand-technology':
    '/images/stock/photo-1518770660439-4636190af475.jpg',
};

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className={styles.services} aria-label="Our Services">
      <div className="container">
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>What We Do</span>
            </div>
            <h2 className={styles.heading}>
              Nine Disciplines.<br />One Integrated Vision.
            </h2>
          </div>
          <p className={styles.headerDesc}>
            We offer a comprehensive spectrum of advertising and marketing services,
            from outdoor media to digital platforms, designed to maximise your
            brand&apos;s reach and impact.
          </p>
        </div>

        {/* Featured service — OOH (editorial layout) */}
        <article className={styles.featuredService} aria-label={featured.title}>
          <div className={styles.featuredImage}>
            <Image
              src={serviceImages[featured.id] ?? ''}
              alt={`${featured.title} — Media Solutions service`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className={styles.featuredContent}>
            <div>
              <p className={styles.serviceCategory}>{featured.category}</p>
              <h3 className={styles.serviceTitle}>{featured.title}</h3>
              <p className={styles.serviceDesc}>{featured.description}</p>
              <ul className={styles.serviceHighlights} role="list">
                {featured.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.highlightDot} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className={styles.learnMore}>
              Enquire About This Service
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Remaining services — grid */}
        <ul className={styles.servicesGrid} role="list">
          {rest.map((service) => (
            <li key={service.id}>
              <article className={styles.serviceCard}>
                <div className={styles.cardImage}>
                  <Image
                    src={serviceImages[service.id] ?? ''}
                    alt={`${service.title} — Media Solutions`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardCategory}>{service.category}</p>
                  <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <a href="#contact" className={styles.cardLink}>
                    Learn More
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

