import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './pages/registration-page/RegistrationPage';
import RegistrationHistory from './pages/registration-history/RegistrationHistory';
import { FormProvider } from './context/FormContext.jsx';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/registro/1' />}
          />
          <Route
            path='/registro/:step'
            element={<RegistrationPage />}
          />
          <Route
            path='/historial'
            element={<RegistrationHistory />}
          />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
