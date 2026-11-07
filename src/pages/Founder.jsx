import React from 'react';
import Card from '../components/Shared/Card';
import SectionHeader from '../components/Shared/SectionHeader';
import awardsData from '../data/awards.json';
import { Quote, Calendar, Award, ShieldAlert, HeartHandshake, Eye, BookOpen, Compass, MapPin } from 'lucide-react';

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

const Founder = () => {
  // Detailed VIP meetings/collaborations
  const vipMeetings = [
    {
      who: "IPS Officer, District Police Chief",
      designation: "Superintendent of Police",
      occasion: "Road Safety & Student Awareness Launch",
      when: "March 2024",
      why: "To coordinate traffic awareness and safety campaigns for high school candidates. The police chief provided guidelines on student safety rallies and commended the trust's youth engagement models.",
      img: "/images/venkatrao_congrats_police_img (2).jpg"
    },
    {
      who: "Sri Paruchuri Chinikrishna",
      designation: "State Social Welfare Coordinator",
      occasion: "Educational Welfare Review Meeting",
      when: "August 2024",
      why: "Briefing state administrative leadership on the trust's targeted book distribution statistics. The coordinator appreciated the direct classroom-level delivery system and shared advice on aligning with public school grants.",
      img: "/images/venkatrao_VIP_img1 (5).JPG"
    },
    {
      who: "Minister for Social Welfare",
      designation: "State Social Welfare Cabinet Minister",
      occasion: "Educational Advocacy Meet",
      when: "November 2024",
      why: "Presented reports on student dropouts in rural zones to request state support for government school integrations. The minister appreciated our transparency protocols and local volunteer-led drives.",
      img: "/images/venkatrao_VIP_img2 (2).JPG"
    },
    {
      who: "District Police Welfare Wing",
      designation: "District Police Force & Medical Staff",
      occasion: "Police Commemoration Day Blood Drive",
      when: "October 2024",
      why: "Organized a joint blood donation camp to meet local medical emergencies. The collaboration mobilized youth donors and secured vital reserves in partnership with the local Red Cross branch.",
      img: "/images/venkatrao_policeBloodcamp_img (2).JPG"
    },
    {
      who: "Government School Headmasters",
      designation: "School Principals & Teachers Assembly",
      occasion: "Pratibha Puraskar Ceremony",
      when: "April 2025",
      why: "Presented academic merit awards and textbook kits to government school students. The meeting served to evaluate upcoming material requirements and identify low-income candidates in need of intermediate sponsorships.",
      img: "/images/venkatrao_books_img1.JPG"
    }
  ];

  // Community service gallery images
  const servicePhotos = [
    { url: "/images/venkatrao_books_img2.JPG", caption: "Notebook Distribution Drive", location: "Zilla Parishad High School", year: 2024 },
    { url: "/images/venkatrao_annadaanam (1).JPG", caption: "COVID-19 Food Relief Seva", location: "Shelter Attendants Welfare", year: 2020 },
    { url: "/images/venkatrao_hospital_service_img1 (1).JPG", caption: "Hospital Attendants Annadanam", location: "Government General Hospital", year: 2023 }
  ];

  return (
    <div className="founder-page animate-fade-in py-16 bg-primary-bg section-light">
      <div className="container">
        
        {/* Founder Header */}
        <SectionHeader 
          tag="Leadership & Legacy" 
          title="A Legacy of Service" 
          subtitle="Documenting LN VEMULA VENKATRAO's years of dedicated service, leadership principles, and collaborations that shape APJ Abdul Kalam Seva Samithi."
        />

        {/* Section 1: Biography (Asymmetrical Split Layout) */}
        <section className="founder-biography-split-section py-8">
          <div className="founder-biography-split-grid">
            <div className="founder-biography-img-part">
              <div className="founder-biography-frame">
                <img 
                  src="/images/new_venkatraophoto.jpg" 
                  alt="LN VEMULA VENKATRAO, Founder & President" 
                  className="founder-portrait-img-main"
                  loading="lazy"
                />
                <div className="founder-portrait-caption">
                  <h3 className="caption-name font-display">LN VEMULA VENKATRAO</h3>
                  <span className="caption-role">Founder & President</span>
                </div>
              </div>
            </div>

            <div className="founder-biography-text-part">
              <span className="bio-pre-tag text-primary">Biographical Profile</span>
              <h2 className="bio-main-title font-display">The Call to Service</h2>
              <p className="bio-main-text">
                LN VEMULA VENKATRAO initiated the journey of APJ Abdul Kalam Seva Samithi in 2015, officially establishing the trust in 2016 alongside a dedicated group of local citizens. Deeply inspired by the ideals of Dr. APJ Abdul Kalam, who believed that a nation's strength resides in its literate youth, he set out to remove material barriers to schooling for underprivileged children in government schools.
              </p>
              
              <div className="bio-accent-quote-box">
                <Quote className="quote-icon text-primary" size={24} />
                <p className="quote-text italic">
                  "Education is the most powerful tool to change the world. Our objective is simple: to make sure rural students have basic tools like books, uniforms, and fee support so they never feel forced to leave their classrooms."
                </p>
              </div>

              <p className="bio-main-text">
                Under his active leadership, the trust has maintained a strict focus on direct delivery and absolute transparency. LN VEMULA VENKATRAO personally coordinates school selection, meeting village headmasters and inspecting local student registers to ensure that materials reach the correct beneficiaries without administrative delays.
              </p>

              <div className="founder-signature-block font-display mt-8">
                <span className="signature-salutation">Sincerely,</span>
                <h4 className="signature-name text-primary">LN VEMULA VENKATRAO</h4>
                <span className="signature-role text-muted">Founder & President, APJ Abdul Kalam Seva Samithi</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Wave Transition 1: Biography to Journey/Vision */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 2: Journey & Vision (Symmetrical Twin Cards) */}
      <section className="founder-journey-vision-section py-20 bg-secondary-bg section-light">
        <div className="container">
          <div className="journey-vision-cards-grid">
            <Card className="journey-vision-card-custom">
              <div className="custom-card-header">
                <Compass className="text-primary" size={24} />
                <h3 className="custom-card-title font-display">Founder's Journey</h3>
              </div>
              <p className="custom-card-desc">
                LN VEMULA VENKATRAO's journey began with small-scale book distributions in local mandals. Over the decade, he successfully expanded this initiative to encompass structured student welfare (providing school bags and uniforms) and emergency community services. This includes weekly food drives at hospital shelters, coordination of voluntary blood donation camps, and active distributions during the COVID-19 lockdown.
              </p>
            </Card>

            <Card className="journey-vision-card-custom">
              <div className="custom-card-header">
                <Eye className="text-primary" size={24} />
                <h3 className="custom-card-title font-display">Founder's Vision</h3>
              </div>
              <p className="custom-card-desc">
                The core vision is to build a volunteer-driven local network where citizens directly support their village schools. LN VEMULA VENKATRAO advocates for complete operational transparency, ensuring every notebook is accounted for. His goal is to institutionalize rural school mentoring systems so that meritorious students from low-income families can easily transition into high school and intermediate colleges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Wave Transition 2: Journey/Vision to Awards */}
      <CurveDivider fill="var(--bg-alternate)" />

      {/* Section 3: Honors, Awards, & Recognition (Stamp Style Grid) */}
      <section className="founder-awards-portfolio-section py-20 bg-alternate-bg section-light">
        <div className="container">
          <SectionHeader 
            title="Honors & Recognition" 
            subtitle="Citations and appreciation awards presented to LN VEMULA VENKATRAO by regional administrations, forest departments, and Red Cross chapters."
          />
          <div className="grid grid-cols-3">
            {awardsData.map((award) => (
              <Card key={award.id} className="award-card-custom">
                <div className="award-card-img-container">
                  <img src={award.img} alt={award.title} className="award-img-element" loading="lazy" />
                  <span className="award-badge-year">{award.year}</span>
                </div>
                <div className="award-body-element">
                  <h4 className="award-title-element font-display">{award.title}</h4>
                  <span className="award-presenter-element text-primary">Presented by: {award.presentedBy}</span>
                  <p className="award-reason-element">{award.reason}</p>
                  <p className="award-description-element text-muted">{award.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition 3: Awards to VIP Meetings */}
      <CurveDivider fill="var(--bg-primary)" />

      {/* Section 4: VIP Meetings - Moments That Inspired Our Mission (Asymmetrical Grid) */}
      <section className="founder-meetings-section py-20 bg-primary-bg section-light">
        <div className="container">
          <SectionHeader 
            tag="Administrative Collaborations" 
            title="Moments That Inspired Our Mission" 
            subtitle="Documenting official meetings, reviews, and joint welfare drives with administrative directors, police coordinators, and school leaders."
          />

          <div className="moments-timeline-cards-grid">
            {vipMeetings.map((meet, idx) => (
              <Card key={idx} className="moment-timeline-card">
                <div className="moment-card-image-box">
                  <img src={meet.img} alt={meet.occasion} className="moment-card-img" loading="lazy" />
                  <span className="moment-card-year">{meet.when}</span>
                </div>
                <div className="moment-card-text-box">
                  <h4 className="moment-card-who font-display">{meet.who}</h4>
                  <span className="moment-card-role text-primary">{meet.designation}</span>
                  <span className="moment-card-occasion text-muted">Occasion: {meet.occasion}</span>
                  <p className="moment-card-why">{meet.why}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition 4: VIP Meetings to Community Gallery */}
      <CurveDivider fill="var(--bg-secondary)" />

      {/* Section 5: Community Service Gallery (Breathing Space Masonry Layout) */}
      <section className="founder-service-gallery-section py-20 bg-secondary-bg section-light">
        <div className="container">
          <SectionHeader 
            tag="Field Action Logs" 
            title="Community Service Journey" 
            subtitle="A collection of real photographs showing LN VEMULA VENKATRAO and trust volunteers distributing materials and organizing welfare drives in rural areas."
          />

          <div className="founder-service-gallery-grid">
            {servicePhotos.map((photo, idx) => (
              <div key={idx} className="service-gallery-item">
                <img src={photo.url} alt={photo.caption} className="service-gallery-img" loading="lazy" />
                <div className="service-gallery-overlay">
                  <div className="service-gallery-details">
                    <span className="service-gallery-year">{photo.year}</span>
                    <h4 className="service-gallery-caption font-display">{photo.caption}</h4>
                    <div className="service-gallery-meta text-muted">
                      <MapPin size={12} /> <span>{photo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Founder;
