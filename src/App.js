import React from "react";
import Main from './pages/main';
import Header from './components/Header'
import './styles.css';
import Routes from './routes';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);
export default App;