import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={1500} />
  </Provider>
);