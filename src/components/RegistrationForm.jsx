import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import TextInput from './TextInput.jsx';
import PhoneInputField from './PhoneInputField.jsx';
import DropzoneField from './DropzoneField';
import CameraCapture from './CameraCapture';
import SelectInput from './SelectInput.jsx';
import logo from '../assets/logo.png';

const RegistrationForm = () => {
  const { control, handleSubmit, setValue, trigger } = useForm();
  const navigate = useNavigate();
  const { step } = useParams();
  const stepNumber = parseInt(step, 10);

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) navigate(`/registro/${stepNumber + 1}`);
  };

  const onSubmit = (data) => console.log('Formulario Enviado:', data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepNumber === 1 && (
          <div className='form'>
            <img
              src={logo}
              alt='logo'
              className='logo'
            />
            <h1>Registro</h1>
            <TextInput
              label='Nombres'
              name='nombres'
              placeholder='Ingresar nombres'
              control={control}
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
              name='tipo-id'
              control={control}
              options={[
                { value: 'dni', label: 'Cédula de identidad ' },
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
            <button
              className='form-button'
              type='button'
              onClick={nextStep}>
              Continuar
            </button>
          </div>
        )}

        {stepNumber === 2 && (
          <div className='form'>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <h1>Datos de Vivienda</h1>
              <SelectInput
                label='Departamento'
                name='departamento'
                control={control}
                options={[
                  { value: 'Opcion 1', label: '1' },
                  { value: 'Opcion 2', label: '2' },
                  { value: 'Opcion 3', label: '3' },
                ]}
              />
              <SelectInput
                label='Municipio'
                name='municipio'
                control={control}
                options={[
                  { value: 'Opcion 1', label: '1' },
                  { value: 'Opcion 2', label: '2' },
                  { value: 'Opcion 3', label: '3' },
                ]}
              />
              <SelectInput
                label='Dirección'
                name='dirección'
                control={control}
                options={[
                  { value: 'Opcion 1', label: '1' },
                  { value: 'Opcion 2', label: '2' },
                  { value: 'Opcion 3', label: '3' },
                ]}
              />
              <TextInput
                label='Ingresos Mensuales'
                name='ingresos_mensuales'
                control={control}
                type='number'
              />
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <DropzoneField
                name='documentImages'
                control={control}
                label='Subir Documento'
                setValue={setValue}
              />
              <button
                className='form-button'
                type='button'
                onClick={nextStep}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {stepNumber === 3 && (
          <>
            <CameraCapture
              name='selfie'
              control={control}
              rules={{ required: 'Debes tomar una selfie' }}
              setValue={setValue}
            />
            <button
              className='form-button'
              type='submit'>
              Enviar
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default RegistrationForm;
