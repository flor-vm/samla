import TextInput from '../input/TextInput.jsx';
import PhoneInputField from '../phone-input/PhoneInputField.jsx';
import SelectInput from '../select/SelectInput.jsx';
import Header from '../header/Header.jsx';
import Button from '../button/Button.jsx';
import styles from './Step1.module.css';

export default function Step1({ control, nextStep }) {
  return (
    <div className={styles.container}>
      <Header title={'Registro'} />
      <TextInput
        label='Nombres'
        name='nombres'
        placeholder='Ingresar nombres'
        control={control}
        required
      />
      <TextInput
        label='Apellidos'
        name='apellidos'
        placeholder='Ingresar apellidos'
        control={control}
      />
      <TextInput
        label='Correo'
        name='email'
        placeholder='ejemplo@email.com'
        control={control}
        type='email'
      />
      <PhoneInputField
        label='Teléfono'
        name='telefono'
        control={control}
      />
      <SelectInput
        label='Tipo de identificación'
        name='tipo_identificacion'
        control={control}
        options={[
          { value: 'dni', label: 'Cédula de identidad' },
          { value: 'dimex', label: 'DIMEX' },
          { value: 'pasaporte', label: 'Pasaporte' },
        ]}
      />
      <TextInput
        label='Número de identificación'
        name='identificacion'
        placeholder='0000-0'
        control={control}
        type='text'
      />
      <Button
        onClick={nextStep}
        variant='primary'
        className={styles.button}>
        Continuar
      </Button>
    </div>
  );
}
