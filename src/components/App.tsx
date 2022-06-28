
import Header from './Header';
import MainComponent from './MainComponent';
import { about, rent, shuttle, kurier } from '../assets/data';

function App() {
  return (
    <div>
      <Header />
      <MainComponent data={about} textPosition='left' />
      <MainComponent data={rent} textPosition='right' />
      <MainComponent data={shuttle} textPosition='left' />
      <MainComponent data={kurier} textPosition='right' />
    </div>
  );
}

export default App;
