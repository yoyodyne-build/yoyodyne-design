import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const ButtonStyles = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'border',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-blue-700', 'border-blue-700', 'text-white', 'hover:bg-blue-500'],
        secondary: [
          'bg-gray-500',
          'border-gray-500',
          'text-white',
          'hover:bg-white',
          'hover:text-gray-500',
        ],
        success: ['bg-green-700', 'border-green-700', 'text-white', 'hover:bg-green-600'],
        danger: ['bg-red-700', 'border-red-700', 'text-white', 'hover:bg-red-500'],
        warning: [
          'bg-yellow-600',
          'border-yellow-600',
          'text-white',
          'hover:bg-yellow-400',
          'hover:text-black',
        ],
      },
      size: {
        small: ['h-9', 'px-2', 'text-sm'],
        medium: ['h-10', 'px-3', 'text-base'],
        large: ['h-12', 'px-8', 'text-lg'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

export type ButtonProps = VariantProps<typeof ButtonStyles> & ComponentProps<'button'>;
export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
