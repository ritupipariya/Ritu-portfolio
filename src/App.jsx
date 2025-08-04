import React from 'react';
import './App.css'; // Import the CSS file
import academicProjects from './academic-projects.json';
import address from './address.json';
import certifications from './certification.json';
import emergencyContact from './emergency-contact.json';
import languages from './language-skill.json';
import socialProfiles from './social-profiles.json';

function App() {
  return (
    <div className="app-container">
      <h1 className="header">My Professional Profile</h1>

      <div className="card card-1">
        <h2 className="card-title">Academic Projects</h2>
        <ul className="card-list">
          {academicProjects.projects.map((project) => (
            <li key={project.title} className="card-list-item">
              <h3 className="project-title">{project.title}</h3>
              <p className="detail-text">🏗️ Tech Stack: {project.techStack.join(', ')}</p>
              <p className="detail-text">📝 Description: {project.description}</p>
              <p className="detail-text">🎯 Outcome: {project.outcome}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card card-2">
        <h2 className="card-title">Address</h2>
        <p className="detail-text">📍 Permanent Address: {address.permanentAddress.street}, {address.permanentAddress.city}, {address.permanentAddress.state} {address.permanentAddress.zip}, {address.permanentAddress.country}</p>
      </div>

      <div className="card card-3">
        <h2 className="card-title">Certifications</h2>
        <ul className="card-list">
          {certifications.certifications.map((cert) => (
            <li key={cert.courseName} className="card-list-item">
              <h3 className="project-title">📜 {cert.courseName}</h3>
              <p className="detail-text">🏛️ Platform: {cert.platform}</p>
              <p className="detail-text">📅 Date: {cert.date}</p>
              <p className="detail-text">
                🔗 Credential URL: <a href={cert.credentialURL} className="link">{cert.credentialURL}</a>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card card-4">
        <h2 className="card-title">Emergency Contact</h2>
        <div className="card-list-item">
          <p className="detail-text">👤 Name: {emergencyContact.name}</p>
          <p className="detail-text">👥 Relation: {emergencyContact.relation}</p>
          <p className="detail-text">📱 Phone: {emergencyContact.phone}</p>
          <p className="detail-text">🏠 Address: {emergencyContact.address.street}, {emergencyContact.address.city}, {emergencyContact.address.state} {emergencyContact.address.zip}, {emergencyContact.address.country}</p>
        </div>
      </div>

      <div className="card card-5">
        <h2 className="card-title">Language Skills</h2>
        <ul className="card-list">
          {languages.languages.map((language) => (
            <li key={language.language} className="card-list-item">
              <h3 className="project-title">🗣️ {language.language}</h3>
              <p className="detail-text">💬 Spoken Level: {language.spokenLevel}</p>
              <p className="detail-text">✍️ Written Level: {language.writtenLevel}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card card-6">
        <h2 className="card-title">Social Profiles</h2>
        <ul className="card-list">
          {socialProfiles.profiles.map((profile) => (
            <li key={profile.platform} className="card-list-item">
              <a href={profile.url} className="link">
                {profile.platform === 'LinkedIn' ? '🔗' : 
                 profile.platform === 'GitHub' ? '💻' : 
                 profile.platform === 'Twitter' ? '🐦' : '🌐'}
                <span className="platform-name">{profile.platform}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
