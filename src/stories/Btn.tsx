import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface BtnProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'size'|'type'> {
  add?: boolean;
  ariaLabel?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['aria-label'];
  hasPopup?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['aria-haspopup'];
  href?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>['href'];
  label?: React.ReactNode;
  loading?: true;
  size?: 'small' | 'medium' | 'large';
  sublabel?: string;
  target?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>['target'];
  type?: 'button' | 'submit' | 'reset' | 'link';
  view?: 'primary' | 'secondary' | 'text';
}

/**
 * Primary UI component for user interaction
 */
export const Btn = ({
  add,
  hasPopup,
  href,
  label,
  loading,
  role,
  size = 'medium',
  sublabel,
  target,
  type = 'button',
  view = 'primary',
  ...props
}: BtnProps) => {
  const sizeToFontClassMap = view === 'text' ? {
      large: 'h4 fw-medium',
      medium: 'h5 fw-medium',
      small: 'h6 fw-medium'
  } : {
      large: 'h4 fw-bold',
      medium: 'fw-bold',
      small: 'h5 fw-medium'
  };
  const className =  ['btn', `btn--size-${size}`, `btn--view-${view}`, sizeToFontClassMap[size], add ? 'btn--add' : ''].join(' ');
  return type === 'link' ? (<a className={className} href={href} target={target} role={role}>{label}{sublabel && <><br/><span className='btn__sublabel h6'>{ sublabel }</span></>}</a>) : (
    <button
      aria-haspopup={hasPopup}
      className={className}
      type={type}
      role={role}
      data-attach-loading={loading ? true : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
