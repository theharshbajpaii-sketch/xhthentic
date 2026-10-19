import React, { useState } from 'react';
import { Logo } from './Logo';
import { CloseIcon } from './Icons';

type PolicyType = 'shipping' | 'returns' | 'privacy' | 'terms' | 'contact' | null;

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<PolicyType>(null);

  const policyContent: Record<string, { title: string; body: string[] }> = {
    shipping: {
      title: 'Shipping & Delivery',
      body: [
        'Complimentary standard delivery is offered on all domestic orders across India.',
        'Orders are packed in plastic-free recycled paper sleeves and dispatched within 24 to 48 business hours.',
        'Typical transit time is 3 to 5 business days for metropolitan cities and 5 to 7 days for rest of India.',
        'Tracking links are dispatched via SMS and email once the package is registered with our courier partners.'
      ]
    },
    returns: {
      title: 'Returns & Exchange Policy',
      body: [
        'We offer a 7-day complimentary return and size exchange window from the date of package delivery.',
        'Garments must be unworn, unwashed, and returned in original condition with tags intact.',
        'To initiate an exchange or return, email care@xhthentic.example.com with your order number.',
        'Refunds are processed back to the original payment method within 5 to 7 business days following quality verification.'
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      body: [
        'This website operates as an interactive frontend showcase for XHTHENTIC.',
        'We do not sell, rent, or trade your personal email or shipping details to external marketing entities.',
        'Any details entered during the demo checkout are stored solely within your local browser storage for session simulation and are never transmitted to external payment gateways.',
        'For privacy questions, reach out to privacy@xhthentic.example.com.'
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      body: [
        'All designs, product visuals, typography, and brand identity materials are property of XHTHENTIC Studios.',
        'Product dimensions, weights, and color reproductions are presented with high fidelity for demo purposes.',
        'Prices listed are in Indian Rupees (INR) and are inclusive of standard applicable GST.',
        'By utilizing this preview platform, you acknowledge that orders placed represent simulated checkout demonstrations.'
      ]
    },
    contact: {
      title: 'Client Services & Studio',
      body: [
        'Client Concierge: studio@xhthentic.example.com',
        'Customer Care Hours: Monday – Friday, 10:00 to 18:00 IST',
        'Headquarters (Placeholder): Plot 14, Okhla Industrial Area Phase III, New Delhi, 110020, India',
        'Press & Editorial Inquiries: press@xhthentic.example.com'
      ]
    }
  };

  const currentPolicy = activeModal ? policyContent[activeModal] : null;

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            {/* Brand Column */}
            <div className="footer-col">
              <Logo variant="footer" />
              <p className="footer-desc">
                Considered everyday garments crafted from heavyweight combed cotton. Designed in limited foundational drops to be worn continuously.
              </p>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                [Demo Brand Showcase · Ready for Production Deployment]
              </p>
            </div>

            {/* Shop Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Collection</h4>
              <ul className="footer-links">
                <li>
                  <a href="#collection" className="footer-link">Essential White Tee</a>
                </li>
                <li>
                  <a href="#collection" className="footer-link">Essential Black Tee</a>
                </li>
                <li>
                  <a href="#collection" className="footer-link">Stone Oversized Tee</a>
                </li>
                <li>
                  <a href="#collection" className="footer-link">Charcoal Essential Tee</a>
                </li>
                <li>
                  <a href="#collection" className="footer-link">Heavyweight Series</a>
                </li>
              </ul>
            </div>

            {/* Studio / Brand */}
            <div className="footer-col">
              <h4 className="footer-heading">Studio</h4>
              <ul className="footer-links">
                <li>
                  <a href="#philosophy" className="footer-link">Philosophy & Craft</a>
                </li>
                <li>
                  <a href="#campaign" className="footer-link">Editorial Lookbook</a>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link text-left"
                    style={{ textAlign: 'left' }}
                    onClick={() => setActiveModal('contact')}
                  >
                    Contact Concierge
                  </button>
                </li>
                <li>
                  <a href="#newsletter" className="footer-link">Studio Dispatches</a>
                </li>
              </ul>
            </div>

            {/* Client Service / Policies */}
            <div className="footer-col">
              <h4 className="footer-heading">Client Services</h4>
              <ul className="footer-links">
                <li>
                  <button
                    type="button"
                    className="footer-link"
                    style={{ textAlign: 'left' }}
                    onClick={() => setActiveModal('shipping')}
                  >
                    Shipping & Delivery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link"
                    style={{ textAlign: 'left' }}
                    onClick={() => setActiveModal('returns')}
                  >
                    Returns & Exchange
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link"
                    style={{ textAlign: 'left' }}
                    onClick={() => setActiveModal('privacy')}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link"
                    style={{ textAlign: 'left' }}
                    onClick={() => setActiveModal('terms')}
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© {CURRENT_YEAR} XHTHENTIC STUDIOS. ALL RIGHTS RESERVED.</p>
            <p>NEW DELHI · MUMBAI · BENGALURU · WORLDWIDE SHIPPING</p>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activeModal && currentPolicy && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div
            className="checkout-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '520px' }}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <CloseIcon size={20} />
            </button>

            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                fontWeight: 600
              }}
            >
              XHTHENTIC POLICIES
            </span>

            <h3 style={{ fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '1.25rem' }}>
              {currentPolicy.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {currentPolicy.body.map((para, i) => (
                <p key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ width: '100%' }}
                onClick={() => setActiveModal(null)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
