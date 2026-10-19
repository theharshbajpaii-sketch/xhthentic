import React, { useState } from 'react';
import type { CartItem, CheckoutFormState } from '../types';
import { CloseIcon, CheckIcon, ShieldIcon } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderPlaced
}) => {
  const [form, setForm] = useState<CheckoutFormState>({
    fullName: 'Aditya Sharma',
    email: 'aditya.sharma@example.com',
    phone: '+91 98765 43210',
    address: '42, Lodhi Estate, Near Khan Market',
    city: 'New Delhi',
    state: 'Delhi',
    postalCode: '110003',
    paymentMethod: 'upi'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(subtotal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderNumber(`XTH-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderComplete(true);
      onOrderPlaced();
    }, 900);
  };

  const handleCloseAll = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="checkout-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleCloseAll}
          aria-label="Close Checkout"
        >
          <CloseIcon size={20} />
        </button>

        {orderComplete ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}
            >
              <CheckIcon size={28} />
            </div>

            <span
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                fontWeight: 600
              }}
            >
              DEMO ORDER CONFIRMED
            </span>

            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Thank You, {form.fullName.split(' ')[0]}
            </h2>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto 2rem' }}>
              Your order <strong>#{orderNumber}</strong> has been logged for this demonstration. An email confirmation has been prepared for {form.email}.
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-ivory)',
                padding: '1.25rem',
                border: '1px solid var(--color-border)',
                maxWidth: '420px',
                margin: '0 auto 2rem',
                textAlign: 'left',
                fontSize: '0.8rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Status:</span>
                <span style={{ fontWeight: 600 }}>Demo Order Placed</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Delivery To:</span>
                <span style={{ fontWeight: 500 }}>{form.city}, {form.postalCode}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Payment Mode:</span>
                <span style={{ fontWeight: 500, textTransform: 'uppercase' }}>{form.paymentMethod} (Simulated)</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary"
              onClick={handleCloseAll}
            >
              <span>RETURN TO COLLECTION</span>
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 600
                }}
              >
                SECURE CHECKOUT DEMO
              </span>
              <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>
                Order Summary & Details
              </h2>
            </div>

            {/* Clear Demonstration Notice */}
            <div className="checkout-demo-banner">
              <strong>Demonstration Mode:</strong> This is a frontend prototype. No real payments are processed, and no real credit card or bank credentials are required or stored.
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Contact Information */}
                <div>
                  <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                    1. Contact Information
                  </h4>
                  <div className="form-grid two-col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        className="form-input"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="form-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                    2. Shipping Address
                  </h4>
                  <div className="form-grid" style={{ marginBottom: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="address">Street Address</label>
                      <input
                        id="address"
                        type="text"
                        required
                        className="form-input"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-grid two-col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        required
                        className="form-input"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="postalCode">PIN Code</label>
                      <input
                        id="postalCode"
                        type="text"
                        required
                        className="form-input"
                        value={form.postalCode}
                        onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection (Demo) */}
                <div>
                  <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                    3. Demo Payment Method
                  </h4>
                  <div className="payment-options">
                    <label
                      className={`payment-option-label ${form.paymentMethod === 'upi' ? 'active' : ''}`}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          type="radio"
                          name="payment"
                          checked={form.paymentMethod === 'upi'}
                          onChange={() => setForm({ ...form, paymentMethod: 'upi' })}
                        />
                        <span>UPI / QR (Instant Demo Simulation)</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Google Pay, PhonePe, Paytm</span>
                    </label>

                    <label
                      className={`payment-option-label ${form.paymentMethod === 'card' ? 'active' : ''}`}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          type="radio"
                          name="payment"
                          checked={form.paymentMethod === 'card'}
                          onChange={() => setForm({ ...form, paymentMethod: 'card' })}
                        />
                        <span>Credit / Debit Card (Demo)</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Visa, Mastercard</span>
                    </label>

                    <label
                      className={`payment-option-label ${form.paymentMethod === 'cod' ? 'active' : ''}`}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          type="radio"
                          name="payment"
                          checked={form.paymentMethod === 'cod'}
                          onChange={() => setForm({ ...form, paymentMethod: 'cod' })}
                        />
                        <span>Cash On Delivery</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Pay on arrival</span>
                    </label>
                  </div>
                </div>

                {/* Order Totals */}
                <div
                  style={{
                    backgroundColor: 'var(--color-ivory)',
                    padding: '1.25rem',
                    border: '1px solid var(--color-border)',
                    marginTop: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Items ({items.reduce((s, i) => s + i.quantity, 0)}):</span>
                    <span>{formattedSubtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Standard Delivery:</span>
                    <span style={{ color: '#166534', fontWeight: 500 }}>FREE</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '1rem',
                      fontWeight: 600,
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--color-border)'
                    }}
                  >
                    <span>Total Demo Amount</span>
                    <span>{formattedSubtotal}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1.1rem' }}
                  id="place-order-btn"
                >
                  {isSubmitting ? (
                    <span>PROCESSING DEMO ORDER...</span>
                  ) : (
                    <span>PLACE DEMO ORDER · {formattedSubtotal}</span>
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <ShieldIcon size={14} />
                  <span>256-Bit SSL Demo Protection · 7-Day Hassle-Free Returns</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
