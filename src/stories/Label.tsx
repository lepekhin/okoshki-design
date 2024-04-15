import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface LabelProps {
  id: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['id'];
  label: string;
  labelClass?: string;
  sublabel?: React.ReactNode;
}

/**
 * Labels for inputs
 */
export const Label = ({
  id,
  labelClass,
  label,
  sublabel,
}: LabelProps) => <>
  <label htmlFor={id} className={`form__label ${labelClass ?? 'h5 fw-bold'}`}>{label}</label>
  {sublabel && <small className="form__sublabel h6">{sublabel}</small>}
</>;
