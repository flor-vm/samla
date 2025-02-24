import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormContext } from '../../context/FormContext';
import SideBanner from '../../components/side-banner/SideBanner.jsx';
import Step1 from '../../components/steps/Step1.jsx';
import Step2 from '../../components/steps/Step2.jsx';
import Step3 from '../../components/steps/Step3.jsx';
import arrow from '../../assets/arrow.png';
import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
  const { control, handleSubmit, setValue, trigger, getValues, reset } = useForm();
  const navigate = useNavigate();
  const { step } = useParams();
  const stepNumber = parseInt(step, 10);
  const { addDataToHistory } = useFormContext();

  // Redirige si accede a un paso sin datos previos
  useEffect(() => {
    const formData = getValues();
    if (stepNumber > 1 && !formData.name) {
      navigate('/registro/1');
    }
  }, [stepNumber, getValues, navigate]);

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) navigate(`/registro/${stepNumber + 1}`);
  };

  const onSubmit = (data) => {
    addDataToHistory(data);
    navigate('/historial');
  };

  const goBack = () => navigate(-1);

  return (
    <div className={stepNumber === 1 ? styles.container : styles.containerFull}>
      <SideBanner step={stepNumber} />
      {stepNumber !== 1 && (
        <button
          type='button'
          className={styles.backButton}
          onClick={goBack}>
          <img
            src={arrow}
            alt='Back'
            className={styles.backIcon}
          />
        </button>
      )}
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {stepNumber === 1 && (
            <Step1
              control={control}
              nextStep={nextStep}
            />
          )}
          {stepNumber === 2 && (
            <Step2
              control={control}
              nextStep={nextStep}
              setValue={setValue}
              reset={reset}
            />
          )}
          {stepNumber === 3 && (
            <Step3
              control={control}
              setValue={setValue}
            />
          )}
        </form>
      </div>
    </div>
  );
}
