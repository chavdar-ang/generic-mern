import { createAction } from "@reduxjs/toolkit";

export const apifetchRequest = createAction("api/fetchRequest");
export const apifetchSuccess = createAction("api/fetchSuccess");
export const apifetchFailure = createAction("api/fetchFailure");