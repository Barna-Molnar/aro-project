import AppStyles from '../styles/Globale.module.scss';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { sections } from '../assets/data';
import Section from './Section';


function App() {
  return (
    <div className={AppStyles.appContainer}>
      <Header />
      {sections.map((sectionProps, i) => <Section {...sectionProps} key={i} />)}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
