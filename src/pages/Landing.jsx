import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="phone-frame">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Welcome to PopX</h1>
          <p className="landing-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>
        <div className="landing-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
