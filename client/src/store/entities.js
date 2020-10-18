import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'entities',
  initialState: {
    list: []
  },
  reducers: {
    entitiesReceived: (entities, action) => {
        entities.list = action.payload;
    }
  },
});

const {
    entitiesReceived,
} = slice.actions;

export default slice.reducer;

// Action Creators
export const loadEntities = (url) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url,
      onSuccess: entitiesReceived.type
    })
  );
};