import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";

const slice = createSlice({
    name: 'alerts',
    initialState: [],
    reducers: {
      alertAdded: (alerts, action) => {
        alerts.push(action.payload)
      },
      alertRemoved: (alerts, action) => {
        return alerts.filter((alert) => alert.id !== action.payload.id);
      }
    },
  });

export const { alertAdded, alertRemoved } = slice.actions;

export default slice.reducer;

export const addAlert = alert => dispatch => {
    let id = uuid();
  
    dispatch({
        type: alertAdded.type,
        payload: {
            id: id,
            message: alert.message,
            alertType: alert.alertType
        }
    });

    setTimeout(() => {
        dispatch({
            type: alertRemoved.type,
            payload: {
                id: id
            }
        })
    }, 3000);
  };