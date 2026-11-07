import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Heart, 
  ArrowRight, 
  X, 
  HeartHandshake, 
  CheckCircle, 
  MapPin, 
  Target,
  BookOpen,
  Activity,
  Compass
} from 'lucide-react';
import initiativesData from '../data/initiatives.json';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import SectionHeader from '../components/Shared/SectionHeader';

const Initiatives = () => {
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedInitiative(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Manage body scroll lock and prevent layout shift (page jumping)
  useEffect(() => {
    if (selectedInitiative) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedInitiative]);

  // Map category details dynamically to ensure tailored colors, labels, and icons
  const getCategoryDetails = (tag, title) => {
    const titleLower = title.toLowerCase();
    if (tag === 'Education') {
      return {
        label: 'Education',
        className: 'cat-education',
        icon: <BookOpen size={14} />
      };
    }
    if (titleLower.includes('blood')) {
      return {
        label: 'Blood Donation',
        className: 'cat-blood',
        icon: <Heart size={14} fill="currentColor" />
      };
    }
    if (titleLower.includes('medical') || titleLower.includes('health')) {
      return {
        label: 'Medical Camps',
        className: 'cat-medical',
        icon: <Activity size={14} />
      };
    }
    if (tag === 'Environment' || titleLower.includes('swach')) {
      return {
        label: 'Swachh Bharat',
        className: 'cat-swachh',
        icon: <Compass size={14} />
      };
    }
    if (titleLower.includes('buttermilk')) {
      return {
        label: 'Buttermilk Service',
        className: 'cat-buttermilk',
        icon: <Compass size={14} />
      };
    }
    if (titleLower.includes('food') || titleLower.includes('annadanam') || titleLower.includes('hospital')) {
      return {
        label: 'Food Distribution',
        className: 'cat-food',
        icon: <HeartHandshake size={14} />
      };
    }
    return {
      label: 'Community Service',
      className: 'cat-community',
      icon: <Users size={14} />
    };
  };

  return (
    <div className="initiatives-page animate-fade-in py-16">
      <div className="container">
        {/* Initiatives Header */}
        <SectionHeader 
          tag="Our Outreach Drives" 
          title="What We Do" 
          subtitle="APJ Abdul Kalam Seva Samithi runs organized campaigns focusing on rural education, school notebook distribution, hospital patient support, and civic hygiene."
        />

        {/* Initiatives Grid */}
        <div className="grid grid-cols-3" style={{ marginBottom: '60px' }}>
          {initiativesData.map((item) => {
            const cat = getCategoryDetails(item.tag, item.title);
            return (
              <Card key={item.id} className="initiative-page-card">
                <div className="initiative-card-img-wrapper">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="initiative-page-img"
                    loading="lazy"
                  />
                  <span className={`tag-overlay ${cat.className}`}>
                    {cat.icon}
                    <span>{cat.label}</span>
                  </span>
                </div>
                <div className="initiative-card-content">
                  <div className={`initiative-floating-icon ${cat.className}`}>
                    {cat.icon}
                  </div>
                  <h3 className="initiative-card-title font-display">{item.title}</h3>
                  <p className="initiative-card-summary">{item.summary}</p>
                  
                  <div className="initiative-card-footer-divider"></div>
                  
                  <div className="initiative-card-footer">
                    <div className="initiative-metric-wrapper">
                      <CheckCircle size={14} className="metric-icon" />
                      <span className="initiative-metric-text">{item.metric}</span>
                    </div>
                    <button 
                      className="initiative-view-btn" 
                      onClick={() => setSelectedInitiative(item)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} className="arrow-icon" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Detailed Modal Window */}
        {selectedInitiative && createPortal(
          <div 
            className="modal-overlay" 
            onClick={() => setSelectedInitiative(null)}
            aria-modal="true"
            role="dialog"
          >
            <div 
              className="modal-container-editorial" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="modal-close-btn-editorial" 
                onClick={() => setSelectedInitiative(null)}
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="modal-content-grid-editorial">
                {/* Visual Pane */}
                <div className="modal-visual-pane-editorial">
                  <img 
                    src={selectedInitiative.img} 
                    alt={selectedInitiative.title} 
                    className="modal-img-editorial" 
                  />
                  <div className="modal-visual-pill">
                    <CheckCircle size={14} style={{ marginRight: '6px' }} />
                    <span>{selectedInitiative.metric}</span>
                  </div>
                </div>

                {/* Text Context Pane */}
                <div className="modal-text-pane-editorial">
                  <span className="modal-category-label">{selectedInitiative.tag.toUpperCase()}</span>
                  <h3 className="modal-title-editorial font-display">{selectedInitiative.title}</h3>
                  <p className="modal-desc-text">{selectedInitiative.summary}</p>
                  
                  {/* Metadata Info Card */}
                  <div className="modal-info-card">
                    <div className="modal-info-row">
                      <Target className="modal-info-icon" size={16} />
                      <span className="modal-info-label">Focus Area</span>
                      <span className="modal-info-value">{selectedInitiative.focusArea}</span>
                    </div>
                    <div className="modal-info-row">
                      <Users className="modal-info-icon" size={16} />
                      <span className="modal-info-label">Beneficiaries</span>
                      <span className="modal-info-value">{selectedInitiative.beneficiaries}</span>
                    </div>
                    <div className="modal-info-row">
                      <Calendar className="modal-info-icon" size={16} />
                      <span className="modal-info-label">Started Since</span>
                      <span className="modal-info-value">{selectedInitiative.year}</span>
                    </div>
                    {selectedInitiative.location && (
                      <div className="modal-info-row">
                        <MapPin className="modal-info-icon" size={16} />
                        <span className="modal-info-label">Location</span>
                        <span className="modal-info-value">{selectedInitiative.location}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="modal-cta-group-editorial">
                    <a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                      <Button variant="primary" style={{ width: '100%' }} icon={<Heart size={16} fill="currentColor" />}>
                        Donate to Drive
                      </Button>
                    </a>
                    <Link to="/volunteer" style={{ flex: 1 }}>
                      <Button variant="secondary" style={{ width: '100%' }} icon={<HeartHandshake size={16} />}>
                        Volunteer With Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
};

export default Initiatives;
