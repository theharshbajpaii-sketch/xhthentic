import React from 'react';
import { BRAND_INFO } from '../data/products';
import { ChevronRightIcon } from './Icons';

interface CampaignProps {
  onShopClick: () => void;
}

export const Campaign: React.FC<CampaignProps> = ({ onShopClick }) => {
  return (
    <section id="campaign" className="section campaign-section" aria-label="Editorial Campaign">
      <div className="container">
        <div className="campaign-grid">
          {/* Campaign Media */}
          <div className="campaign-media">
            <img
              src="/images/campaign.jpg"
              alt="Model wearing minimalist olive oversized cotton t-shirt in natural urban city setting"
              className="campaign-img"
              loading="lazy"
            />
          </div>

          {/* Campaign Editorial Copy */}
          <div className="campaign-content">
            <span className="section-tag">
              EDITORIAL CAMPAIGN · VOLUME I
            </span>

            <h2 className="campaign-title">
              {BRAND_INFO.campaignHeadline}
            </h2>

            <p className="campaign-copy">
              Captured across open city streets and modern architectural corridors, our debut series celebrates the natural rhythm of everyday motion. Garments designed to accompany morning commutes, studio afternoons, and evening wanderings with unforced elegance.
            </p>

            <p className="campaign-copy">
              No conspicuous branding or fleeting trends. Just honest cloth, calculated weight, and an understated presence that lets your personal rhythm take precedence.
            </p>

            <div style={{ marginTop: '1rem' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onShopClick}
              >
                <span>EXPLORE THE COLLECTION</span>
                <ChevronRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
