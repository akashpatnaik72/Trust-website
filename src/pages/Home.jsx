import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Users, 
  Award, 
  Droplet, 
  ArrowRight, 
  Activity, 
  ChevronRight,
  Camera,
  Shield,
  Calendar,
  ChevronDown,
  HeartHandshake
} from 'lucide-react';
import timelineData from '../data/timeline.json';
import galleryData from '../data/gallery.json';
import awardsData from '../data/awards.json';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import Badge from '../components/Shared/Badge';
import SectionHeader from '../components/Shared/SectionHeader';
import Counter from '../components/Shared/Counter';

// Handcrafted SVG curve wave separator for section transitions
const CurveDivider = ({ fill = "var(--bg-primary)", flip = false }) => (
  <div className="section-divider-curve-wrapper" style={{ 
    width: '100%', 
    overflow: 'hidden', 
    lineHeight: 0, 
    transform: flip ? 'rotate(180deg)' : 'none',
    backgroundColor: 'transparent',
    marginTop: '-1px',
    position: 'relative',
    zIndex: 3
  }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ 
      position: 'relative', 
      display: 'block', 
      width: '100%', 
      height: '40px',
      transform: 'scaleY(1.05)'
    }}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49,69.33,113,73.66,175.67,42.57,353.17,14,534.17,10.67,711.67,53.34Z" fill={fill}></path>
    </svg>
  </div>
);

