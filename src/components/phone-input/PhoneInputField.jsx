import { Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';
import Label from '../label/Label';
import ErrorHelper from '../error-helper/ErrorHelper';
import styles from './PhoneInputField.module.css';

const phoneUtil = PhoneNumberUtil.getInstance();

export default function PhoneInputField({
  label,
  name,
  control,
  rules,
  required = false,
}) {
  const isPhoneValid = (phone) => {
    try {
      const parsedPhone = phoneUtil.parseAndKeepRawInput(phone);
      return phoneUtil.isValidNumber(parsedPhone);
    } catch (error) {
      return false;
    }
  };

  return (
    <Controller
      defaultValue=''
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          if (required && value.length < 5) {
            return 'Completa este campo.';
          } else if (value.length > 4) {
            return isPhoneValid(value) ? true : 'Ingresa un número válido.';
          } else {
            return true;
          }
        },
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <div className={styles.customContainer}>
          <Label
            error={error}
            label={label}
          />
          <PhoneInput
            defaultCountry='cr'
            value={field.value || ''}
            onChange={(phone) => field.onChange(phone)}
            className={`${styles.container} ${error ? styles.error : ''}`}
            inputProps={{ className: styles.input }}
            disableDialCodeAndPrefix
            showDisabledDialCodeAndPrefix
            countrySelectorStyleProps={{
              buttonClassName: styles.button,
              dropdownStyleProps: { className: styles.dropdown },
            }}
            dialCodePreviewStyleProps={{ className: styles.dialCode }}
          />
          {error && <ErrorHelper message={error.message} />}
        </div>
      )}
    />
  );
}
