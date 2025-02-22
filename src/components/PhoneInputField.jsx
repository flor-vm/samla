import { Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';

const phoneUtil = PhoneNumberUtil.getInstance();

export default function PhoneInputField({ label, name, control, required = true }) {
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
      }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label className={error ? 'error' : undefined}>{label}</label>
          <PhoneInput
            defaultCountry='cr'
            value={field.value || ''}
            onChange={(phone) => field.onChange(phone)}
            className={`phone-input-container ${error ? 'error' : ''}`}
            inputProps={{ className: 'phone-input' }}
            disableDialCodeAndPrefix
            showDisabledDialCodeAndPrefix
            dialCodePreviewStyleProps={{ className: 'phone-input-dial-code' }}
          />
          {error && <span className='error-helper'>{error.message}</span>}
        </div>
      )}
    />
  );
}
