import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './pages/registration-page/RegistrationPage';

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
