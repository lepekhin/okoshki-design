import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Label, LabelProps } from './Label';

interface InputProps extends Partial<LabelProps>, Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'list'> {
  ariaLabel?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['aria-label'];
  copy?: boolean;
  list?: string[];
  error?: string;
  name: string;
  type?: "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "textarea"
  | "time"
  | "url"
  | "week"
}

/**
 * Primary UI component for user input
 */
export const Input = ({
  ariaLabel,
  className,
  copy,
  error,
  hidden,
  id,
  name,
  label,
  list,
  sublabel,
  type = 'text',
  ...props
}: InputProps) => {
  const datalistId = `${name}List`;
  const inputProps = {
    autoFocus: error ? true : undefined,
    'aria-invalid': error ? true : undefined,
    'aria-label': ariaLabel ?? undefined,
    className: 'form__input h4',
    list: list ? datalistId : undefined,
    id: id ?? name,
    name,
  }

  return <p className={`form__row form__row--${type} ${className ?? ''}`} hidden={hidden}>
    {!ariaLabel && label && <Label label={label} sublabel={sublabel} id={inputProps.id} />}
    {/* @ts-expect-error добавить дженерик на тип */}
    {type === 'textarea' ? <textarea {...inputProps} {...props} /> :
      <span className="form__input-wrapper">
        <input type={type} {...inputProps} {...props} />
        {type === 'password' && <button className="form__input-btn form__input-btn--password" type="button">
          <span className="visually-hidden">Показать пароль</span>
        </button>}
        {copy && <button className="form__input-btn form__input-btn--copy" type="button">
          <span className="visually-hidden">Скопировать</span>
        </button>}
      </span>
    }
    {list && <datalist id={datalistId}>{list.map((option) => <option key={option} value={option} />)}</datalist>}
    {error && <span className="form__error h6">{error}</span>}
  </p>;
};
