import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { Label, LabelProps } from './Label';

interface SelectProps extends LabelProps, Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'id'> {
  emptyOption?: string;
  error?: string;
  list: Record<string, string>;
  selected?: string;
}

/**
 * Primary UI component for selection
 */
export const Select = ({ className, emptyOption, error, label, list = {}, sublabel, selected, ...props }: SelectProps) => {
  const id = props.id ?? props.name;

  return <p className={`form__row form__row--select ${className ?? ''}`}>
    <Label label={label} sublabel={sublabel} id={id} />
    <select className='form__input h4' {...props}>
      {!props.required && emptyOption && <option>{emptyOption}</option>}
      {Object.entries(list).map(([value, text]) => <option key={value} selected={selected === value}>{text}</option>)}
    </select>
    {error && <span className="form__error h6">{ error }</span>}
  </p>;
};
