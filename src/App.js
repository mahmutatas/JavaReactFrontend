import './App.css';
import MainDashboard from './layouts/MainDashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import JobAdvertisementsList from './pages/JobAdvertisementsList';
import EmployersList from './pages/EmployersList';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className = 'main'>
        <MainDashboard/>
      </Container>
      <EmployersList/>
      <JobAdvertisementsList/>

     
    </div>
  );
}

export default App;
