import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/Shared/ScrollToTop';
import './styles/index.css';

// Lazy loading all pages for code-splitting and performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Founder = lazy(() => import('./pages/Founder'));
const Initiatives = lazy(() => import('./pages/Initiatives'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Awards = lazy(() => import('./pages/Awards'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium centered loading spinner for fallback transitions
// Premium fullscreen institutional loading screen
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    inset: 0,
    backgroundColor: '#0F2747',
    zIndex: 9999,
    flexDirection: 'column',
    fontFamily: "'Outfit', 'Inter', sans-serif"
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      animation: 'loaderFadeIn 0.8s ease'
    }}>
      <div style={{
        width: '84px',
        height: '84px',
        borderRadius: '50%',
        border: '3px solid rgba(200, 155, 60, 0.1)',
        borderTopColor: '#C89B3C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        animation: 'loaderSpin 1.5s linear infinite',
        boxShadow: '0 0 25px rgba(200, 155, 60, 0.15)'
      }}>
        {/* Emblem inner icon (spins in reverse to stay upright) */}
        <div style={{
          position: 'absolute',
          animation: 'loaderSpinRev 1.5s linear infinite',
          color: '#C89B3C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1 style={{
          fontSize: '1.65rem',
          fontWeight: '800',
          letterSpacing: '0.08em',
          color: '#FAF8F4',
          margin: 0,
          lineHeight: '1.2'
        }}>APJ ABDUL KALAM</h1>
        <div style={{
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.22em',
          color: '#C89B3C',
          marginTop: '6px'
        }}>SEVA SAMITHI</div>
      </div>

      <div style={{
        width: '140px',
        height: '2px',
        backgroundColor: 'rgba(250, 248, 244, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        marginTop: '12px'
      }}>
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '50%',
          backgroundColor: '#C89B3C',
          animation: 'loaderBarPulse 1.5s ease-in-out infinite'
        }}></div>
      </div>
      
      <span style={{
        fontSize: '0.72rem',
        fontWeight: '600',
        color: '#718096',
        letterSpacing: '0.12em',
        marginTop: '10px',
        textTransform: 'uppercase'
      }}>Serving Humanity Through Compassion</span>
    </div>
    
    <style>{`
      @keyframes loaderSpin {
        to { transform: rotate(360deg); }
      }
      @keyframes loaderSpinRev {
        to { transform: rotate(-360deg); }
      }
      @keyframes loaderBarPulse {
        0% { left: -50%; }
        100% { left: 100%; }
      }
      @keyframes loaderFadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>
  </div>
);

// Redirect component for manual visits to /donate
const DonateRedirect = () => {
  React.useEffect(() => {
    window.location.replace("https://wa.me/919876543210?text=Hello%21%20I%20would%20like%20to%20support%20APJ%20Abdul%20Kalam%20Seva%20Samithi.%20Could%20you%20please%20guide%20me%20on%20how%20I%20can%20contribute%3F");
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main layout containing Navbar, Footer, and Floating WhatsApp/Top buttons */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="founder" element={<Founder />} />
            <Route path="initiatives" element={<Initiatives />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="awards" element={<Awards />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="donate" element={<DonateRedirect />} />
            <Route path="contact" element={<Contact />} />
            {/* Fallback path redirects to Home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
