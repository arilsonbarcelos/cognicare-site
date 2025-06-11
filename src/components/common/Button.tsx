import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    className = '',
    showArrow = false,
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center';

    const variants = {
        primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-sm hover:shadow-lg transform hover:-translate-y-1',
        secondary: 'text-slate-700 hover:bg-white/50 transition-colors border border-slate-200 bg-white/30 backdrop-blur-sm',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
        >
            {children}
            {showArrow && <ArrowRight className="w-5 h-5 ml-2" />}
        </button>
    );
};

export default Button; 
