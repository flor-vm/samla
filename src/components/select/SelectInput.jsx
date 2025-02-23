import { Controller } from 'react-hook-form';
import Select from 'react-select';
import Label from '../label/Label';
import ErrorHelper from '../error-helper/ErrorHelper';
import './SelectInput.css';

export default function SelectInput({
  label,
  name,
  control,
  rules,
  options,
  required = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...(required && { required: 'Completa este campo.' }),
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <div className='custom-select-container'>
          <Label
            error={error}
            label={label}
          />
          <Select
            {...field}
            options={options}
            classNamePrefix='custom-select'
            classNames={{
              control: (state) =>
                `${state.isFocused ? 'focus' : error ? 'error' : undefined}`,
            }}
            placeholder='Seleccionar'
          />
          {error && <ErrorHelper message={error.message} />}
        </div>
      )}
    />
  );
}
