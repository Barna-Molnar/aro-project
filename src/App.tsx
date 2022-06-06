import React from 'react';
import Header from './components/Header';
import gobalStyle from './styles/Globale.module.scss'

function App() {
  return (
    <div className={gobalStyle.reset}>
      <Header />
    </div>
  );
}

export default App;
