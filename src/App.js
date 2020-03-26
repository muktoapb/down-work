import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Usermain from './components/UserMain/Usermain';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
     <Usermain></Usermain>
    </div>
  );
}

export default App;