const Home = () => {
  // Filter for the 4 homepage milestones
  const previewYears = ["2015", "2020", "2023", "2026"];
  const journeyPreview = timelineData.filter(item => previewYears.includes(item.year));

  // Get exactly 6 featured gallery photos
  const featuredPhotos = galleryData.photos.slice(0, 6);

  const services = [
    { 
      title: "Book Distribution", 
      desc: "Distributing notebooks, guides, and writing kits directly to government school students.", 
      icon: <BookOpen size={20} /> 
    },
    { 
      title: "Educational Support", 
      desc: "Sponsoring fees and providing coaching guidance for high school/intermediate students.", 
      icon: <GraduationCap size={20} /> 
    },
    { 
      title: "Student Welfare", 
      desc: "Supplying uniforms, school bags, and stationery to eliminate immediate material barriers.", 
      icon: <Heart size={20} /> 
    },
    { 
      title: "Blood Donation", 
      desc: "Coordinating donation camps in collaboration with local Red Cross and police wings.", 
      icon: <Droplet size={20} /> 
    },
    { 
      title: "Community Service", 
      desc: "Organizing weekly food drives at hospital shelters and providing disaster relief kits.", 
      icon: <Users size={20} /> 
    },
    { 
      title: "Health Awareness", 
      desc: "Conducting BP checkup drives, eye screening camps, and sanitation programs in villages.", 
      icon: <Activity size={20} /> 
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Premium Hero Section */}
      <section className="premium-hero-section section-dark">
        {/* Desktop Background image and Overlay */}
        <div className="premium-hero-bg">
          <img 
            src="/images/New_HomePage.jpg" 
            alt="APJ Abdul Kalam Seva Samithi school kids with notebooks" 
          />
        </div>
        <div className="premium-hero-overlay"></div>

        {/* Mobile top image (shown only on mobile screens) */}
        <div className="premium-hero-mobile-image">
          <img 
            src="/images/New_HomePage.jpg" 
            alt="APJ Abdul Kalam Seva Samithi school kids with notebooks" 
          />
          <div className="premium-hero-mobile-image-overlay"></div>
        </div>

        <div className="premium-hero-container">
          <div className="premium-hero-body">
            {/* Left Column: Premium Content Card */}
            <div className="premium-hero-content animate-hero-card">
              <div className="premium-trust-badge seq-fade-up seq-delay-1">
                <div className="trust-icon-wrapper">
                  <Shield size={14} className="trust-shield-icon" fill="currentColor" />
                </div>
                <div className="trust-text-wrapper">
                  <span className="trust-title">Registered Charitable Trust</span>
                  <span className="trust-subtitle">12A & 80G Certified</span>
                </div>
              </div>

              <h1 className="premium-hero-title font-display seq-fade-up seq-delay-2">
                Transforming Lives <br />
                Through Education
              </h1>
              <h2 className="premium-hero-subtitle font-display seq-fade-up seq-delay-2">
                One Child. One Family. One Future.
              </h2>
              
              <p className="premium-hero-description seq-fade-up seq-delay-3">
                The journey of APJ Abdul Kalam Seva Samithi began in 2015, and it was officially registered as a charitable trust in 2016. Inspired by the teachings and vision of Dr. Kalam, we prioritize rural literacy through book distribution drives, scholarship programs, and student welfare support.
              </p>

              <div className="premium-hero-actions">
                <Link to="/initiatives" className="seq-fade-up seq-delay-4">
                  <Button variant="primary" className="premium-btn-primary">
                    Explore Initiatives <ArrowRight size={16} className="btn-arrow-icon" style={{ marginLeft: '8px', transition: 'transform 0.2s ease' }} />
                  </Button>
                </Link>
                <Link to="/volunteer" className="seq-fade-up seq-delay-5">
                  <Button variant="secondary" className="premium-btn-secondary" icon={<Users size={16} />}>
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Empty spacer to let desktop hero image be visible */}
            <div className="premium-hero-image-spacer"></div>
          </div>

          {/* Floating Impact Stats Card - Animates only once when visible */}
          <div className="premium-hero-stats-card reveal-on-scroll reveal-fade-up reveal-stats">
            <div className="premium-stat-item">
              <div className="stat-icon-circle">
                <Calendar size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-value">Since 2015</span>
                <span className="stat-label">Serving Communities</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="premium-stat-item">
              <div className="stat-icon-circle">
                <Heart size={18} fill="currentColor" />
              </div>
              <div className="stat-info">
                <span className="stat-value">
                  <Counter target={5000} suffix="+" />
                </span>
                <span className="stat-label">Lives Impacted</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="premium-stat-item">
              <div className="stat-icon-circle">
                <HeartHandshake size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-value">
                  <Counter target={250} suffix="+" />
                </span>
                <span className="stat-label">Volunteers</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="premium-stat-item">
              <div className="stat-icon-circle">
                <GraduationCap size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-value">
                  <Counter target={40} suffix="+" />
                </span>
                <span className="stat-label">Schools Supported</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="premium-hero-scroll">
          <span className="scroll-text">Scroll to Discover</span>
          <ChevronDown size={18} className="scroll-arrow-icon" />
        </div>
      </section>
      
      {/* Wave Transition 1: Hero to Founder */}
      <CurveDivider fill="var(--bg-primary)" />

      {/* Section 1: Compact Founder Intro (Apple Split Layout) */}
      <section className="home-founder-intro-section py-20 bg-primary-bg section-light reveal-on-scroll reveal-fade-up">
        <div className="container">
          <div className="home-founder-split-layout">
            <div className="home-founder-img-block">
              <div className="home-founder-frame">
                <img 
                  src="/images/new_venkatraophoto.jpg" 
                  alt="LN VEMULA VENKATRAO, Founder of APJ Abdul Kalam Seva Samithi" 
                  className="home-founder-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="home-founder-text-block">
              <span className="founder-mini-title text-primary">Leadership & Governance</span>
              <h2 className="founder-section-title font-display">Meet Our Founder</h2>
              <div className="founder-identity-row">
                <h3 className="founder-section-name font-display">LN VEMULA VENKATRAO</h3>
                <span className="founder-section-role">Founder & President</span>
              </div>
              <p className="founder-short-intro">
                LN VEMULA VENKATRAO started the journey of APJ Abdul Kalam Seva Samithi in 2015, officially establishing the trust in 2016 to put Dr. Kalam’s ideals of student literacy and civic responsibility into direct action. Operating on a completely voluntary basis, he focuses on ensuring children in rural government schools have the textbooks, uniforms, and resources necessary to continue their schooling.
              </p>
              <div className="founder-know-more-btn-row">
                <Link to="/founder">
                  <Button variant="primary">Know More About Our Founder <ArrowRight size={16} /></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition 2: Founder to Services */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 2: Our Core Services (Minimal Icon Grid) */}
      <section className="home-services-section py-20 bg-secondary-bg section-light reveal-on-scroll reveal-fade-up">
        <div className="container">
          <SectionHeader 
            tag="Direct Action Projects" 
            title="Our Core Services" 
            subtitle="APJ Abdul Kalam Seva Samithi implements targeted, volunteer-led campaigns focused on education, student care, and immediate community health support."
          />
          <div className="home-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="home-service-icon-card">
                <div className="service-icon-bubble">{svc.icon}</div>
                <h3 className="service-card-title font-display">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition 3: Services to Journey */}
      <CurveDivider fill="var(--bg-alternate)" />

      {/* Section 3: Journey Preview (Modern timeline stepper) */}
      <section className="home-journey-preview-section py-20 bg-alternate-bg section-light reveal-on-scroll reveal-fade-up">
        <div className="container">
          <SectionHeader 
            tag="A Decade of Trust" 
            title="Our Journey Since 2015" 
            subtitle="An authentic timeline documenting nearly ten years of dedicated educational campaigns and social welfare initiatives."
          />
          
          <div className="home-journey-stepper-container">
            <div className="stepper-horizontal-line"></div>
            <div className="stepper-steps-grid">
              {journeyPreview.map((item) => (
                <div key={item.year} className="stepper-step-node">
                  <div className="step-circle-marker">
                    <span className="step-marker-year">{item.year}</span>
                  </div>
                  <div className="step-card-content">
                    <h4 className="step-card-title font-display">{item.title}</h4>
                    <p className="step-card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-journey-cta-btn-row text-center mt-12">
            <Link to="/about">
              <Button variant="primary">View Complete Journey <ChevronRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Transition 4: Journey to Gallery */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 4: Featured Gallery (Apple-style masonry gallery with large photos) */}
      <section className="home-gallery-preview-section py-20 bg-secondary-bg section-light reveal-on-scroll reveal-scale">
        <div className="container">
          <SectionHeader 
            tag="Visual Records" 
            title="Featured Gallery" 
            subtitle="A curated selection of real photographs documenting our book distributions, blood donor camps, and hospital outreach programs."
          />

          <div className="home-gallery-grid-collage">
            {featuredPhotos.map((photo) => (
              <div key={photo.id} className="gallery-card-interactive">
                <div className="gallery-card-image-box">
                  <img src={photo.url} alt={photo.title} className="gallery-card-img" loading="lazy" />
                </div>
                <div className="gallery-card-info-box">
                  <div className="gallery-card-info-header">
                    <span className="gallery-card-badge">{photo.year}</span>
                    <span className="gallery-card-arrow">→</span>
                  </div>
                  <h4 className="gallery-card-title">{photo.event}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="home-gallery-cta-btn-row text-center mt-12">
            <Link to="/gallery">
              <Button variant="primary">View Complete Gallery <Camera size={16} style={{ marginLeft: '4px' }} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Transition 5: Gallery to Awards */}
      <CurveDivider fill="var(--bg-primary)" />

      {/* Section 5: Awards & Recognition (Elegant horizontal cards) */}
      <section className="home-awards-preview-section py-20 bg-primary-bg section-light reveal-on-scroll reveal-fade-up">
        <div className="container">
          <SectionHeader 
            tag="Official Recognition" 
            title="Honors & Recognition" 
            subtitle="Appreciation citations received from regional administrative collectorates, forest departments, and Red Cross chapters."
          />

          <div className="home-awards-stamp-grid">
            {awardsData.map((award) => (
              <div key={award.id} className="home-award-stamp-card">
                <div className="stamp-edge-border">
                  <div className="stamp-icon-row">
                    <Award size={28} className="text-primary" />
                    <span className="stamp-year">{award.year}</span>
                  </div>
                  <h3 className="stamp-title font-display">{award.title}</h3>
                  <span className="stamp-presenter">{award.presentedBy}</span>
                  <p className="stamp-desc">{award.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition 6: Awards to CTA */}
      <CurveDivider fill="var(--bg-alternate)" />

      {/* Section 6: Volunteer CTA (Apple style minimal with whitespace) */}
      <section className="home-volunteer-cta py-20 bg-alternate-bg section-light reveal-on-scroll reveal-scale">
        <div className="container">
          <div className="home-volunteer-cta-banner">
            <div className="cta-banner-content text-center">
              <span className="cta-mini-tag text-primary">Join Our Cause</span>
              <h2 className="cta-banner-title font-display">Help Us Carry Forward the Legacy</h2>
              <p className="cta-banner-text max-w-xl mx-auto">
                Your support directly translates into study books, stationery kits, and merit scholarships for government school children. Join hands as a volunteer or contribute to our outreach drives.
              </p>
              <div className="cta-banner-actions">
                <a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={<Heart size={16} fill="currentColor" />}>Support Our Drives</Button>
                </a>
                <Link to="/volunteer">
                  <Button variant="accent">Join Our Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
