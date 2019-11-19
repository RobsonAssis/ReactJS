import React from 'react';
import Main from './pages/main';
import Router from './routes';
import Header from './components/Header';

const App = () => (
    <div className="App">
      <Header />
      <Router />
    </div>
);

export default App;
