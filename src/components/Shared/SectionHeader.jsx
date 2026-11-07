import React from 'react';

const SectionHeader = ({ 
  tag = '', 
  title, 
  subtitle = '', 
  align = 'center', 
  className = '' 
}) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const flexAlign = align === 'left' ? 'flex-start' : 'center';

  return (
    <div className={`section-header ${alignClass} ${className}`} style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: flexAlign }}>
      {tag && (
        <span 
          className="text-xs uppercase tracking-widest text-primary font-bold" 
          style={{ letterSpacing: '0.2em', marginBottom: '8px', color: 'var(--primary)' }}
        >
          {tag}
        </span>
      )}
      <h2 
        className="font-display font-bold text-3xl sm:text-4xl text-white" 
        style={{ marginBottom: subtitle ? '12px' : '0', color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-muted text-base max-w-2xl" 
          style={{ color: 'var(--text-secondary)', margin: align === 'left' ? '0' : '0 auto', fontSize: '1.05rem', lineHeight: '1.5' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
