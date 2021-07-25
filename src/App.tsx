import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* Colocando as rotas dentro do AuthContext.provider, faz com que ambos encherguem seus valores */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
