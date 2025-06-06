import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import swapiReducer from './store/swapiSlice.js'
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
  reducer: {
    swapi: swapiReducer
  }
})


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
