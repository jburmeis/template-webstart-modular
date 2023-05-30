import { createAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { RootState } from "index";
import { addElement } from "./slices/application";

/**
 * Definition of actions, that are not exclusively bound to specific slices.
 * This can be useful for application-wide updates, e.g. to initialize all slices at application startup.
 */
export const globalActions = {
	applicationReset: createAction<{ numElements: number }>("global/reset"),
};

/**
 * Example for a 'thunk' => a function that dispatches multiple actions, also to arbitrary store slices.
 * This can be useful if a (conditional) sequence of actions shall be performed.
 * getStore() can be used to access the current store state
 */
export const addRandomElements = () => {
	return (dispatch: Dispatch, getStore: () => RootState) => {
		const numElements = 1 + Math.floor(Math.random() * 3);
		for (let i = 0; i < numElements; i++) {
			dispatch(addElement());
		}
	};
};
