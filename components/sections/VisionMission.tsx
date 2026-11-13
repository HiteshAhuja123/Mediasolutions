import { Eye, Compass } from 'lucide-react';
import { company } from '@/data/company';
import styles from './VisionMission.module.css';

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className={styles.visionMission}
      aria-label="Vision and Mission"
    >
      <div className={styles.grid}>
        {/* Vision */}
        <div className={styles.card + ' ' + styles.cardVision}>
          <span className={styles.bgLetter} aria-hidden="true">V</span>
          <div className={styles.icon} aria-hidden="true">
            <Eye size={32} />
          </div>
          <span className={styles.label}>Our Vision</span>
          <h2 className={styles.cardTitle}>
            Where We&apos;re Heading
          </h2>
          <p className={styles.cardText}>{company.vision}</p>
          <p className={styles.draftNote}>
            Draft statement — pending client approval.
          </p>
        </div>

        {/* Mission */}
        <div className={styles.card + ' ' + styles.cardMission}>
          <span className={styles.bgLetter} aria-hidden="true">M</span>
          <div className={styles.icon} aria-hidden="true">
            <Compass size={32} />
          </div>
          <span className={styles.label}>Our Mission</span>
          <h2 className={styles.cardTitle}>
            How We Operate
          </h2>
          <p className={styles.cardText}>{company.mission}</p>
          <p className={styles.draftNote}>
            Draft statement — pending client approval.
          </p>
        </div>
      </div>
    </section>
  );
}

