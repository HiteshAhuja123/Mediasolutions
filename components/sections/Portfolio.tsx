'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioItems, portfolioCategories, type PortfolioCategory } from '@/data/portfolio';
import styles from './Portfolio.module.css';

const categoryLabels: Record<string, string> = {
  outdoor: 'Outdoor',
  'digital-screens': 'Digital Screens',
  cinema: 'Cinema',
  print: 'Print',
  'brand-activations': 'Brand Activations',
  events: 'Events',
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className={styles.portfolio} aria-label="Our Work / Portfolio">
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Our Work</span>
          </div>
          <h2 className={styles.heading}>Campaign Gallery</h2>
        </div>

        {/* Category filters */}
        <div className={styles.filters} role="tablist" aria-label="Portfolio categories">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`${styles.filterBtn} ${
                activeCategory === cat.id ? styles.filterBtnActive : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className={styles.gallery} role="tabpanel">
          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              No items in this category yet.
            </div>
          )}
          {filtered.map((item) => (
            <article key={item.id} className={styles.galleryItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {item.isPlaceholder && (
                  <div className={styles.placeholderBadge} aria-label="Placeholder image">
                    Placeholder
                  </div>
                )}
              </div>
              <div className={styles.overlay} aria-hidden="true">
                <span className={styles.overlayCategory}>
                  {categoryLabels[item.category] ?? item.category}
                </span>
                <h3 className={styles.overlayTitle}>{item.title}</h3>
                <p className={styles.overlayClient}>{item.client}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.portfolioNote}>
          Placeholder images are displayed above. Real campaign work will be
          shown once client approvals and imagery are received. Update{' '}
          <code>data/portfolio.ts</code> to add verified campaign content.
        </p>
      </div>
    </section>
  );
}

