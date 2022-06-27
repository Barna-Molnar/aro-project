
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import { about, rent, shuttle, kurier } from './data';

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
