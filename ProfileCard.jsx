import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.FN56raPRRToFfFwgZZJEagAAAA&pid=Api&P=0&h=180"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">VARSHA</h2>
      <p className="profile-title">Software Developer</p>
      <p className="profile-description">
        Developing a software by using of java.
        
      </p>
      <button className="profile-button">Follow</button>
    </div>
  );
};

export default ProfileCard;
