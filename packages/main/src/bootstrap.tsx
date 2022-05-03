import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';

import { store, StoreProvider } from 'store/Store';
import { StateContent } from './components/StateContent';
import { Home } from './components/Home';
import { About } from './components/About';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='state' element={<StateContent />} />
        </Route>
      </Routes>
    </StoreProvider>
  </BrowserRouter>
);
