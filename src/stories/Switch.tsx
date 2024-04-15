import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface SwitchProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'|'className'> {
  big?: boolean;
  sublabel?: React.ReactNode;
  label?: string;
}

/**
 * Тумблер
 */
export const Switch = ({
  big,
  label,
  sublabel,
  ...props
}: SwitchProps) => {
  return <><label className={`form__row form__row--switch ${big ? 'form__row--switch_big h4' : 'h5'}`}>
  <input
      className="visually-hidden"
      type="checkbox"
      {...props}
      // @ts-expect-error добавить дженерик на тип
      // eslint-disable-next-line react/no-unknown-property
      switch
  />
  <span className="form__switch"></span>{label}
</label>
{sublabel && <small className="form__sublabel h6">{sublabel}</small>}</>
};
