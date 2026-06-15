import { useState } from 'react';
import '../styles/inputfield.css';

export default function InputField({ label, type = 'text', value, onChange, onBlur, placeholder, error }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  const handleBlur = (e) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={`input-wrapper ${isActive ? 'active' : ''} ${error ? 'has-error' : ''}`}>
      <label className={`input-label ${isActive ? 'label-up' : ''}`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        placeholder={focused ? placeholder : ''}
        className="input-field"
        autoComplete="off"
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
