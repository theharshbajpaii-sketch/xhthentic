import React, { useState } from 'react';
import type { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product, initialColor?: ProductColor) => void;
  onQuickAdd: (product: Product, color: ProductColor) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onQuickAdd
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);

  // Format price in Indian Rupee format (INR)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <article className="product-card" aria-label={product.name}>
      {/* Product Image & Quick Actions */}
      <div
        className="product-image-container"
        onClick={() => onQuickView(product, selectedColor)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onQuickView(product, selectedColor);
          }
        }}
      >
        <img
          src={selectedColor.image || product.image}
          alt={`${product.name} in ${selectedColor.name}`}
          className="product-image"
          loading="lazy"
        />

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <div
          className="product-quick-actions"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="btn-quick-add"
            onClick={() => onQuickAdd(product, selectedColor)}
            aria-label={`Quick add ${product.name} in ${selectedColor.name}`}
          >
            QUICK ADD
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="product-details">
        <div className="product-name-row">
          <h3
            className="product-name"
            style={{ cursor: 'pointer' }}
            onClick={() => onQuickView(product, selectedColor)}
          >
            {product.name}
          </h3>
          <span className="product-price">{formattedPrice}</span>
        </div>

        <p className="product-subtitle">{product.subtitle}</p>

        {/* Color Swatches */}
        <div className="product-swatches" aria-label="Available Colours">
          {product.colors.map((color) => {
            const isSelected = color.name === selectedColor.name;
            return (
              <button
                key={color.name}
                type="button"
                className={`swatch-btn ${isSelected ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                title={color.name}
                aria-label={`Select color ${color.name}`}
              />
            );
          })}
          <span
            style={{
              fontSize: '0.7rem',
              color: 'var(--color-text-secondary)',
              marginLeft: '0.35rem'
            }}
          >
            {selectedColor.name}
          </span>
        </div>
      </div>
    </article>
  );
};
