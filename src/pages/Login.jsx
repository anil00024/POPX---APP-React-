import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const isValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.password.length >= 1;

  const handleLogin = () => {
    const newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address';
    if (!form.password) newErrors.password = 'Password is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const existing = JSON.parse(localStorage.getItem('popx_user') || '{}');
    localStorage.setItem('popx_user', JSON.stringify({ ...existing, email: form.email }));
    navigate('/profile');
  };

  return (
    <div className="phone-frame">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Signin to your<br />PopX account</h1>
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        <div className="login-form">
          <InputField
            label="Email Address"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="Enter email address"
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            placeholder="Enter password"
            error={errors.password}
          />
        </div>

        <button
          className={`btn-login ${isValid ? 'btn-login--active' : 'btn-login--disabled'}`}
          onClick={handleLogin}
          disabled={!isValid}
        >
          Login
        </button>
      </div>
    </div>
  );
}
