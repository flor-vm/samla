import { useNavigate } from 'react-router-dom';
import TextInput from '../input/TextInput.jsx';
import SelectInput from '../select/SelectInput.jsx';
import DropzoneField from '../dropzone/DropzoneField.jsx';
import Header from '../header/Header.jsx';
import Button from '../button/Button.jsx';
import styles from './Step2.module.css';


export default function Step2({ control, nextStep, setValue, reset }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    reset();
    navigate('/registro/1');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formLeft}>
        <Header title={'Datos de Vivienda'} />
        <SelectInput
          label='Departamento'
          name='department'
          control={control}
          options={[
            { value: 'Opcion 1', label: '1' },
            { value: 'Opcion 2', label: '2' },
            { value: 'Opcion 3', label: '3' },
          ]}
        />
        <SelectInput
          label='Municipio'
          name='municipality'
          control={control}
          options={[
            { value: 'Opcion 1', label: '1' },
            { value: 'Opcion 2', label: '2' },
          ]}
        />
        <TextInput
          label='Dirección'
          placeholder='Ingresar dirección'
          name='address'
          control={control}
          type='text'
        />
        <TextInput
          label='Ingresos Mensuales'
          name='monthly_income'
          placeholder={'$'}
          control={control}
          type='number'
        />
      </div>
      <div className={styles.formRight}>
        <DropzoneField
          name='document_images'
          control={control}
          title='Fotografía de documento de identidad'
          setValue={setValue}
        />
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleCancel}
            variant='secondary'>
            Cancelar
          </Button>
          <Button
            onClick={nextStep}
            variant='primary'>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
}
