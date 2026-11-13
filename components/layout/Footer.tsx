import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';
import styles from './Footer.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Our Clients' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { social } = company;
  const hasSocial =
    social.instagram || social.facebook || social.linkedin || social.twitter || social.youtube;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <Link href="#home" className={styles.footerLogo} aria-label="Media Solutions">
              <div className={styles.footerLogoMark} aria-hidden="true">
                <span className={styles.footerLogoMarkText}>MS</span>
              </div>
              <span className={styles.footerLogoName}>Media Solutions</span>
            </Link>
            <p className={styles.footerDesc}>{company.shortDescription}</p>
            <div className={styles.socialLinks}>
              {hasSocial ? (
                <>
                  {social.instagram && (
                    <a
                      href={social.instagram}
                      className={styles.socialLink}
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      href={social.facebook}
                      className={styles.socialLink}
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      className={styles.socialLink}
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      className={styles.socialLink}
                      aria-label="X (Twitter)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {social.youtube && (
                    <a
                      href={social.youtube}
                      className={styles.socialLink}
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube size={16} />
                    </a>
                  )}
                </>
              ) : (
                <p className={styles.socialPlaceholder}>Social links coming soon</p>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.footerLinks} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className={styles.colTitle}>Services</p>
            <ul className={styles.footerLinks} role="list">
              {services.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <a href="#services" className={styles.footerLink}>
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={styles.colTitle}>Contact Us</p>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Office</p>
              <address className={styles.contactValue} style={{ fontStyle: 'normal' }}>
                {company.address.line1}
                <br />
                {company.address.city}, {company.address.state} &mdash; {company.address.pincode}
                <br />
                {company.address.line2}
              </address>
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Email</p>
              <a href={`mailto:${company.email.primary}`} className={styles.contactLink}>
                {company.email.primary}
              </a>
            </div>

            {company.phone ? (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Phone</p>
                <a href={`tel:${company.phone}`} className={styles.contactLink}>
                  {company.phone}
                </a>
              </div>
            ) : (
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.placeholderText}>Contact number to be added</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {year} Media Solutions. All Rights Reserved.
          </p>
          <nav className={styles.footerLegal} aria-label="Legal">
            <a href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="/terms" className={styles.legalLink}>
              Terms of Use
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

