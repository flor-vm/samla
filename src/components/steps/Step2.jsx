import TextInput from '../input/TextInput.jsx';
import SelectInput from '../select/SelectInput.jsx';
import DropzoneField from '../dropzone/DropzoneField.jsx';
import Header from '../header/Header.jsx';
import Button from '../button/Button.jsx';
import styles from './Step2.module.css';

export default function Step2({ control, nextStep, setValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.formLeft}>
        <Header title={'Datos de Vivienda'} />
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
          ]}
        />
        <SelectInput
          label='Dirección'
          name='direccion'
          control={control}
          options={[
            { value: 'Opcion 1', label: '1' },
            { value: 'Opcion 2', label: '2' },
            { value: 'Opcion 3', label: '3' },
            { value: 'Opcion 4', label: '4' },
            { value: 'Opcion 5', label: '5' },
          ]}
        />
        <TextInput
          label='Ingresos Mensuales'
          name='ingresos_mensuales'
          placeholder={'$'}
          control={control}
          type='number'
        />
      </div>
      <div className={styles.formRight}>
        <DropzoneField
          name='documentImages'
          control={control}
          title='Fotografía de documento de identidad'
          setValue={setValue}
        />
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => reset()}
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
