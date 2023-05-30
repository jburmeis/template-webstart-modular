import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/application";

export default function createStore() {
	const store = configureStore({
		reducer: {
			application: applicationSlice,
		},
		devTools: process.env.NODE_ENV !== "production",
	});
	return store;
}
