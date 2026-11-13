'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, ArrowRight, Send } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';
import styles from './Contact.module.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your campaign.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // ⚠️  BACKEND INTEGRATION REQUIRED
    // This form submission requires a server-side endpoint or email service.
    // Options:
    //   1. Next.js API Route: /app/api/contact/route.ts → send email via Nodemailer / Resend
    //   2. Third-party service: Formspree, EmailJS, Web3Forms
    //   3. Serverless: AWS SES, SendGrid, Mailgun
    //
    // For now, the form validates correctly and signals readiness.
    // Replace the timeout below with your actual fetch() call.

    try {
      // TODO: Replace with real API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulated delay
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contact Media Solutions">
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Get In Touch</span>
          </div>
          <h2 className={styles.heading}>
            LET&apos;S MAKE YOUR<br />BRAND VISIBLE.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Info column */}
          <div className={styles.infoCol}>
            {/* Office */}
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <MapPin size={14} aria-hidden="true" />
                Office
              </p>
              <address className={styles.infoValue} style={{ fontStyle: 'normal' }}>
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}, {company.address.state}&nbsp;&mdash;&nbsp;
                {company.address.pincode}
                <br />
                {company.address.country}
              </address>
            </div>

            {/* Email */}
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <Mail size={14} aria-hidden="true" />
                Email
              </p>
              <a href={`mailto:${company.email.primary}`} className={styles.infoLink}>
                {company.email.primary}
              </a>
              <a href={`mailto:${company.email.contact}`} className={styles.infoLink}>
                {company.email.contact}
              </a>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <Phone size={14} aria-hidden="true" />
                Phone
              </p>
              {company.phone ? (
                <a href={`tel:${company.phone}`} className={styles.infoLink}>
                  {company.phone}
                </a>
              ) : (
                <p className={styles.placeholderInfo}>
                  Contact number to be provided by the client
                </p>
              )}
            </div>

            {/* WhatsApp */}
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <MessageCircle size={14} aria-hidden="true" />
                WhatsApp
              </p>
              {company.whatsapp ? (
                <>
                  <p className={styles.infoValue}>Send us a message on WhatsApp</p>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
                    className={styles.whatsappCta}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send WhatsApp message to Media Solutions"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </>
              ) : (
                <p className={styles.placeholderInfo}>
                  WhatsApp number to be provided by the client
                </p>
              )}
            </div>

            {/* Map */}
            <div className={styles.mapWrapper}>
              {/* ⚠️  Verify this map embed URL with the actual office location before launch */}
              <iframe
                src={company.address.mapsEmbedUrl}
                title="Media Solutions office location on Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className={styles.formCol}>
            {status === 'success' ? (
              <div className={styles.successMsg} role="status">
                <strong>Thank you for your message!</strong> We&apos;ve received your enquiry
                and will get back to you within one business day.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formRow}>
                  {/* Full Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      Full Name <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      aria-required="true"
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className={styles.errorMsg} role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.error : ''}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-required="true"
                    />
                    {errors.email && (
                      <span id="email-error" className={styles.errorMsg} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  {/* Phone */}
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Company */}
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Other / Not Sure Yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Your Message <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                    placeholder="Tell us about your campaign, brand and marketing objectives..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-required="true"
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.errorMsg} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'error' && (
                  <div className={styles.errorMsgGlobal} role="alert">
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href={`mailto:${company.email.primary}`}>{company.email.primary}</a>.
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={16} aria-hidden="true" />
                    </>
                  )}
                </button>

                {/* Backend integration note — visible in dev, can be removed post-launch */}
                <p className={styles.backendNote}>
                  ⚠️ <strong>Developer note:</strong> Form validation is live. Connect a backend
                  or email API (Resend, Formspree, etc.) in{' '}
                  <code>components/sections/Contact.tsx</code> before launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

