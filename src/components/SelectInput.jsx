import { Controller } from 'react-hook-form';
import Select from 'react-select';

export default function SelectInput({
  label,
  name,
  control,
  rules,
  options,
  required = true,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...rules,
        ...(required && { required: 'Completa este campo.' }),
      }}
      render={({ field, fieldState: { error } }) => (
        <div className='custom-select-wrapper'>
          <label className={error ? 'error' : undefined}>{label}</label>
          <Select
            {...field}
            options={options}
            classNamePrefix='custom-react-select'
            classNames={{
              control: (state) =>
                `${state.isFocused ? 'focus' : error ? 'error' : undefined}`,
            }}
            placeholder='Seleccionar'
          />
          {error && <span className='error-helper'>{error.message}</span>}
        </div>
      )}
    />
  );
}
