import { createRoot } from 'react-dom/client';
import { App } from './App';

import { store, StoreProvider } from 'store/Store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StoreProvider store={store} >
    <App />
  </StoreProvider>
);
