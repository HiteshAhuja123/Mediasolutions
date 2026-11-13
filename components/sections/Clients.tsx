import Image from 'next/image';
import { clients } from '@/data/clients';
import styles from './Clients.module.css';

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export default function Clients() {
  return (
    <section id="clients" className={styles.clients} aria-label="Our Clients">
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Trusted By</span>
          </div>
          <h2 className={styles.heading}>Our Clients</h2>
          <p className={styles.subheading}>
            We are proud to have worked with a diverse range of clients across
            education, jewellery, healthcare, consumer goods and real estate — 
            building brand visibility and driving measurable results.
          </p>
        </div>

        {/* Client grid */}
        <ul className={styles.clientGrid} role="list">
          {clients.map((client) => (
            <li key={client.id} className={styles.clientCard} title={client.name}>
              {client.logoSrc ? (
                /* Actual logo image */
                <Image
                  src={client.logoSrc}
                  alt={client.logoAlt}
                  width={140}
                  height={48}
                  className={styles.logoImage}
                />
              ) : (
                /* Text-based placeholder */
                <div className={styles.clientNameDisplay}>
                  <span className={styles.clientInitials} aria-hidden="true">
                    {getInitials(client.name)}
                  </span>
                  <span className={styles.clientNameText}>{client.name}</span>
                  <span className={styles.clientSector}>{client.sector}</span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>
          Client logos will be displayed once verified permission is received.
          Additional clients can be added to <code>data/clients.ts</code>.
        </p>
      </div>
    </section>
  );
}

