import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import alerter from './middleware/alerter';

export default function () {
    return configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware(),
        api,
        alerter
      ],
    });
  }