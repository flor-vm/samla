import { useParams } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm.jsx';
import ImageSection from '../components/ImageSection.jsx';

export default function RegistrationPage() {
  const { step } = useParams();

  return (
    <div className='container'>
      {Number(step) === 1 && <ImageSection />}
      <div className='form-section'>
        <RegistrationForm />
      </div>
    </div>
  );
}
