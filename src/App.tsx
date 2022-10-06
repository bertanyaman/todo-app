import React from 'react';
import './App.css';
import Categories from './Categories';
import Header from './Header';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
