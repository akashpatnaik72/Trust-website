import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import SectionHeader from '../components/Shared/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { label: "Phone Support", value: "+91 98765 43210", desc: "Available for general trust inquiries", icon: <Phone size={22} />, href: "tel:+919876543210" },
    { label: "Email Support", value: "contact@kalamsevasamithi.org", desc: "For official proposals & partnerships", icon: <Mail size={22} />, href: "mailto:contact@kalamsevasamithi.org" },
    { label: "Trust Location", value: "Kalam Bhavan, Main Road, AP", desc: "APJ Abdul Kalam Seva Samithi", icon: <MapPin size={22} />, href: null }
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
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Please type your message.';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API submit
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-page animate-fade-in py-16">
      <div className="container">
        {/* Header */}
        <SectionHeader 
          tag="Reach Out" 
          title="Contact Us" 
          subtitle="Have questions about book distributions, volunteer schedules, or transparent reporting? Get in touch with our trustees directly."
        />

        {/* Contact Info Cards */}
        <div className="contact-info-grid" style={{ marginBottom: '60px' }}>
          {contactInfo.map((info, idx) => (
            <Card key={idx} className="contact-info-card text-center">
              <div className="contact-card-icon-wrapper">{info.icon}</div>
              <h4 className="contact-card-label font-display">{info.label}</h4>
              {info.href ? (
                <a href={info.href} className="contact-card-value text-primary font-bold">{info.value}</a>
              ) : (
                <span className="contact-card-value text-white font-bold">{info.value}</span>
              )}
              <p className="contact-card-desc text-muted mt-2">{info.desc}</p>
            </Card>
          ))}
        </div>

        {/* Message Form & Map Grid */}
        <div className="contact-details-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
          {/* Query Form */}
          <div className="contact-form-col">
            <Card className="form-card">
              {submitted ? (
                <div className="form-success text-center">
                  <CheckCircle size={48} className="text-success" style={{ margin: '0 auto 16px', color: 'var(--success)' }} />
                  <h3 className="font-display font-bold text-xl text-white">Message Received!</h3>
                  <p className="text-muted mt-3" style={{ fontSize: '0.95rem' }}>
                    Thank you for contacting us. We have received your query, and our trustees will respond to you shortly.
                  </p>
                  <Button variant="secondary" className="mt-5" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title font-display">Send a Message</h3>
                  <p className="form-intro text-muted" style={{ marginBottom: '20px' }}>Let us know how we can collaborate or assist you.</p>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your name"
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
                        placeholder="Email address"
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Type your questions or proposal here..."
                    ></textarea>
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  <Button type="submit" variant="primary" style={{ width: '100%' }} icon={<Send size={16} />}>
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Map Column */}
          <div className="contact-map-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
            <h3 className="section-subtitle font-display">Visit Our Trust Office</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              We encourage you to visit our primary office at Kalam Bhavan during our review days. You can also meet us at our school book drives.
            </p>
            
            <div className="contact-map-iframe-container" style={{ flexGrow: 1, minHeight: '320px', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <iframe 
                title="APJ Abdul Kalam Seva Samithi Office Map" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.6%2C16.5%2C80.7%2C16.6&layer=mapnik" 
                style={{ width: '100%', height: '100%', border: 'none' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
