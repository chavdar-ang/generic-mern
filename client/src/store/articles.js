import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'articles',
  initialState: {
    list: []
  },
  reducers: {
    articlesReceived: (articles, action) => {
        articles.list = action.payload;
    }
  },
});

const {
    articlesReceived,
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = '/articles';

export const loadArticles = () => (dispatch, getState) => {
//   const { lastFetch } = getState().entities.bugs;

//   const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
//   if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onSuccess: articlesReceived.type
    })
  );
};