import React from 'react';
import { BRAND_INFO } from '../data/products';
import { ChevronRightIcon } from './Icons';

interface HeroProps {
  onShopClick: () => void;
  onExploreCampaign: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onExploreCampaign }) => {
  return (
    <section className="hero-section" aria-label="Featured Hero">
      <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
        <div className="hero-grid">
          {/* Hero Editorial Text */}
          <div className="hero-content">
            <span className="hero-tag">
              THE EVERYDAY EDITION · DROP 01
            </span>
            
            <h1 className="hero-title">
              {BRAND_INFO.heroHeadline}
            </h1>
            
            <p className="hero-subtitle">
              {BRAND_INFO.heroSubheadline}
            </p>
            
            <div className="hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={onShopClick}
                id="hero-shop-btn"
              >
                <span>{BRAND_INFO.heroCTA}</span>
                <ChevronRightIcon size={14} />
              </button>
              
              <button
                type="button"
                className="btn-secondary"
                onClick={onExploreCampaign}
              >
                <span>VIEW CAMPAIGN</span>
              </button>
            </div>

            {/* Subtle Brand Tagline Callout */}
            <div
              style={{
                marginTop: '4rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              <div>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  BRAND CREED
                </p>
                <p style={{ fontSize: '0.85rem', letterSpacing: '0.12em', color: 'var(--color-text-primary)', marginTop: '0.25rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  "{BRAND_INFO.tagline}"
                </p>
              </div>

              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  FABRIC WEIGHT
                </p>
                <p style={{ fontSize: '0.82rem', letterSpacing: '0.06em', color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                  240 — 280 GSM
                </p>
              </div>
            </div>
          </div>

          {/* Hero Editorial Photography */}
          <div className="hero-media">
            <img
              src="/images/hero.jpg"
              alt="Editorial portrait of model in pristine white cotton t-shirt"
              className="hero-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
