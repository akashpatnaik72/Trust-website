import React from 'react';

const Badge = ({ children, className = '', icon = null }) => {
  return (
    <span className={`badge ${className}`}>
      {icon && <span style={{ display: 'inline-flex', marginRight: '4px' }}>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
