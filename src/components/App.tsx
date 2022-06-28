import AppStyles from '../styles/Globale.module.scss';
import Header from './Header';
import MainComponent from './MainComponent';
import { about, rent, shuttle, kurier } from '../assets/data';
import Form from './Form';

function App() {
  return (
    <div className={AppStyles.appContainer}>
      <Header />
      {/* MainComponent should be renamed!  */}
      <MainComponent data={about} textPosition='left' />
      <MainComponent data={rent} textPosition='right' />
      <MainComponent data={shuttle} textPosition='left' />
      <MainComponent data={kurier} textPosition='right' />
      <Form />

      <br />
      {/* Footer */}

    </div>
  );
}

export default App;
