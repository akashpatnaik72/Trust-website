import React from 'react';
import { Calendar, User, Award, MapPin } from 'lucide-react';
import awardsData from '../data/awards.json';
import guestsData from '../data/guests.json';
import Card from '../components/Shared/Card';
import SectionHeader from '../components/Shared/SectionHeader';

const Awards = () => {
  return (
    <div className="awards-page animate-fade-in py-16">
      <div className="container">
        {/* Page Header */}
        <SectionHeader
          tag="Community Trust"
          title="Appreciation & Recognition"
          subtitle="Honors, certificates, and reviews received from district collectors, local administrations, and public departments for active social service."
        />

        {/* Section 1: Citations & Awards */}
        <div className="awards-deck-section" style={{ marginBottom: '80px' }}>
          <SectionHeader
            title="Official Citations"
            subtitle="Citations and certificates earned for transparent operations in education and healthcare drives."
            align="left"
          />

          <div className="grid grid-cols-3">
            {awardsData.map((item) => (
              <Card key={item.id} className="award-card">
                <div className="award-image-container">
                  <img src={item.img} alt={item.title} className="award-img" loading="lazy" />
                  <span className="award-year-badge">{item.year}</span>
                </div>
                <div className="award-card-body">
                  <h3 className="award-card-title font-display">{item.title}</h3>
                  <span className="award-presenter text-primary">Presented by: {item.presentedBy}</span>
                  <p className="award-reason font-semibold text-sm">Reason: {item.reason}</p>
                  <p className="award-desc text-muted">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Encouraging Leadership */}
        <div className="guests-section">
          <SectionHeader
            title="People Who Encouraged Our Mission"
            subtitle="Meetings and reviews with administrative heads, police chiefs, and state coordinators that helped shape our safety and resource drives."
            align="left"
          />

          <div className="grid grid-cols-2">
            {guestsData.map((item) => (
              <Card key={item.id} className="guest-card">
                <div className="guest-card-grid">
                  <div className="guest-img-wrapper">
                    <img src={item.img} alt={item.name} className="guest-img" loading="lazy" />
                  </div>
                  <div className="guest-details">
                    <span className="guest-year-text text-primary"><Calendar size={12} /> {item.year}</span>
                    <h3 className="guest-name font-display">{item.name}</h3>
                    <span className="guest-title text-muted">{item.designation}</span>
                    <div className="guest-event-tag">Event: {item.event}</div>
                    <p className="guest-context-text">{item.context}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
