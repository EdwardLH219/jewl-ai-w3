import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
}) => {
  // Base styles
  const baseStyles = 'rounded-lg transition-all';
  
  // Padding variations
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  // Variant styles
  const variantStyles = {
    default: 'bg-white/5 border border-white/10',
    outline: 'bg-transparent border border-white/20',
    glass: 'bg-white/10 backdrop-blur-sm border border-white/20',
  };
  
  // Hover effect
  const hoverStyles = hover 
    ? 'hover:shadow-lg hover:border-white/30 hover:scale-[1.01]' 
    : '';
  
  // Combine all styles
  const cardStyles = `${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyles} ${className}`;
  
  return (
    <div className={cardStyles}>
      {children}
    </div>
  );
};

export { Card };
export type { CardProps }; 