import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import '../styles/signup.css';

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Full name is required';
  if (!/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
    errors.phone = 'Enter a valid 10-digit phone number';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address';
  if (form.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return errors;
}

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = () => {
    const allTouched = { fullName: true, phone: true, email: true, password: true };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('popx_user', JSON.stringify(form));
      navigate('/profile');
    }
  };

  const isFormComplete =
    form.fullName.trim() && form.phone.trim() && form.email.trim() && form.password.trim();

  return (
    <div className="phone-frame">
      <div className="signup-container">
        <div className="signup-header">
          <h1 className="signup-title">
            Create your<br />PopX account
          </h1>
        </div>

        <div className="signup-form">
          <InputField
            label="Full Name*"
            value={form.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            placeholder="Anil Kumar"
            error={errors.fullName}
          />
          <InputField
            label="Phone number*"
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            placeholder="9876543210"
            error={errors.phone}
          />
          <InputField
            label="Email address*"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="you@email.com"
            error={errors.email}
          />
          <InputField
            label="Password*"
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Min 6 characters"
            error={errors.password}
          />
          <InputField
            label="Company name"
            value={form.company}
            onChange={handleChange('company')}
            placeholder="Your company"
          />

          <div className="agency-group">
            <p className="agency-label">Are you an Agency?*</p>
            <div className="radio-group">
              {['yes', 'no'].map((val) => (
                <label className="radio-option" key={val}>
                  <input
                    type="radio"
                    name="agency"
                    value={val}
                    checked={form.isAgency === val}
                    onChange={handleChange('isAgency')}
                  />
                  <span className="radio-custom" />
                  {val.charAt(0).toUpperCase() + val.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          className={`btn-create ${!isFormComplete ? 'btn-create--disabled' : ''}`}
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
