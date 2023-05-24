import * as React from 'react';
import ReactDOM from 'react-dom/client'

import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import setupStore from 'store';

import App from './components/App/App';

// Create the redux store
const store = setupStore();

// Create typed versions of the general 'useDispatch' and 'useSelector' hooks
// Infer the 'RootState' and 'AppDispatch' types from the store
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// The root component of the entire app
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Entrypoint for react
const container = document.getElementById('app-main') as HTMLDivElement;
const root = ReactDOM.createRoot(container);
root.render(<Root />);