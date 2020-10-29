import { createSlice } from '@reduxjs/toolkit';
import { apifetchRequest } from './api';

const slice = createSlice({
  name: 'entities',
  initialState: {
    items: [],
    loading: true,
    erros: null,
    updating: {}
  },
  reducers: {
    entitiesReceived: (entities, action) => {
        entities.items = action.payload;
        entities.loading = false;
    },
    entityUpdating: (entities, action) => {
        entities.updating = action.payload;
        entities.loading = false;
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
    apifetchRequest({
      url,
      onSuccess: entitiesReceived.type
    })
  );
};

// Selector
export const getEntityById = (entity, id) => (dispatch, getState) => {
  dispatch(
    apifetchRequest({
      url: `${entity}/${id}`,
      onSuccess: entityUpdating.type,
    })
  );
}