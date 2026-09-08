import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactConfig, socialLinks } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Contact() {
  const contactRef = useScrollReveal({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error || status.success) {
      setStatus({ loading: false, success: '', error: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: '',
        error: 'Please fill in all required fields.',
      });
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        contactConfig.serviceId,
        contactConfig.templateId,
        templateParams,
        contactConfig.publicKey
      )
      .then(() => {
        setStatus({
          loading: false,
          success: 'Thank you! Your message has been sent successfully.',
          error: '',
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({
          loading: false,
          success: '',
          error: 'Failed to send message. Please try again later.',
        });
      });
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-container">
        {/* Left Column / Context & Details */}
        <div className="contact-info-col reveal-child">
          <div className="section-pill">
            <Mail size={14} className="pill-icon" />
            <span>Get in Touch</span>
          </div>

          <h2 className="contact-title">
            Let's Start a <span className="title-gradient">Conversation</span>
          </h2>

          <p className="contact-lead">
            Have a project in mind, a question, or an opportunity? Feel free to reach out using the form or connect through GitHub.
          </p>

          {socialLinks?.github && (
            <div className="contact-social-links">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-github-card"
                aria-label="Visit GitHub Profile"
              >
                <div className="social-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div className="social-info">
                  <span className="social-label">GitHub</span>
                  <span className="social-handle">Explore Repositories</span>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Right Column / Contact Form */}
        <div className="contact-form-col reveal-child">
          <div className="contact-form-card">
            {status.success && (
              <div className="form-alert form-alert-success" role="alert">
                <CheckCircle2 size={18} className="alert-icon" />
                <span>{status.success}</span>
              </div>
            )}

            {status.error && (
              <div className="form-alert form-alert-error" role="alert">
                <AlertCircle size={18} className="alert-icon" />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                  autoComplete="name"
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                  autoComplete="email"
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  required
                  disabled={status.loading}
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status.loading}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={16} className="btn-spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
