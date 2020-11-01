import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Inicio} exact />
      <Route path="/sobre" component={Sobre} exact />
    </HashRouter>
  );
}

const Inicio = () => (<div><h1>Início</h1></div>);
const Sobre = () => (<div><h1>Sobre</h1></div>);

export default App;