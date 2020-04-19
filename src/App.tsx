import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import EstabelecimentoLogin from './pages/EstabelecimentoLogin';
import EstabelecimentoFila from './pages/EstabelecimentoFila';
import EstabelecimentoCadastro from './pages/EstabelecimentoCadastro';
import ClienteLogin from './pages/ClienteLogin';
import ClienteCadastro from './pages/ClienteCadastro';
import CriarFila from './pages/CriarFila';
import Home from './pages/Home';
import EstabelecimentoHome from './pages/EstabelecimentoHome';
import ClienteHome from './pages/ClienteHome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ClienteFilasEstabelecimento from './pages/ClienteFilasEstabelecimento';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
        <Route path="/clientes/entrar" component={ClienteLogin} exact={true} />
        <Route path="/clientes/cadastro" component={ClienteCadastro} exact={true} />
        <Route path="/clientes" component={ClienteHome} exact={true} />
        <Route path="/estabelecimentos/entrar" component={EstabelecimentoLogin} exact={true} />
        <Route path="/estabelecimentos/cadastro" component={EstabelecimentoCadastro} exact={true} />
        <Route path="/estabelecimentos/criar-fila" component={CriarFila} exact={true} />
        <Route path="/estabelecimentos/fila/:id" component={EstabelecimentoFila} exact={true} />
        <Route path="/cliente/estabelecimento/:id" component={ClienteFilasEstabelecimento} exact={true} />
        <Route path="/estabelecimentos" component={EstabelecimentoHome} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;