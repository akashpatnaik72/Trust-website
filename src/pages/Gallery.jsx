import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Filter, Compass, Target, Users, Heart, HeartHandshake } from 'lucide-react';
import galleryData from '../data/gallery.json';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import SectionHeader from '../components/Shared/SectionHeader';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Book Distribution');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxZoomed, setIsLightboxZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Hardcoded categories details for the storytelling header experience
  const categoryDetails = {
    'Book Distribution': {
      name: "Book Distribution",
      coverImage: "/images/venkatrao_books_img1.JPG",
      description: "Our primary mission since 2015. Volunteers deliver textbooks, notebooks, geometry boxes, and reference guides directly to rural government schools. By coordinating directly with headmasters, we ensure that students in underfunded blocks have the immediate material supplies required to attend and succeed in classes.",
      focusArea: "Notebooks & Writing Kits",
      beneficiaries: "Govt School Students",
      coverage: "Rural School Blocks",
      year: "2015"
    },
    'Student Programs': {
      name: "Student Programs",
      coverImage: "/images/venkatrao_helpingschool_img1.JPG",
      description: "Nurturing academic talent through merit scholarships and tuition assistance. We organize regional Pratibha Puraskar ceremonies to celebrate high-scoring pupils in government schools and sponsor fee resources for secondary and intermediate education, helping prevent dropout rates.",
      focusArea: "Scholarships & Tuition Aid",
      beneficiaries: "Meritorious Students",
      coverage: "Regional Govt Schools",
      year: "2015"
    },
    'Blood Donation': {
      name: "Blood Donation",
      coverImage: "/images/venkatrao_policeBloodcamp_img (1).JPG",
      description: "Coordinating emergency blood supplies for regional medical networks. We organize voluntary donation drives in collaboration with local administration, youth groups, and Red Cross wings, ensuring hospital reserves remain stocked to support emergency surgeries.",
      focusArea: "Emergency Blood Reserve",
      beneficiaries: "Emergency Patients",
      coverage: "Hospitals & Red Cross",
      year: "2017"
    },
    'Community Service': {
      name: "Community Service",
      coverImage: "/images/venkatrao_hospital_service_img1 (1).JPG",
      description: "Serving local welfare needs through weekly food distribution drives (Annadanam) for patient attendants at hospital shelters. We also participate in public hygiene campaigns under the Swachh Bharat mission, tree plantations, and health screening camps.",
      focusArea: "Patient Meals & Cleanliness",
      beneficiaries: "Attendants & Villagers",
      coverage: "Shelters & Sanitation Sites",
      year: "2017"
    },
    'COVID Relief': {
      name: "COVID Relief",
      coverImage: "/images/venkatrao_annadaanam (1).JPG",
      description: "Responding immediately during the pandemic lockdown. Volunteers distributed fresh vegetables, grocery kits, and cooked meals to underprivileged daily-wage workers, and supplied refreshments and buttermilk to frontline police personnel on duty.",
      focusArea: "Grocery & Meal Distribution",
      beneficiaries: "Daily Wage Earners",
      coverage: "Local Lockdown Sectors",
      year: "2020"
    },
    'Awards': {
      name: "Awards",
      coverImage: "/images/venkatrao_award_img1.JPG",
      description: "Citations and official letters of appreciation recognizing the trust's transparent fieldwork. Highlights include the District Republic Day Service Citation and Excellence Certificates from Red Cross chapters.",
      focusArea: "Welfare Fieldwork Honors",
      beneficiaries: "Samithi Field Volunteers",
      coverage: "State & District Levels",
      year: "2016"
    },
    'VIP Meetings': {
      name: "VIP Meetings",
      coverImage: "/images/venkatrao_VIP_img1 (4).jpg",
      description: "Collaborating with administrators, cabinet ministers, police chiefs, and coordinators to advocate for rural educational materials and align our social welfare camps with regional public service programs.",
      focusArea: "Policy & Materials Advocacy",
      beneficiaries: "Outreach Beneficiaries",
      coverage: "Govt & Leadership Forums",
      year: "2016"
    },
    'Other Events': {
      name: "Other Events",
      coverImage: "/images/venkatrao_service_img6.JPG",
      description: "Preserving historical documentation archives, digitizing photographic records, and organizing coordination gatherings for our youth volunteer force.",
      focusArea: "Volunteer Coordination Team",
      beneficiaries: "Youth Coordinators",
      coverage: "Trust Internal Assemblies",
      year: "2016"
    }
  };

  // Map original gallery JSON categories to the requested categories list
  const mappedPhotos = useMemo(() => {
    return galleryData.photos.map(photo => {
      let category = photo.category;
      
      // Category mappings
      if (photo.category === 'Education') {
        category = 'Student Programs';
      } else if (photo.category === 'Hospital Services' || photo.category === 'Swachh Bharat') {
        category = 'Community Service';
      } else if (photo.category === 'VIP Visits') {
        category = 'VIP Meetings';
      } else if (photo.category === 'Other Activities') {
        category = 'Other Events';
      }

      // Map photo-11 (or year 2020 events) specifically to COVID Relief
      if (photo.id === 'photo-11' || photo.year === 2020) {
        category = 'COVID Relief';
      }

      return {
        ...photo,
        category
      };
    });
  }, []);

  // Extract unique years from mapped photos dynamically
  const uniqueYears = useMemo(() => {
    const years = mappedPhotos.map(p => p.year).filter(Boolean);
    return ['All', ...new Set(years)].sort((a, b) => b - a);
  }, [mappedPhotos]);

  // Filter photos based on current category, search, and year selection
  const filteredPhotos = useMemo(() => {
    return mappedPhotos.filter(photo => {
      const matchCategory = photo.category === selectedCategory;
      const matchYear = selectedYear === 'All' || photo.year.toString() === selectedYear.toString();
      const matchSearch = searchQuery === '' || 
        `${photo.title} ${photo.description} ${photo.location} ${photo.event}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      
      return matchCategory && matchYear && matchSearch;
    });
  }, [mappedPhotos, selectedCategory, selectedYear, searchQuery]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsLightboxZoomed(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  // Disable background scrolling when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handlePrev = () => {
    setIsLightboxZoomed(false);
    setLightboxIndex(prev => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsLightboxZoomed(false);
    setLightboxIndex(prev => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isDownSwipe = distanceY < -minSwipeDistance;
    
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      if (isLeftSwipe) {
        handleNext();
      } else if (isRightSwipe) {
        handlePrev();
      }
    } else {
      if (isDownSwipe) {
        setLightboxIndex(null);
        setIsLightboxZoomed(false);
      }
    }
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="gallery-page py-16 bg-secondary-bg section-light">
      <div className="container animate-fade-in">
        
        {/* Header */}
        <SectionHeader 
          tag="Visual Archives" 
          title="Documentary Photo Gallery" 
          subtitle="Explore the visual records of Kalam Seva Samithi's community service, structured by field action sectors."
        />

        {/* Section 1: Categories Tab Navigation (Horizontal tabs) */}
        <div className="gallery-categories-navigation-tabs">
          <div className="categories-scroll-wrapper">
            {Object.keys(categoryDetails).map(catKey => {
              const cat = categoryDetails[catKey];
              const isActive = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    setSelectedCategory(catKey);
                    setSelectedYear('All');
                    setSearchQuery('');
                  }}
                  className={`gallery-nav-tab-btn ${isActive ? 'gallery-nav-tab-btn-active' : ''}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Storytelling Category Cover Banner - Apple split editorial style */}
        <div className="gallery-category-story-banner animate-reveal" key={selectedCategory}>
          <div className="story-banner-image-pane">
            <img 
              src={categoryDetails[selectedCategory].coverImage} 
              alt={`${selectedCategory} Cover`} 
              className="story-banner-cover-img"
            />
          </div>
          <div className="story-banner-text-pane">
            <span className="story-banner-tag">SECTOR IMPACT PROFILE</span>
            <h2 className="story-banner-title font-display">{categoryDetails[selectedCategory].name}</h2>
            <p className="story-banner-desc">
              {categoryDetails[selectedCategory].description}
            </p>
            
            {/* Metadata Info Card */}
            <div className="story-banner-info-card">
              <div className="story-info-row">
                <Target className="story-info-icon" size={16} />
                <span className="story-info-label">Focus Area</span>
                <span className="story-info-value">{categoryDetails[selectedCategory].focusArea}</span>
              </div>
              <div className="story-info-row">
                <Users className="story-info-icon" size={16} />
                <span className="story-info-label">Beneficiaries</span>
                <span className="story-info-value">{categoryDetails[selectedCategory].beneficiaries}</span>
              </div>
              <div className="story-info-row">
                <Compass className="story-info-icon" size={16} />
                <span className="story-info-label">Coverage</span>
                <span className="story-info-value">{categoryDetails[selectedCategory].coverage}</span>
              </div>
              <div className="story-info-row">
                <Calendar className="story-info-icon" size={16} />
                <span className="story-info-label">Started Since</span>
                <span className="story-info-value">{categoryDetails[selectedCategory].year}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="story-banner-cta-group">
              <a href="https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F" target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                <Button variant="primary" style={{ width: '100%' }} icon={<Heart size={16} fill="currentColor" />}>
                  Support This Initiative
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

        {/* Section 3: Inner Category Filters & Search */}
        <div className="gallery-inner-filters-bar">
          <div className="inner-search-input-wrapper">
            <Search className="inner-search-icon" size={16} />
            <input 
              type="text" 
              placeholder={`Search in ${categoryDetails[selectedCategory].name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="inner-search-field"
            />
          </div>

          <div className="inner-filters-right">
            <div className="inner-select-wrapper">
              <Calendar size={14} className="inner-select-icon" />
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="inner-dropdown-select"
              >
                <option value="All">All Years</option>
                {uniqueYears.filter(y => y !== 'All').map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Masonry Image Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="gallery-masonry-story-grid">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="gallery-card-interactive masonry-story-item animate-fade-in"
                onClick={() => {
                  setLightboxIndex(index);
                  setIsLightboxZoomed(false);
                }}
              >
                <div className="gallery-card-image-box">
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="gallery-card-img"
                    loading="lazy"
                  />
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
        ) : (
          <div className="gallery-empty-state text-center py-20">
            <Filter size={32} className="text-muted" style={{ marginBottom: '16px' }} />
            <h3 className="font-display font-bold text-lg text-white">No Photographs Found</h3>
            <p className="text-muted text-sm mt-2">Try adjusting your filters or search keywords to view other events.</p>
          </div>
        )}

        {/* Fullscreen Premium Lightbox Viewer */}
        {lightboxIndex !== null && activePhoto && createPortal(
          <div 
            className="lightbox-fullscreen-viewer"
            onClick={() => {
              setLightboxIndex(null);
              setIsLightboxZoomed(false);
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar */}
            <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </div>
              <button 
                className="lightbox-close-btn-circular" 
                onClick={() => {
                  setLightboxIndex(null);
                  setIsLightboxZoomed(false);
                }}
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Nav Arrow (Desktop) */}
            <button 
              className="lightbox-nav-arrow-btn left-arrow"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Right Nav Arrow (Desktop) */}
            <button 
              className="lightbox-nav-arrow-btn right-arrow"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Centered Image Container */}
            <div 
              className="lightbox-image-stage"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activePhoto.url} 
                alt={activePhoto.title} 
                className="lightbox-fullscreen-img"
              />
            </div>

            {/* Bottom Thumbnail Strip */}
            {filteredPhotos.length > 1 && (
              <div className="lightbox-thumbnails-container" onClick={(e) => e.stopPropagation()}>
                <div className="lightbox-thumbnails-row">
                  {filteredPhotos.map((photo, index) => (
                    <button 
                      key={photo.id}
                      className={`lightbox-thumbnail-btn ${index === lightboxIndex ? 'active' : ''}`}
                      onClick={() => {
                        setLightboxIndex(index);
                        setIsLightboxZoomed(false);
                      }}
                      aria-label={`View photo ${index + 1}`}
                    >
                      <img src={photo.url} alt="" className="lightbox-thumbnail-img" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}

      </div>
    </div>
  );
};

export default Gallery;
