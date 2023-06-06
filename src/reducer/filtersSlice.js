import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: ''};

 export const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        setFilter: {
            reducer(state, actions) {
                state.filter = actions.payload;
            }
            
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilterValue = state => state.filter.filter;
