import Footer from './Footer';
import { render, screen } from '@testing-library/react';


it('should render Footer properly', () => {

  render(
    <Footer />
  );

  screen.getByText(/ Copyright 2022/i);
  screen.getByText(/Impressum/i);
  screen.getByText(/Datenschutz/i);
  screen.getByText(/Cookie-Enstellungen/i);
});