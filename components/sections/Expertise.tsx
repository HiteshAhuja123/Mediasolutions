import {
  Layers,
  Brush,
  BarChart2,
  Users,
  CheckCircle,
  TrendingUp,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import styles from './Expertise.module.css';

const expertiseItems = [
  {
    icon: <Layers size={28} />,
    title: 'Integrated Marketing Solutions',
    desc: 'We seamlessly combine outdoor, digital, print, broadcast and experiential channels into unified campaigns that speak with one consistent brand voice.',
  },
  {
    icon: <Brush size={28} />,
    title: 'Creative Execution',
    desc: 'Our creative approach brings brand stories to life across every format — from impactful OOH visuals to engaging digital content and event experiences.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Strategic Media Planning',
    desc: 'Informed by audience insights and market data, our media planning ensures your advertising investments are placed where they deliver the greatest return.',
  },
  {
    icon: <Users size={28} />,
    title: 'Wide Audience Reach',
    desc: 'From local communities in Maharashtra to national audiences across India, we plan and execute campaigns that reach your target consumers at scale.',
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'End-to-End Campaign Execution',
    desc: 'From concept to completion, we manage every element of campaign delivery — vendor coordination, production, installation, monitoring and reporting.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Measurable Impact',
    desc: 'Every campaign we deliver is built with clear objectives and success metrics, ensuring our clients can track and measure the value of their marketing investment.',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Strong Client Relationships',
    desc: 'We work as an extension of our clients\' teams — responsive, transparent and committed to building long-term partnerships built on trust and results.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertise} aria-label="Our Expertise">
      <div className={`container ${styles.inner}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Why Choose Us</span>
          </div>
          <h2 className={styles.heading}>
            What Sets Us Apart as Your Marketing Partner
          </h2>
        </div>

        <ul className={styles.grid} role="list">
          {expertiseItems.map((item, i) => (
            <li key={item.title} className={styles.expertiseItem}>
              <span className={styles.itemNumber} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.itemIcon} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </li>
          ))}
        </ul>

        <div className={styles.bottomStrip}>
          <p className={styles.stripText}>
            Ready to build a campaign that your audience cannot ignore?
          </p>
          <a href="#contact" className={styles.stripCta}>
            Start a Conversation
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

