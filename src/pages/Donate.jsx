import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Landmark, 
  ShieldCheck, 
  QrCode, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  ChevronDown, 
  Award, 
  Gift, 
  Star, 
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import Card from '../components/Shared/Card';
import SectionHeader from '../components/Shared/SectionHeader';
import Badge from '../components/Shared/Badge';
import Button from '../components/Shared/Button';

const Donate = () => {
  // States
  const [selectedImpact, setSelectedImpact] = useState('₹1,000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Constants / Data
  const impactTiers = [
    { amount: '₹500', desc: 'Sponsors school textbooks, notebooks, and writing kits for a student in a rural school.', icon: <Gift size={20} /> },
    { amount: '₹1,000', desc: 'Provides school uniforms, comfortable footwear, and a study bag for a rural government school student.', icon: <Users size={20} /> },
    { amount: '₹2,500', desc: 'Sponsors nutritious warm meals for 50 patient attendants at a regional government hospital shelter.', icon: <Heart size={20} /> },
    { amount: '₹5,000', desc: 'Funds the plantation and community maintenance of 25 native shade-giving tree saplings.', icon: <TrendingUp size={20} /> },
    { amount: '₹10,000', desc: 'Sponsors intermediate college tuition or academic scholarships for top meritorious rural students.', icon: <Landmark size={20} /> },
  ];

  const campaigns = [
    {
      id: 'notebook-drive',
      title: 'Rural School Notebook Drive',
      desc: 'Supplying educational resources, notebooks, and reference materials directly to students in underfunded rural schools to ensure zero dropouts.',
      raised: 130000,
      target: 200000,
      image: '/images/venkatrao_books_img1.JPG',
      tag: 'Education'
    },
    {
      id: 'scholarship-aid',
      title: 'Student Scholarship Aid',
      desc: 'Supporting high-performing government school students from economically weak backgrounds to transition into intermediate colleges and higher studies.',
      raised: 144000,
      target: 300000,
      image: '/images/venkatrao_helpingschool_img1.JPG',
      tag: 'Scholarship'
    },
    {
      id: 'food-outreach',
      title: 'Hospital Shelter & Food Outreach',
      desc: 'Distributing warm, hygienic meals daily to patient attendants and daily wage earners seeking medical care at regional government medical centers.',
      raised: 120000,
      target: 150000,
      image: '/images/venkatrao_annadaanam (1).JPG',
      tag: 'Welfare'
    }
  ];

  const bankDetails = {
    accountHolder: 'APJ Abdul Kalam Seva Samithi',
    accountNo: '123456789012',
    ifsc: 'SBIN0001234',
    bankName: 'State Bank of India',
    branch: 'Vijayawada Main Branch',
    upiId: 'kalamsevasamithi@upi',
    phone: '+919999999999',
    email: 'support@kalamsevasamithi.org',
    whatsapp: 'https://wa.me/919999999999?text=Hello,%20I%20have%20made%20a%20donation%20to%20the%20APJ%20Abdul%20Kalam%20Seva%20Samithi.'
  };

  const faqData = [
    {
      q: 'Is my donation eligible for tax exemption?',
      a: 'Yes, APJ Abdul Kalam Seva Samithi is a registered public charitable trust. All donations are 50% tax-exempt under Section 80G of the Income Tax Act.'
    },
    {
      q: 'How does the trust maintain operational transparency?',
      a: 'We maintain absolute auditing. 100% of public donations go directly to fieldwork purchases (like school notebooks, merit awards, and shelter food raw materials). Internal volunteers independently sponsor operational overheads (website, printing, transport).'
    },
    {
      q: 'How long does it take to receive my 80G tax receipt?',
      a: 'Once you email or WhatsApp your payment transaction screenshot and PAN number, we process and issue your digital 80G certificate via email within 7 to 10 working days.'
    },
    {
      q: 'Can I make international donations?',
      a: 'Currently, we are only licensed to accept domestic donations in Indian Rupees (INR) via Indian banks or UPI. We do not support FCRA international cards or foreign bank accounts at this time.'
    },
    {
      q: 'Can I choose which specific school or campaign my donation goes to?',
      a: 'Yes. You can select one of our active campaigns, or mention your specific preference (e.g., School Book Drive) in the notes section of your bank transfer or when sending us the transaction confirmation screenshot.'
    }
  ];

  const impactGallery = [
    { title: 'Rural Notebooks Drive', img: '/images/venkatrao_books_img2.JPG', tag: 'Notebook Distribution' },
    { title: 'Pratibha Puraskar Awards', img: '/images/venkatrao_helpingschool_img1.JPG', tag: 'Scholarships' },
    { title: 'Annadanam Shelter Meals', img: '/images/venkatrao_annadaanam (2).JPG', tag: 'Community Welfare' }
  ];

  // Logic
  const handleCopy = (text, fieldName) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2000);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const getImpactDescription = () => {
    if (customAmount) {
      return `Every single rupee of your custom contribution of ₹${parseInt(customAmount).toLocaleString()} directly funds notebooks, student support, and medical shelter food camps with 100% radical transparency.`;
    }
    const matching = impactTiers.find(tier => tier.amount === selectedImpact);
    return matching ? matching.desc : '';
  };

  const handleCampaignDonate = (campaignGoal) => {
    setSelectedImpact('');
    setCustomAmount(campaignGoal.toString());
    const el = document.getElementById('impact-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="donate-page-wrapper animate-fade-in">
      {/* Hero Section */}
      <section className="donate-hero-section">
        <div className="container">
          <div className="donate-hero-badge">
            <Heart size={16} fill="var(--accent-gold)" />
            <span>100% Tax Exempt Trust under 80G</span>
          </div>
          <h1 className="donate-hero-title">
            Empower Underprivileged Lives <span>Through Compassion</span>
          </h1>
          <p className="donate-hero-subtitle">
            Join our mission to supply study kits to rural schools, sponsor merit scholarships, and provide daily shelter food drives with audited transparency.
          </p>
          <div className="donate-hero-actions">
            <Button variant="primary" className="donate-hero-cta px-8 py-4" onClick={() => scrollToSection('payment-methods')}>
              Donate Now <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </Button>
            <Button variant="outline" className="donate-hero-cta px-8 py-4" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }} onClick={() => scrollToSection('active-campaigns')}>
              Explore Campaigns
            </Button>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="why-donate-section">
        <div className="container">
          <SectionHeader 
            tag="Why Support Us" 
            title="Sponsor with Complete Trust"
            subtitle="We run on radical transparency. Here is how your donation translates into grassroot-level changes." 
          />
          <div className="why-donate-grid">
            <Card className="why-donate-card">
              <div className="why-donate-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h4 className="why-donate-card-title">100% Direct Impact</h4>
              <p className="why-donate-card-desc">No administrative commissions or deductions. All operations are funded directly by our founders and volunteers.</p>
            </Card>

            <Card className="why-donate-card">
              <div className="why-donate-icon-box">
                <Award size={28} />
              </div>
              <h4 className="why-donate-card-title">Tax Benefits (80G)</h4>
              <p className="why-donate-card-desc">As a registered social welfare trust, your contributions qualify for a 50% tax exemption under Section 80G.</p>
            </Card>

            <Card className="why-donate-card">
              <div className="why-donate-icon-box">
                <TrendingUp size={28} />
              </div>
              <h4 className="why-donate-card-title">Audited Ledger</h4>
              <p className="why-donate-card-desc">We publish comprehensive yearly audited statements. Every single rupee received is mapped to purchase receipts.</p>
            </Card>

            <Card className="why-donate-card">
              <div className="why-donate-icon-box">
                <Users size={28} />
              </div>
              <h4 className="why-donate-card-title">Community-Led</h4>
              <p className="why-donate-card-desc">Field campaigns are executed by local youth networks. This guarantees fast responses and local trust.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Choose Your Impact Section */}
      <section id="impact-calculator" className="impact-section">
        <div className="container">
          <SectionHeader 
            tag="Choose Your Impact"
            title="Decide How You Want to Help"
            subtitle="Select a pre-calculated contribution tier or specify a custom amount to see what your money achieves."
          />
          
          <div className="impact-container">
            <div className="impact-amount-grid">
              {impactTiers.map((tier) => (
                <button
                  key={tier.amount}
                  className={`impact-amt-btn ${selectedImpact === tier.amount && !customAmount ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedImpact(tier.amount);
                    setCustomAmount('');
                  }}
                >
                  {tier.amount}
                </button>
              ))}
              
              <div className="custom-amt-wrapper">
                <input 
                  type="number"
                  placeholder="Custom Amount"
                  className="custom-amt-input"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedImpact('');
                  }}
                />
                <span className="custom-amt-symbol">₹</span>
              </div>
            </div>

            <div className="impact-desc-box">
              <Info size={24} className="text-primary-brand" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p className="impact-desc-text">
                {getImpactDescription()}
              </p>
            </div>

            <div className="impact-submit-btn-wrapper">
              <Button variant="primary" className="impact-submit-btn" onClick={() => scrollToSection('payment-methods')}>
                Proceed to Payment <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Campaigns Section */}
      <section id="active-campaigns" className="campaigns-section">
        <div className="container">
          <SectionHeader 
            tag="Urgent Campaigns"
            title="Support Active Fundraisers"
            subtitle="We organize fundraising campaigns for our major welfare operations. Choose a campaign to support."
          />

          <div className="campaigns-grid">
            {campaigns.map((c) => {
              const percent = Math.min(Math.round((c.raised / c.target) * 100), 100);
              return (
                <Card key={c.id} className="campaign-card">
                  <div className="campaign-img-wrapper">
                    <img src={c.image} alt={c.title} className="campaign-img" />
                    <span className="campaign-tag">{c.tag}</span>
                  </div>
                  
                  <div className="campaign-body">
                    <h4 className="campaign-card-title">{c.title}</h4>
                    <p className="campaign-card-desc">{c.desc}</p>
                    
                    <div className="campaign-metrics">
                      <div className="campaign-progress-container">
                        <div className="campaign-progress-bar" style={{ width: `${percent}%` }}></div>
                      </div>
                      <div className="campaign-stats">
                        <div className="campaign-stat-item">
                          <span className="campaign-stat-label">Raised</span>
                          <span className="campaign-stat-val highlight">₹{c.raised.toLocaleString()}</span>
                        </div>
                        <div className="campaign-stat-item" style={{ alignItems: 'center' }}>
                          <span className="campaign-stat-label">Progress</span>
                          <span className="campaign-stat-val">{percent}%</span>
                        </div>
                        <div className="campaign-stat-item" style={{ alignItems: 'flex-end' }}>
                          <span className="campaign-stat-label">Target</span>
                          <span className="campaign-stat-val">₹{c.target.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="campaign-btn" onClick={() => handleCampaignDonate(c.target - c.raised)}>
                      Support Campaign
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section id="payment-methods" className="payment-section">
        <div className="container">
          <SectionHeader 
            tag="Secure Donations"
            title="Premium Payment Gateway & Options"
            subtitle="Secure your transaction. Choose either instant scan and pay via UPI apps or direct institutional bank transfer."
          />

          <div className="payment-container-grid">
            {/* UPI Scan Card */}
            <div className="upi-qr-card">
              <h4 className="pay-card-section-title justify-center" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <QrCode size={24} className="text-primary-brand" /> Scan & Pay Instantly
              </h4>
              <p className="text-muted text-xs mb-6" style={{ marginTop: '4px' }}>Supports Google Pay, PhonePe, Paytm, BHIM</p>
              
              <div className="qr-code-frame-wrapper">
                <div className="qr-scanner-corner corner-tl"></div>
                <div className="qr-scanner-corner corner-tr"></div>
                <div className="qr-scanner-corner corner-bl"></div>
                <div className="qr-scanner-corner corner-br"></div>
                
                {/* SVG mock QR code representation */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ display: 'block', margin: 'auto' }}>
                  <rect x="0" y="0" width="100" height="100" fill="none" />
                  
                  {/* Finder patterns in corners */}
                  <rect x="6" y="6" width="22" height="22" fill="#0B1F4D" rx="2" />
                  <rect x="9" y="9" width="16" height="16" fill="#FFFFFF" rx="1" />
                  <rect x="12" y="12" width="10" height="10" fill="#D4AF37" rx="0.5" />
                  
                  <rect x="72" y="6" width="22" height="22" fill="#0B1F4D" rx="2" />
                  <rect x="75" y="9" width="16" height="16" fill="#FFFFFF" rx="1" />
                  <rect x="78" y="12" width="10" height="10" fill="#D4AF37" rx="0.5" />
                  
                  <rect x="6" y="72" width="22" height="22" fill="#0B1F4D" rx="2" />
                  <rect x="9" y="75" width="16" height="16" fill="#FFFFFF" rx="1" />
                  <rect x="12" y="78" width="10" height="10" fill="#D4AF37" rx="0.5" />

                  {/* Alignment patterns */}
                  <rect x="76" y="76" width="8" height="8" fill="#0B1F4D" rx="1" />
                  <rect x="78" y="78" width="4" height="4" fill="#FFFFFF" rx="0.5" />
                  <rect x="79" y="79" width="2" height="2" fill="#0B1F4D" />

                  {/* Simulated pixels */}
                  <rect x="34" y="6" width="6" height="6" fill="#0B1F4D" />
                  <rect x="42" y="12" width="12" height="6" fill="#D4AF37" />
                  <rect x="58" y="6" width="6" height="12" fill="#0B1F4D" />
                  <rect x="34" y="20" width="18" height="6" fill="#0B1F4D" />
                  
                  <rect x="6" y="34" width="6" height="6" fill="#0B1F4D" />
                  <rect x="18" y="42" width="12" height="6" fill="#D4AF37" />
                  <rect x="6" y="54" width="6" height="12" fill="#0B1F4D" />
                  <rect x="24" y="34" width="6" height="18" fill="#0B1F4D" />

                  <rect x="36" y="36" width="12" height="12" fill="#0B1F4D" />
                  <rect x="52" y="42" width="12" height="12" fill="#D4AF37" />
                  <rect x="36" y="58" width="6" height="6" fill="#0B1F4D" />
                  <rect x="48" y="54" width="18" height="6" fill="#0B1F4D" />

                  <rect x="72" y="34" width="6" height="6" fill="#0B1F4D" />
                  <rect x="84" y="42" width="10" height="6" fill="#0B1F4D" />
                  <rect x="72" y="54" width="12" height="6" fill="#D4AF37" />
                  
                  <rect x="34" y="72" width="6" height="12" fill="#0B1F4D" />
                  <rect x="46" y="78" width="12" height="6" fill="#0B1F4D" />
                  <rect x="54" y="84" width="12" height="10" fill="#D4AF37" />
                  
                  <rect x="72" y="88" width="12" height="6" fill="#0B1F4D" />

                  {/* Core Heart */}
                  <path d="M 50 49 C 49 47 46 47 46 50 C 46 53 50 55.5 50 55.5 C 50 55.5 54 53 54 50 C 54 47 51 47 50 49 Z" fill="#E11D48" />
                </svg>
              </div>

              <div className="bank-detail-item mb-4" style={{ gridTemplateColumns: '1fr auto', padding: '14px 16px' }}>
                <div style={{ textAlign: 'left' }}>
                  <span className="detail-label-premium block">Official UPI ID</span>
                  <span className="detail-value-premium" style={{ color: 'var(--primary-brand)', fontSize: '1rem' }}>{bankDetails.upiId}</span>
                </div>
                <div className="copy-btn-wrapper">
                  <button className="copy-btn-inline" onClick={() => handleCopy(bankDetails.upiId, 'upi')}>
                    {copiedField === 'upi' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  </button>
                  {copiedField === 'upi' && <span className="copy-tooltip">Copied!</span>}
                </div>
              </div>

              <div className="payment-app-icons">
                <span className="app-icon-badge">GPay</span>
                <span className="app-icon-badge">PhonePe</span>
                <span className="app-icon-badge">Paytm</span>
                <span className="app-icon-badge">BHIM UPI</span>
              </div>
            </div>

            {/* Bank Transfer Details */}
            <div className="details-copy-card">
              <h4 className="pay-card-section-title">
                <Landmark size={24} className="text-primary-brand" /> Bank Account Details
              </h4>
              
              <div className="bank-details-list">
                <div className="bank-detail-item">
                  <span className="detail-label-premium">Account Holder</span>
                  <span className="detail-value-premium">{bankDetails.accountHolder}</span>
                  <div className="copy-btn-wrapper">
                    <button className="copy-btn-inline" onClick={() => handleCopy(bankDetails.accountHolder, 'holder')}>
                      {copiedField === 'holder' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                    {copiedField === 'holder' && <span className="copy-tooltip">Copied!</span>}
                  </div>
                </div>

                <div className="bank-detail-item">
                  <span className="detail-label-premium">Account Number</span>
                  <span className="detail-value-premium" style={{ letterSpacing: '0.04em' }}>{bankDetails.accountNo}</span>
                  <div className="copy-btn-wrapper">
                    <button className="copy-btn-inline" onClick={() => handleCopy(bankDetails.accountNo, 'no')}>
                      {copiedField === 'no' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                    {copiedField === 'no' && <span className="copy-tooltip">Copied!</span>}
                  </div>
                </div>

                <div className="bank-detail-item">
                  <span className="detail-label-premium">IFSC Code</span>
                  <span className="detail-value-premium" style={{ letterSpacing: '0.02em' }}>{bankDetails.ifsc}</span>
                  <div className="copy-btn-wrapper">
                    <button className="copy-btn-inline" onClick={() => handleCopy(bankDetails.ifsc, 'ifsc')}>
                      {copiedField === 'ifsc' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                    {copiedField === 'ifsc' && <span className="copy-tooltip">Copied!</span>}
                  </div>
                </div>

                <div className="bank-detail-item">
                  <span className="detail-label-premium">Bank Name</span>
                  <span className="detail-value-premium">{bankDetails.bankName}</span>
                  <div style={{ width: '36px' }}></div> {/* Place holder to align grid layout */}
                </div>

                <div className="bank-detail-item">
                  <span className="detail-label-premium">Branch Name</span>
                  <span className="detail-value-premium">{bankDetails.branch}</span>
                  <div style={{ width: '36px' }}></div>
                </div>
              </div>

              <h4 className="pay-card-section-title" style={{ marginTop: '40px', fontSize: '1.2rem', marginBottom: '16px' }}>
                Quick Contact & Support
              </h4>
              <div className="support-actions-row">
                <a href={`tel:${bankDetails.phone}`} className="support-btn-premium phone">
                  <Phone size={16} />
                  <span>Tap to Call</span>
                </a>
                <a href={bankDetails.whatsapp} target="_blank" rel="noopener noreferrer" className="support-btn-premium whatsapp">
                  <ExternalLink size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a href={`mailto:${bankDetails.email}?subject=Donation Support Inquiry`} className="support-btn-premium email">
                  <Mail size={16} />
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Donation Step-by-Step */}
      <section className="after-donation-section">
        <div className="container">
          <SectionHeader 
            tag="Workflow Process"
            title="Steps to Follow After Making Your Donation"
            subtitle="To help us map your contribution, maintain transparency audits, and issue tax receipts, please complete these simple steps."
          />

          <div className="steps-grid">
            <div className="step-card-premium">
              <div className="step-number-badge">1</div>
              <h4 className="step-title-premium">Send Receipt Screenshot</h4>
              <p className="step-desc-premium">Take a screenshot of the transaction completion screen. Send it via email or our WhatsApp chat button containing your name.</p>
            </div>

            <div className="step-card-premium">
              <div className="step-number-badge">2</div>
              <h4 className="step-title-premium">Provide Details for 80G</h4>
              <p className="step-desc-premium">If you require a tax savings certificate, please share your PAN number and physical address along with the screenshot details.</p>
            </div>

            <div className="step-card-premium">
              <div className="step-number-badge">3</div>
              <h4 className="step-title-premium">Verify in Audit Reports</h4>
              <p className="step-desc-premium">We compile ledger logs monthly. You will receive email verification mapping your amount directly to active campaign purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="impact-gallery-section">
        <div className="container">
          <SectionHeader 
            tag="Real Fieldwork"
            title="See Your Donation in Action"
            subtitle="We document all distribution drives to assure donors that their funds are executing ground-level transformation."
          />

          <div className="gallery-grid-premium">
            {impactGallery.map((g, idx) => (
              <div key={idx} className="gallery-card-premium">
                <img src={g.img} alt={g.title} className="gallery-img-premium" />
                <div className="gallery-overlay-premium">
                  <span className="gallery-overlay-tag">{g.tag}</span>
                  <h5 className="gallery-overlay-title">{g.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section-premium reveal-on-scroll reveal-fade-up">
        <div className="container">
          <SectionHeader 
            tag="Kind Words"
            title="What Our Contributors & Partners Say"
            subtitle="Real impact feedback from government school teachers and individual donors who stand by our transparent fieldwork."
          />

          <div className="testimonials-grid-premium">
            <Card className="testimonial-card-premium">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" stroke="none" />)}
              </div>
              <p className="testimonial-quote">
                "Finding an NGO that operates with 100% direct impact is rare. APJ Abdul Kalam Seva Samithi shared exact school distribution photographs mapping directly to my donation of notebooks."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar-initials">RV</div>
                <div className="author-info">
                  <span className="author-name">Ramanjaneya V.</span>
                  <span className="author-role">Regular Donor since 2018</span>
                </div>
              </div>
            </Card>

            <Card className="testimonial-card-premium">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" stroke="none" />)}
              </div>
              <p className="testimonial-quote">
                "Our school students come from agricultural labor families who struggle to buy basic intermediate notebooks. The samithi has consistently sponsored these kits yearly, boosting attendance."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar-initials">SK</div>
                <div className="author-info">
                  <span className="author-name">S. Koteswara Rao</span>
                  <span className="author-role">Govt School Headmaster</span>
                </div>
              </div>
            </Card>

            <Card className="testimonial-card-premium">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" stroke="none" />)}
              </div>
              <p className="testimonial-quote">
                "I volunteered in their hospital shelter food drives. The dedication is genuine. The ingredients are high quality, and patients' families bless the samithi for this support."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar-initials">AN</div>
                <div className="author-info">
                  <span className="author-name">Anitha Naidu</span>
                  <span className="author-role">Volunteer & Donor</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="faq-section-premium">
        <div className="container">
          <SectionHeader 
            tag="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our trust registrations, refund transparency policies, and auditing details."
          />

          <div className="faq-accordion-container">
            {faqData.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className={`faq-item-premium ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-trigger-btn"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={18} className="faq-icon-chevron" />
                  </button>
                  <div className="faq-content-box" style={{ maxHeight: isOpen ? '250px' : '0' }}>
                    <div className="faq-content-inner">
                      <p style={{ margin: 0 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta-section-premium">
        <div className="container">
          <h2 className="final-cta-title">Create a Lasting Legacy Today</h2>
          <p className="final-cta-desc">
            Your act of kindness helps a child complete high school, sponsors a student's medical dream, or feeds a hungry family. Join our samithi family.
          </p>
          <Button variant="primary" style={{ background: 'var(--accent-gold)', borderColor: 'var(--accent-gold)', color: '#0B1F4D', fontWeight: '700' }} className="px-10 py-4 shadow-lg hover:scale-105 transition-transform" onClick={() => scrollToSection('payment-methods')}>
            Sponsor Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Donate;
