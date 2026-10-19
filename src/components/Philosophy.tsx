import React from 'react';
import { BRAND_INFO } from '../data/products';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section philosophy-section" aria-label="Brand Philosophy">
      <div className="container">
        <div className="philosophy-grid">
          {/* Philosophy Narrative */}
          <div className="philosophy-content">
            <span className="section-tag">
              PHILOSOPHY & CRAFT
            </span>

            <h2 className="philosophy-quote">
              {BRAND_INFO.philosophyHeadline}
            </h2>

            <p className="philosophy-tagline">
              "{BRAND_INFO.tagline}"
            </p>

            <p className="philosophy-copy">
              We started XHTHENTIC with a singular pursuit: to refine the single most worn garment in modern life. Rather than chasing seasonal hype or loud graphics, we concentrate on fabric density, drape, shoulder construction, and permanence.
            </p>

            <p className="philosophy-copy">
              Every T-shirt is engineered from heavyweight, long-staple combed cotton jersey that retains its structured silhouette throughout years of continuous wear. Simple cuts, meticulous stitching, and an obsessive focus on how clothing feels against your skin.
            </p>

            {/* Design Pillars */}
            <div className="philosophy-pillars">
              <div className="pillar-item">
                <h4 className="pillar-title">240—280 GSM Cotton</h4>
                <p className="pillar-text">Substantial jersey knit with clean architectural fall and zero transparency.</p>
              </div>

              <div className="pillar-item">
                <h4 className="pillar-title">Dimensional Memory</h4>
                <p className="pillar-text">Pre-shrunk fabrications that maintain their collar line and body length wash after wash.</p>
              </div>

              <div className="pillar-item">
                <h4 className="pillar-title">Proportion Study</h4>
                <p className="pillar-text">Engineered sleeve pitch and balanced armholes for comfortable, all-day ease.</p>
              </div>

              <div className="pillar-item">
                <h4 className="pillar-title">Permanent Palette</h4>
                <p className="pillar-text">Enduring neutral shades curated to integrate seamlessly into any minimalist wardrobe.</p>
              </div>
            </div>
          </div>

          {/* Philosophy Visual Media */}
          <div className="philosophy-media">
            <img
              src="/images/philosophy-fabric.jpg"
              alt="Close-up macro texture of 240 GSM combed cotton weave and precision stitching"
              className="philosophy-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
