import { Controller } from 'react-hook-form';
import Label from '../label/Label';
import ErrorHelper from '../error-helper/ErrorHelper';
import styles from './TextInput.module.css';

export default function TextInput({
  label,
  name,
  placeholder,
  control,
  rules,
  type = 'text',
  required = false,
}) {
  return (
    <Controller
      name={name}
      defaultValue=''
      control={control}
      rules={{
        ...(required && { required: 'Completa este campo.' }),
        ...(type === 'email' && {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Ingresa un correo válido.',
          },
        }),
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <div className={styles.container}>
          <Label
            error={error}
            label={label}
          />
          <input
            {...field}
            className={`${styles.input} ${error ? styles.error : ''}`}
            type={type}
            placeholder={placeholder}
          />
          {error && <ErrorHelper message={error.message} />}
        </div>
      )}
    />
  );
}
