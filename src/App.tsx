import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' 

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

// Criando um contexto para que os componentes compartilhem dados entre si
export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        {/* Colocando as rotas dentro do testContext.provider, faz com que ambos encherguem seus valores */}
        <Route path="/" exact={true} component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
