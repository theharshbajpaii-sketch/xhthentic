import React, { useState, useEffect } from 'react';
import type { Product, ProductColor, ProductSize, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Philosophy } from './components/Philosophy';
import { Campaign } from './components/Campaign';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { SearchIcon, TruckIcon, RotateCcwIcon, ShieldIcon, CheckIcon } from './components/Icons';

export const App: React.FC = () => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('xhthentic_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('xhthentic_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // UI Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewInitialColor, setQuickViewInitialColor] = useState<ProductColor | undefined>(undefined);

  // Search & Filtering State
  const [selectedFit, setSelectedFit] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    size: ProductSize,
    color: ProductColor,
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${color.name}-${size}`;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          size,
          colorName: color.name,
          colorHex: color.hex,
          image: color.image || product.image,
          quantity
        };
        return [...prevCart, newItem];
      }
    });

    showToast(`Added to Bag: ${product.name} (${size} · ${color.name})`);
  };

  const handleQuickAdd = (product: Product, color: ProductColor) => {
    handleAddToCart(product, 'M', color, 1);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrderPlaced = () => {
    setCart([]);
  };

  const handleOpenQuickView = (product: Product, initialColor?: ProductColor) => {
    setQuickViewProduct(product);
    setQuickViewInitialColor(initialColor);
  };

  // Filtered Products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesFit = selectedFit === 'all' || product.fit.toLowerCase() === selectedFit.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.fit.toLowerCase().includes(query) ||
      product.colors.some((c) => c.name.toLowerCase().includes(query));

    return matchesFit && matchesQuery;
  });

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={() => {
          scrollToSection('collection');
          const searchEl = document.querySelector<HTMLInputElement>('.search-input');
          if (searchEl) searchEl.focus();
        }}
        activeFilter={selectedFit}
        onSelectCategory={(cat) => setSelectedFit(cat)}
      />

      {/* Main Content */}
      <main>
        {/* Editorial Hero Section */}
        <Hero
          onShopClick={() => scrollToSection('collection')}
          onExploreCampaign={() => scrollToSection('campaign')}
        />

        {/* Value Proposition Bar */}
        <section className="features-bar" aria-label="Brand Commitments">
          <div className="container">
            <div className="features-grid">
              <div className="feature-box">
                <TruckIcon size={22} />
                <h4 className="feature-title">Complimentary Delivery</h4>
                <p className="feature-desc">All orders across India receive free express delivery in plastic-free packaging.</p>
              </div>

              <div className="feature-box">
                <ShieldIcon size={22} />
                <h4 className="feature-title">240+ GSM Heavy Cotton</h4>
                <p className="feature-desc">Substantial long-staple combed cotton engineered for structural permanence.</p>
              </div>

              <div className="feature-box">
                <RotateCcwIcon size={22} />
                <h4 className="feature-title">7-Day Free Exchange</h4>
                <p className="feature-desc">Effortless size swaps or returns with doorstep pickup convenience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collection Section */}
        <section id="collection" className="section" aria-label="Featured Collection">
          <div className="container">
            <div className="section-header with-controls">
              <div>
                <span className="section-tag">THE FOUNDATIONS</span>
                <h2 className="section-title">Everyday Cotton Essentials</h2>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '380px' }}>
                Heavyweight plain T-shirts meticulously cut to be worn daily. Cast in neutral tones and timeless proportions.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="filter-bar">
              <div className="filter-group">
                {['all', 'Regular', 'Oversized', 'Boxy', 'Heavyweight'].map((fit) => (
                  <button
                    key={fit}
                    type="button"
                    className={`filter-pill ${selectedFit.toLowerCase() === fit.toLowerCase() ? 'active' : ''}`}
                    onClick={() => setSelectedFit(fit)}
                  >
                    {fit === 'all' ? 'All Fits' : `${fit} Fit`}
                  </button>
                ))}
              </div>

              <div className="search-input-wrapper">
                <SearchIcon size={16} className="search-icon-inside" />
                <input
                  type="text"
                  placeholder="Search by color, fit, or style..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Filter products"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      padding: '2px 4px'
                    }}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  No garments match your selection.
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  Try resetting your fit filter or search query.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedFit('all');
                    setSearchQuery('');
                  }}
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={handleOpenQuickView}
                    onQuickAdd={handleQuickAdd}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <Philosophy />

        {/* Editorial Campaign Section */}
        <Campaign onShopClick={() => scrollToSection('collection')} />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick View Modal */}
      {quickViewProduct && (
        <ProductModal
          key={`${quickViewProduct.id}-${quickViewInitialColor?.name || 'default'}`}
          product={quickViewProduct}
          initialColor={quickViewInitialColor}
          isOpen={Boolean(quickViewProduct)}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onBrowse={() => scrollToSection('collection')}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckIcon size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default App;
