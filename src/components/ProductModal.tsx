import React, { useState, useEffect } from 'react';
import type { Product, ProductColor, ProductSize } from '../types';
import { CloseIcon, PlusIcon, MinusIcon, CheckIcon, TruckIcon, RotateCcwIcon, ShieldIcon } from './Icons';

interface ProductModalProps {
  product: Product | null;
  initialColor?: ProductColor;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: ProductSize, color: ProductColor, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  initialColor,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    () => initialColor || (product ? product.colors[0] : null)
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize>('M');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

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

  if (!isOpen || !product || !selectedColor) return null;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1500);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="product-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <CloseIcon size={20} />
        </button>

        {/* Product Imagery */}
        <div className="modal-media">
          <img
            src={selectedColor.image || product.image}
            alt={`${product.name} in ${selectedColor.name}`}
            loading="eager"
          />
        </div>

        {/* Product Details & Selection */}
        <div className="modal-content-area">
          <div>
            {product.badge && (
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                {product.badge}
              </span>
            )}
            <h2 id="modal-product-title" style={{ fontSize: '1.8rem', marginBottom: '0.35rem' }}>
              {product.name}
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                {formattedPrice}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                Inclusive of all taxes
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {product.description}
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <div className="size-header" style={{ marginBottom: '0.5rem' }}>
              <span>Colour: <strong>{selectedColor.name}</strong></span>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {product.colors.map((color) => {
                const isSelected = color.name === selectedColor.name;
                return (
                  <button
                    key={color.name}
                    type="button"
                    className={`swatch-btn ${isSelected ? 'active' : ''}`}
                    style={{
                      backgroundColor: color.hex,
                      width: '1.5rem',
                      height: '1.5rem',
                      border: isSelected ? '2px solid var(--color-black)' : '1px solid var(--color-border)'
                    }}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Size Selection */}
          <div className="size-selector">
            <div className="size-header">
              <span>Select Size: <strong>{selectedSize}</strong></span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', textTransform: 'none' }}>
                True to regular fit
              </span>
            </div>
            <div className="size-grid">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div className="quantity-stepper">
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <MinusIcon size={14} />
              </button>
              <span className="quantity-val">{quantity}</span>
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <PlusIcon size={14} />
              </button>
            </div>

            <button
              type="button"
              className="btn-primary"
              style={{ flex: 1 }}
              onClick={handleAdd}
              id="modal-add-to-cart-btn"
            >
              {addedAnimation ? (
                <>
                  <CheckIcon size={16} />
                  <span>ADDED TO BAG</span>
                </>
              ) : (
                <span>ADD TO BAG · {formattedPrice}</span>
              )}
            </button>
          </div>

          {/* Fabric Specifications */}
          <div
            style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border-light)',
              marginTop: '0.5rem'
            }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.65rem'
              }}
            >
              Fabric & Details
            </p>
            <ul className="fabric-list">
              {product.fabricDetails.map((detail, idx) => (
                <li key={idx} className="fabric-list-item">
                  <span className="fabric-bullet" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Perks */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-border-light)',
              fontSize: '0.7rem',
              color: 'var(--color-text-secondary)',
              textAlign: 'center'
            }}
          >
            <div>
              <TruckIcon size={16} style={{ margin: '0 auto 0.25rem' }} />
              <p>Free Delivery</p>
            </div>
            <div>
              <RotateCcwIcon size={16} style={{ margin: '0 auto 0.25rem' }} />
              <p>Easy 7-Day Returns</p>
            </div>
            <div>
              <ShieldIcon size={16} style={{ margin: '0 auto 0.25rem' }} />
              <p>Pre-Shrunk Cotton</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
