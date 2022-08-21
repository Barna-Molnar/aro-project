import AppStyles from '../styles/Globale.module.scss';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { sections } from '../assets/data';
import Section from './Section';


function App() {

  const handleScrollToForm = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  };


  return (
    <div className={AppStyles.appContainer}>
      <Header onScrollToBottom={handleScrollToForm} />
      {sections.map((sectionProps, i) =>
        <Section
          key={i}
          {...sectionProps}
          onScrollToBottom={handleScrollToForm}
        />
      )}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
