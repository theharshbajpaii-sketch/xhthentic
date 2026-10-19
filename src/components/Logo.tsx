import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'nav' | 'footer' | 'large';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'nav', onClick }) => {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('/images/xhthentic-logo.png');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    // Default smooth scroll to top when already on homepage
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    // If the preferred path /images/xhthentic-logo.png fails, try /logo.png as fallback
    if (currentSrc === '/images/xhthentic-logo.png') {
      setCurrentSrc('/logo.png');
    } else {
      setImgError(true);
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className={`brand-logo-link ${className}`}
      aria-label="XHTHENTIC Home"
    >
      {!imgError ? (
        <img
          src={currentSrc}
          alt="XHTHENTIC - IT'S NOT A LOGO. IT'S A VIBE."
          className={`brand-logo-img brand-logo-img--${variant}`}
          loading="eager"
          decoding="async"
          onError={handleImageError}
        />
      ) : (
        <div className="brand-logo-fallback">
          <span className="brand-logo-fallback-title">
            XHTHENTIC
          </span>
          <span className="brand-logo-fallback-tagline">
            IT'S NOT A LOGO. IT'S A VIBE.
          </span>
        </div>
      )}
    </a>
  );
};
