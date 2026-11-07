import React, { useState } from 'react';
import { HeartHandshake, BookOpen, Clock, Heart, Users, HelpCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import SectionHeader from '../components/Shared/SectionHeader';

const Volunteer = () => {
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    skills: '',
    availability: '',
    interest: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion states
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    { title: "Make Real Impact", desc: "Hand textbooks and scholarship checks directly to government school students who need them.", icon: <BookOpen size={20} /> },
    { title: "Find Community", desc: "Collaborate with dedicated youth volunteers and community organizers sharing a common vision.", icon: <Users size={20} /> },
    { title: "Gain Recognition", desc: "Receive official volunteer certificates and appreciation documents for active social service.", icon: <Heart size={20} /> },
    { title: "Grow as a Person", desc: "Develop communication skills, operational management, and leadership qualities through public drives.", icon: <Clock size={20} /> }
  ];

  const faqs = [
    { q: "Who can volunteer with the trust?", a: "Anyone passionate about rural literacy, education support, and social welfare can volunteer. We welcome students, working professionals, and senior citizens alike." },
    { q: "What is the time commitment required?", a: "We operate on a voluntary basis. You can choose to join our weekend book distribution drives, participate in emergency blood campaigns, or support general administration whenever you are available." },
    { q: "Do I need to pay any registration fee?", a: "No, becoming a volunteer is completely free. We do not charge any registration or membership fees to join our drives." },
    { q: "Will I receive a volunteer certificate?", a: "Yes, the trust issues official certificates of appreciation and volunteer logs to active participants, acknowledging their contributions to public service drives." }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.interest.trim()) newErrors.interest = 'Please describe your area of interest.';
    
    // Simple email validation if email is entered
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Hello!
I would like to volunteer with APJ Abdul Kalam Seva Samithi.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Availability: ${formData.availability || 'N/A'}
Skills: ${formData.skills || 'N/A'}
Message: ${formData.interest}

Please let me know the next steps to join as a volunteer.`;

      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        skills: '',
        availability: '',
        interest: ''
      });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="volunteer-page animate-fade-in py-16">
      <div className="container">
        {/* Header */}
        <SectionHeader 
          tag="Community Support" 
          title="Become a Volunteer" 
          subtitle="Join hands to carry forward Dr. Kalam's legacy. Give your time, skills, and energy to support rural literacy and community welfare."
        />

        {/* Benefits & Form Grid */}
        <div className="volunteer-grid" style={{ marginBottom: '80px' }}>
          {/* Benefits Column */}
          <div className="volunteer-benefits-col">
            <h3 className="section-subtitle font-display">Why Volunteer With Us?</h3>
            <p className="benefits-intro text-muted">
              Volunteering is a mutually rewarding journey. We work closely with school bodies to deliver direct, transparent impact. Here is what you gain:
            </p>
            
            <div className="benefits-list">
              {benefits.map((b, idx) => (
                <div key={idx} className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <div className="benefit-body">
                    <h4 className="benefit-title font-display">{b.title}</h4>
                    <p className="benefit-desc text-muted">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="volunteer-form-col">
            <Card className="form-card">
              {submitted ? (
                <div className="form-success text-center">
                  <CheckCircle size={48} className="text-success" style={{ margin: '0 auto 16px', color: 'var(--success)' }} />
                  <h3 className="font-display font-bold text-xl text-white">Application Prepared!</h3>
                  <p className="text-muted mt-3" style={{ fontSize: '0.95rem' }}>
                    Your volunteer details are ready. Please send the WhatsApp message to complete your volunteer request.
                  </p>
                  <Button variant="secondary" className="mt-5" onClick={() => setSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="volunteer-form">
                  <h3 className="form-title font-display">Register as a Volunteer</h3>
                  <p className="form-intro text-muted">Fields marked with * are required.</p>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group-row">
                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="phone">Phone *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Phone number"
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Email address (optional)"
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="skills">Key Skills</label>
                      <input 
                        type="text" 
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. Teaching, Logistics, Media"
                      />
                    </div>

                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="availability">Availability</label>
                      <select 
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select availability</option>
                        <option value="Weekends">Weekends Only</option>
                        <option value="Weekdays">Weekdays Only</option>
                        <option value="Flexible">Flexible / On-call</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="interest">Area of Interest & Why you want to join *</label>
                    <textarea 
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Tell us what drives you and how you wish to help..."
                    ></textarea>
                    {errors.interest && <span className="form-error-msg">{errors.interest}</span>}
                  </div>

                  <Button type="submit" variant="primary" style={{ width: '100%' }} icon={<HeartHandshake size={18} />}>
                    Submit Application
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="faq-section">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Have questions about our volunteer protocols? Read through our standard operations below."
          />

          <div className="faq-accordion-container max-w-2xl mx-auto">
            {faqs.map((faq, idx) => {
              const isSelected = openFaq === idx;
              return (
                <div key={idx} className="faq-accordion-item" style={{ borderBottom: '1px solid var(--border)' }}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="faq-question-btn"
                    aria-expanded={isSelected}
                  >
                    <span className="faq-q-text font-display">{faq.q}</span>
                    {isSelected ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  
                  {isSelected && (
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text text-muted">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
