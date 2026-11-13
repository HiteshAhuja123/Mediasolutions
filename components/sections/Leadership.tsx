import { User } from 'lucide-react';
import styles from './Leadership.module.css';

export default function Leadership() {
  return (
    <section id="leadership" className={styles.leadership} aria-label="Leadership">
      <div className="container">
        <div className={styles.grid}>
          {/* Photo column */}
          <div className={styles.photoCol}>
            <div className={styles.photoFrame}>
              {/* ⚠️ Replace this placeholder with actual director photograph */}
              {/* When photo is ready:
                  <Image
                    src="/images/director.jpg"
                    alt="[Director Name] — Founder & Director, Media Solutions"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 90vw, 380px"
                  />
              */}
              <div className={styles.photoPlaceholder} aria-label="Director photograph placeholder">
                <div className={styles.photoPlaceholderIcon} aria-hidden="true">
                  <User size={40} />
                </div>
                <p className={styles.photoPlaceholderText}>
                  Director photograph to be supplied by the client
                </p>
              </div>
              <div className={styles.orangeAccent} aria-hidden="true" />
            </div>
          </div>

          {/* Content column */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Leadership</span>
            </div>

            {/* ⚠️ PLACEHOLDER — Director name and designation to be provided by the client */}
            <h2 className={styles.heading}>
              [Director Name]
            </h2>
            <p className={styles.designation}>Founder &amp; Director — Media Solutions</p>

            {/*
              ⚠️ PLACEHOLDER — Director biography, qualifications and professional background
              to be supplied by the client. Do NOT invent or assume any details.
            */}
            <p className={styles.bio}>
              Director profile and biography coming soon.
            </p>

            <div className={styles.pendingNote}>
              <strong>Note:</strong> The director&apos;s name, photograph, designation,
              qualifications and professional biography are pending client input.
              Please provide these details so this section can be completed accurately.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

