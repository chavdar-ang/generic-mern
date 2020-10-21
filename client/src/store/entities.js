import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'entities',
  initialState: {
    list: [],
    updating: {}
  },
  reducers: {
    entitiesReceived: (entities, action) => {
        entities.list = action.payload;
    },
    entityUpdating: (entities, action) => {
        entities.updating = action.payload;
    }
  },
});

const {
    entitiesReceived,
    entityUpdating
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

// Selector
export const getEntityById = (entity, id) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `${entity}/${id}`,
      onSuccess: entityUpdating.type,
    })
  );
}