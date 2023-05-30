import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "application/demo";
import { globalActions } from "store/globalActions";

// Type for the slice state
export type ApplicationState = {
	readonly elements: string[];
};

// Initial state of the slice
const initialState: ApplicationState = {
	elements: [generateId(), generateId(), generateId()],
};

export const applicationSlice = createSlice({
	name: "application",
	initialState,

	// Reducer for implicitly defined actions that are bound to this slice
	reducers: {
		// Example: Action without parameter
		addElement: (state) => {
			const newElement = Math.floor(Math.random() * 1000).toString();
			state.elements.push(newElement);
		},
		// Example: Action with parameter
		addMultipleElements: (state, action: PayloadAction<number>) => {
			for (let i = 0; i < action.payload; i++) {
				state.elements.push(generateId());
			}
		},
	},

	// Reducer for actions that are not exclusively bound to this slice
	extraReducers: (builder) => {
		builder.addCase(globalActions.applicationReset, (state, action) => {
			const { numElements } = action.payload;
			state.elements = [];
			for (let i = 0; i < numElements; i++) {
				state.elements.push(generateId());
			}
		});
	},
});

export const { addElement, addMultipleElements } = applicationSlice.actions;

export default applicationSlice.reducer;
