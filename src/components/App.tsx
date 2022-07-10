import AppStyles from '../styles/Globale.module.scss';
import Header from './Header';
import MainComponent from './MainComponent';
import { about, rent, shuttle, kurier } from '../assets/data';
import Form from './Form';
import Footer from './Footer';

function App() {
  // const sections: SectionProps[] = [{}];
  return (
    <div className={AppStyles.appContainer}>
      <Header />
      {/* MainComponent should be renamed!  */}
      {/* {sections.map(section => <Section {...section} />)}
      <Section {...sectionProps} /> */}
      <MainComponent data={about} textPosition='left' />
      <MainComponent data={rent} textPosition='right' />
      <MainComponent data={shuttle} textPosition='left' />
      <MainComponent data={kurier} textPosition='right' />
      <Form />
      <Footer/>

    </div>
  );
}

export default App;
