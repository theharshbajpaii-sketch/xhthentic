import React, { useEffect } from 'react';
import type { CartItem } from '../types';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, BagIcon, ChevronRightIcon } from './Icons';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onBrowse: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onBrowse
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(subtotal);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Shopping Bag"
      >
        {/* Cart Drawer Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BagIcon size={18} />
            <h2 className="cart-title">
              Shopping Bag ({totalItems})
            </h2>
          </div>
          <button
            type="button"
            className="nav-icon-btn"
            onClick={onClose}
            aria-label="Close Shopping Bag"
            id="close-cart-btn"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Callout */}
        <div
          style={{
            backgroundColor: 'var(--color-ivory)',
            padding: '0.65rem 1.5rem',
            borderBottom: '1px solid var(--color-border-light)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            textAlign: 'center'
          }}
        >
          COMPLIMENTARY SHIPPING INCLUDED ON ALL ORDERS
        </div>

        {/* Cart Items List or Empty State */}
        {items.length === 0 ? (
          <div className="cart-empty-state">
            <BagIcon size={42} strokeWidth={1} style={{ opacity: 0.35, marginBottom: '0.5rem' }} />
            <p className="cart-empty-title">Your bag is empty.</p>
            <p className="cart-empty-sub">
              Consider our everyday foundational t-shirts. Cut from heavyweight combed cotton and designed for longevity.
            </p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                onClose();
                onBrowse();
              }}
            >
              <span>BROWSE ESSENTIALS</span>
            </button>
          </div>
        ) : (
          <>
            <div className="cart-body">
              {items.map((item) => {
                const itemTotal = new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  maximumFractionDigits: 0
                }).format(item.price * item.quantity);

                return (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />

                    <div className="cart-item-info">
                      <div>
                        <div className="cart-item-header">
                          <h4 className="cart-item-name">{item.name}</h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            style={{ opacity: 0.5, transition: 'opacity 0.2s', padding: '2px' }}
                            aria-label={`Remove ${item.name} from bag`}
                          >
                            <TrashIcon size={14} />
                          </button>
                        </div>
                        <p className="cart-item-meta">
                          {item.colorName} · Size {item.size}
                        </p>
                      </div>

                      <div className="cart-item-footer">
                        <div className="quantity-stepper">
                          <button
                            type="button"
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon size={12} />
                          </button>
                          <span className="quantity-val">{item.quantity}</span>
                          <button
                            type="button"
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <PlusIcon size={12} />
                          </button>
                        </div>

                        <span className="cart-item-price">{itemTotal}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Footer / Checkout Trigger */}
            <div className="cart-footer">
              <div className="cart-subtotal-row">
                <span>Subtotal</span>
                <span>{formattedSubtotal}</span>
              </div>
              <p className="cart-shipping-note">
                Shipping and taxes calculated at checkout. Free returns on all domestic orders within 7 days.
              </p>
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', padding: '1.1rem' }}
                onClick={onCheckout}
                id="cart-checkout-btn"
              >
                <span>PROCEED TO CHECKOUT · {formattedSubtotal}</span>
                <ChevronRightIcon size={14} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};
