import Button from '../button/Button';
import CameraCapture from '../camera-capture/CameraCapture';
import Header from '../header/Header';
import styles from './Step3.module.css';

export default function Step3({ control, setValue }) {
  return (
    <div className={styles.container}>
      <Header
        title={'¡Es hora de la selfie!'}
        enableIcon
        centerHorizontally
      />
      <CameraCapture
        name='selfie'
        message='Sonríe y asegúrate de tener buena iluminación.'
        control={control}
        rules={{ required: 'Debes tomar una selfie' }}
        setValue={setValue}
      />
      <Button
        className={styles.button}
        type='submit'
        variant='primary'>
        Continuar
      </Button>
    </div>
  );
}
