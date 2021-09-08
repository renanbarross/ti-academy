import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';

import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import {CadastrarCliente} from './pages/Cliente/CadastrarCliente';
import {EditarCliente} from './pages/Cliente/EditarCliente';
import {ExcluirCliente} from './pages/Cliente/ExcluirCliente';

import {VisualizarPedido} from './pages/Pedido/VisualizarPedido';
import {CadastrarPedido} from './pages/Pedido/CadastrarPedido';
import {EditarPedido} from './pages/Pedido/EditarPedido';
import {ExcluirPedido} from './pages/Pedido/ExcluirPedido';

import {VisualizarServico} from './pages/Servico/VisualizarServico';
import {CadastrarServico} from './pages/Servico/CadastrarServico';
import {EditarServico} from './pages/Servico/EditarServico';
import {ExcluirServico} from './pages/Servico/ExcluirServico';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/editarcliente" component={EditarCliente}/>
          <Route path="/excluircliente" component={ExcluirCliente}/>

          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/editarpedido" component={EditarPedido}/>
          <Route path="/excluirpedido" component={ExcluirPedido}/>

          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/cadastrarservico" component={CadastrarServico}/>
          <Route path="/editarservico" component={EditarServico}/>
          <Route path="/excluirservico" component={ExcluirServico}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;