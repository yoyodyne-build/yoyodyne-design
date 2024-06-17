import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { type ButtonProps, ButtonStyles } from '@yoyodyne/lectroids-common';

const Button: FC<ButtonProps> = ({ variant, size, className, ...props }) => {
  return <button {...props} className={twMerge(ButtonStyles({ variant, size }), className)} />;
};

export default Button;
