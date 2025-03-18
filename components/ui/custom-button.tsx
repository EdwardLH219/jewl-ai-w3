import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className = '', 
    variant = 'primary', 
    size = 'md', 
    isFullWidth = false,
    isLoading = false,
    disabled,
    ...props 
  }, ref) => {
    // Base styles
    const baseStyles = 'font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Size variations
    const sizeStyles = {
      sm: 'py-1 px-3 text-sm',
      md: 'py-2 px-4',
      lg: 'py-3 px-6 text-lg',
    };
    
    // Variant styles
    const variantStyles = {
      primary: 'bg-white text-black hover:bg-gray-200 focus:ring-white',
      secondary: 'bg-black text-white hover:bg-gray-900 focus:ring-black',
      outline: 'bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white',
      ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white',
    };
    
    // Width styles
    const widthStyles = isFullWidth ? 'w-full' : '';
    
    // Disabled/loading styles
    const stateStyles = (disabled || isLoading) 
      ? 'opacity-70 cursor-not-allowed' 
      : '';
    
    // Combine all styles
    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${stateStyles} ${className}`;
    
    return (
      <button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
