import { useEffect, useState } from 'react';
import avatarFallback from '../assets/avatar.svg';
import '../styles/profile.css';

export default function Profile() {
  const [user, setUser] = useState({ fullName: 'Marry Doe', email: 'Marry@Gmail.Com', company: '' });

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('popx_user'));
      if (stored) setUser(stored);
    } catch {
      // use defaults
    }
  }, []);

  const displayName = user.fullName || user.email || 'User';
  const displayEmail = user.email || '';

  return (
    <div className="phone-frame">
      <div className="profile-container">
        <div className="profile-header">
          <h2 className="profile-heading">Account Settings</h2>
        </div>

        <div className="profile-card">
          <div className="profile-info">
            <div className="avatar-wrapper">
              <img
                src={avatarFallback}
                alt="Profile avatar"
                className="avatar-img"
              />
              <span className="avatar-badge">✎</span>
            </div>
            <div className="profile-details">
              <p className="profile-name">{displayName}</p>
              <p className="profile-email">{displayEmail}</p>
            </div>
          </div>

          <div className="profile-divider" />

          <p className="profile-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
