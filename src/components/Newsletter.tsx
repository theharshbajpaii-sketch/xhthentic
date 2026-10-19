import React, { useState } from 'react';
import { BRAND_INFO } from '../data/products';
import { CheckIcon } from './Icons';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="newsletter-section" aria-label="Newsletter Subscription">
      <div className="container">
        <div className="newsletter-box">
          <span className="section-tag">
            DISPATCHES & ARCHIVE
          </span>

          <h2 className="newsletter-title font-serif">
            {BRAND_INFO.newsletterHeadline}
          </h2>

          <p className="newsletter-sub">
            Receive private notices regarding small-batch restocks, seasonal shade releases, and design essays from our studio.
          </p>

          {subscribed ? (
            <div className="newsletter-success" role="alert">
              <CheckIcon size={18} />
              <span>You are on the list. Thank you for connecting with XHTHENTIC.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                aria-label="Email address for newsletter"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="newsletter-submit"
                id="newsletter-submit-btn"
              >
                JOIN THE LIST
              </button>
            </form>
          )}

          {error && (
            <p style={{ color: '#b91c1c', fontSize: '0.75rem', marginTop: '0.25rem' }}>
              {error}
            </p>
          )}

          <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
            We respect your attention. Unsubscribe at any time with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};
