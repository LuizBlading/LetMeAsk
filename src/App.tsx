import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* Colocando as rotas dentro do AuthContext.provider, faz com que ambos encherguem seus valores */}
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
