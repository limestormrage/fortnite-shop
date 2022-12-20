import React from 'react';
import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { Main } from '../../layout/main/main';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
