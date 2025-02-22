import { Controller } from 'react-hook-form';

export default function TextInput({
  label,
  name,
  placeholder,
  control,
  rules,
  type = 'text',
  required = true,
}) {
  return (
    <Controller
      name={name}
      defaultValue=''
      control={control}
      rules={{
        ...rules,
        ...(required && { required: 'Completa este campo.' }),
        ...(type === 'email' && {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Ingresa un correo válido.',
          },
        }),
      }}
      render={({ field, fieldState: { error } }) => (
        <div className='input-container'>
          <label className={error ? 'error' : undefined}>{label}</label>
          <input
            {...field}
            className={`input ${error ? 'error' : ''}`}
            type={type}
            placeholder={placeholder}
          />
          {error && <span className='error-helper'>{error.message}</span>}
        </div>
      )}
    />
  );
}
