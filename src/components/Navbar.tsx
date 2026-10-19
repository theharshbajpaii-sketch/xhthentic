import React, { useState } from 'react';
import { Logo } from './Logo';
import { BagIcon, SearchIcon, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearchClick: () => void;
  activeFilter: string;
  onSelectCategory: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSearchClick,
  activeFilter,
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <aside className="announcement-bar" role="region" aria-label="Announcement">
        <span>INTRODUCING THE EVERYDAY ESSENTIALS · COMPLIMENTARY SHIPPING ACROSS INDIA</span>
      </aside>

      {/* Main Navigation */}
      <header className="site-header">
        <div className="container">
          <nav className="nav-inner" aria-label="Main Navigation">
            {/* Mobile Menu Button */}
            <div className="nav-mobile-trigger-wrap">
              <button
                type="button"
                className="nav-icon-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                id="mobile-menu-trigger"
              >
                <MenuIcon size={22} />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="nav-brand-wrap" style={{ display: 'flex', alignItems: 'center' }}>
              <Logo variant="nav" />
            </div>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li>
                <button
                  type="button"
                  className={`nav-link ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleNavClick('collection')}
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    onSelectCategory('Oversized');
                    handleNavClick('collection');
                  }}
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavClick('campaign')}
                >
                  Campaign
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavClick('philosophy')}
                >
                  About
                </button>
              </li>
            </ul>

            {/* Navigation Actions */}
            <div className="nav-actions">
              <button
                type="button"
                className="nav-icon-btn"
                onClick={onSearchClick}
                aria-label="Search Collection"
                id="search-btn"
              >
                <SearchIcon size={20} />
              </button>

              <button
                type="button"
                className="nav-icon-btn"
                onClick={onOpenCart}
                aria-label={`Shopping Bag with ${cartCount} items`}
                id="cart-btn"
              >
                <BagIcon size={20} />
                {cartCount > 0 && (
                  <span className="cart-count-badge" aria-hidden="true">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem'
            }}
          >
            <Logo variant="nav" onClick={() => setMobileMenuOpen(false)} />
            <button
              type="button"
              className="nav-icon-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem'
            }}
          >
            Navigation
          </p>

          <ul className="mobile-nav-links">
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick('collection')}
              >
                Collection
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => {
                  onSelectCategory('Oversized');
                  handleNavClick('collection');
                }}
              >
                New Drops
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick('campaign')}
              >
                Campaign
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick('philosophy')}
              >
                Philosophy
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick('newsletter')}
              >
                Studio Notes
              </button>
            </li>
          </ul>

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border-light)'
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem'
              }}
            >
              "IT'S NOT A LOGO. IT'S A VIBE."
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              XHTHENTIC Studios · All Everyday Basics
            </p>
          </div>
        </div>
      )}
    </>
  );
};
