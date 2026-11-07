import React, { useState } from 'react';
import { 
  Shield, 
  BookOpen, 
  Heart, 
  Eye, 
  Target, 
  Compass, 
  ChevronDown, 
  DollarSign, 
  CheckCircle
} from 'lucide-react';
import timelineData from '../data/timeline.json';
import Card from '../components/Shared/Card';
import SectionHeader from '../components/Shared/SectionHeader';

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

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const values = [
    { 
      number: "01", 
      title: "Absolute Transparency", 
      desc: "Every notebook distributed and every rupee spent is documented, providing fully auditable and verifiable records for contributors.", 
      icon: <Shield size={20} /> 
    },
    { 
      number: "02", 
      title: "Direct Fieldwork Delivery", 
      desc: "Volunteers package and carry items directly to schools, handing educational materials directly to rural students.", 
      icon: <BookOpen size={20} /> 
    },
    { 
      number: "03", 
      title: "Compassionate Health Care", 
      desc: "Coordinating regular blood donation drives and hospital shelter support to help local families during times of crisis.", 
      icon: <Heart size={20} /> 
    },
    { 
      number: "04", 
      title: "Active Citizen Duty", 
      desc: "Guided by Dr. Kalam's values, we engage youth in civic responsibility, environmental sanitations, and public hygiene drives.", 
      icon: <Compass size={20} /> 
    }
  ];

  const faqs = [
    {
      question: "Is APJ Abdul Kalam Seva Samithi a registered charitable trust?",
      answer: "Yes, APJ Abdul Kalam Seva Samithi is an officially registered non-profit charitable trust, established in 2016 following initial service activities that began in 2015. We operate under strict compliance with administrative regulations, and all our operations are audited regularly."
    },
    {
      question: "What is the primary focus of the trust's activities?",
      answer: "Our primary objective since 2015 has been supporting student education in rural government schools. This includes conducting notebook and textbook distribution drives, sponsoring school fee assistance, and supplying stationery kits. We also coordinate blood donation drives and run hospital patient support services."
    },
    {
      question: "How can I verify where my donation goes?",
      answer: "We practice direct delivery. When books, bags, or scholarships are distributed, our volunteers hand them over directly to students at school premises in coordination with headmasters. We document our distributions transparently, providing direct updates and visual confirmation to our contributors."
    },
    {
      question: "Can I volunteer for the book distribution or health drives?",
      answer: "Yes, we are a volunteer-driven organization. If you wish to join our drives, help package study kits, or assist in organizing rural health camps, you can sign up via our Volunteer page. We welcome youth and citizens dedicated to community service."
    },
    {
      question: "Does the trust have any political or religious affiliation?",
      answer: "No. APJ Abdul Kalam Seva Samithi is a completely independent, secular, and non-political organization. Our service is guided solely by the humanitarian ideals and educational vision of Dr. APJ Abdul Kalam."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="about-page animate-fade-in py-16 bg-primary-bg section-light">
      <div className="container">
        
        {/* Section 1: Our Journey (Full Documentary Alternating Timeline) */}
        <section id="journey" className="about-journey-section py-8">
          <SectionHeader 
            tag="A Decade of Trust" 
            title="Our Journey" 
            subtitle="Explore our year-by-year project logs documenting nearly a decade of genuine educational service and local community welfare support."
          />

          <div className="doc-timeline">
            <div className="timeline-line"></div>
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const hasImg = !!item.img;
              return (
                <div key={item.year} className={`timeline-block ${isEven ? 'block-left' : 'block-right'} ${hasImg ? 'has-img' : 'no-img'}`}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-card-container">
                    <Card className="timeline-journey-card">
                      <div className="journey-card-layout">
                        {hasImg && (
                          <div className="journey-image-part">
                            <img src={item.img} alt={`Kalam Seva Samithi milestone event in ${item.year}`} className="journey-img" loading="lazy" />
                          </div>
                        )}
                        <div className="journey-text-part">
                          <div className="journey-header">
                            <span className="journey-year">{item.year}</span>
                            <h3 className="journey-title font-display">{item.title}</h3>
                          </div>
                          <p className="journey-desc">{item.description}</p>
                          <ul className="journey-bullets">
                            {item.highlights.map((highlight, index) => (
                              <li key={index}>
                                <span className="journey-bullet-dot"></span>
                                <span className="journey-bullet-text">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          {!hasImg && (
                            <div className="journey-no-img-note">
                              * During our early years, our volunteer team focused entirely on manual school distribution drives rather than media documentation.
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Wave Transition 1: Journey to About Trust */}
      <CurveDivider fill="var(--bg-primary)" />

      {/* Section 2: About Our Trust (Asymmetrical Offset Split Layout) */}
      <section className="about-trust-section py-20 bg-primary-bg section-light">
        <div className="container">
          <div className="about-trust-offset-layout">
            <div className="offset-headline-block">
              <span className="about-trust-tag text-primary">Core Objective</span>
              <h2 className="about-trust-offset-title font-display">Ensuring Every Child Has the Resources to Learn</h2>
            </div>
            <div className="offset-body-block">
              <p className="about-trust-offset-text">
                Starting its journey in 2015 and officially established as a registered charitable trust in 2016, APJ Abdul Kalam Seva Samithi is a volunteer-driven organization. Driven by Dr. Kalam's vision of rural literacy, we work directly with village headmasters to provide textbooks, academic kits, and merit scholarships to students in remote, underfunded government schools.
              </p>
              <p className="about-trust-offset-text">
                Beyond educational support, we coordinate regular blood donation camps and run Weekly Hospital Shelter Food Services (Annadanam), providing direct, auditable delivery of community relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition 2: About Trust to Vision & Mission */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 3 & 4: Vision & Mission (Contrasting Layouts) */}
      <section className="about-vision-mission-contrasted py-20 bg-secondary-bg section-light">
        <div className="container">
          <div className="about-vision-mission-grid-wrapper">
            <div className="vision-column-block">
              <div className="vision-header-row">
                <Eye className="text-primary" size={24} />
                <h3 className="vision-title font-display">Our Vision</h3>
              </div>
              <p className="vision-text">
                We envision a society where every student in rural and government schools has access to notebooks, writing materials, and equal educational guidance. Inspired by Dr. Kalam's conviction that the strength of a nation lies in its youth and literacy, we strive to remove material barriers that cause school dropouts, helping children achieve their academic potential.
              </p>
            </div>

            <div className="vision-column-block highlight-column">
              <div className="vision-header-row">
                <Target className="text-primary" size={24} />
                <h3 className="vision-title font-display">Our Mission</h3>
              </div>
              <ul className="mission-list">
                <li>
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>Conduct regular, structured book and kit distribution drives directly at rural schools.</span>
                </li>
                <li>
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>Sponsor tuition and fee support to prevent high-school dropouts.</span>
                </li>
                <li>
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>Coordinate blood donation drives and village check-up campaigns with Red Cross chapters.</span>
                </li>
                <li>
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>Maintain a 100% voluntary, public-supported administration model.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition 3: Vision & Mission to Core Values */}
      <CurveDivider fill="var(--bg-alternate)" />

      {/* Section 5: Core Values (Minimalist Numbered List Layout) */}
      <section className="about-values-stepped py-20 bg-alternate-bg section-light">
        <div className="container">
          <SectionHeader 
            title="Our Founding Principles" 
            subtitle="Authenticity, transparency, and a strong sense of service guide all our outreach programs."
          />
          <div className="about-stepped-values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-step-card">
                <div className="value-step-num-row">
                  <span className="value-step-number text-primary">{val.number}</span>
                  <div className="value-step-icon">{val.icon}</div>
                </div>
                <h4 className="value-step-title font-display">{val.title}</h4>
                <p className="value-step-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition 4: Core Values to Funding */}
      <CurveDivider fill="var(--bg-primary)" />

      {/* Section 6: Funding (Emphasized Callout Layout) */}
      <section className="about-funding-section py-20 bg-primary-bg section-light">
        <div className="container">
          <div className="about-funding-callout-card">
            <div className="funding-alert-side">
              <DollarSign size={32} className="text-primary" />
            </div>
            <div className="funding-body-side">
              <h3 className="funding-callout-title font-display">Our Funding</h3>
              <p className="funding-callout-text">
                APJ Abdul Kalam Seva Samithi operates with absolute transparency. We do not receive corporate block grants or government funding; our operations are supported entirely by individual public donations and volunteer contributions.
              </p>
              <p className="funding-callout-text">
                Every rupee is directly utilized for academic kits, books, school supplies, and merit scholarships. Since our administrative and logistics overhead is paid for out-of-pocket by our volunteer board members, 100% of public donations reach the students and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition 5: Funding to FAQ */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 7: FAQ (Collapsible Accordion Panels) */}
      <section className="about-faq-section py-20 bg-secondary-bg section-light">
        <div className="container">
          <SectionHeader 
            tag="General Queries" 
            title="Frequently Asked Questions" 
            subtitle="Get clear, transparent answers about our trust's operations, registration status, and how you can get involved."
          />
          <div className="faq-container">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-item-wrapper ${isOpen ? 'faq-open' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text font-display">{faq.question}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-answer-pane">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
