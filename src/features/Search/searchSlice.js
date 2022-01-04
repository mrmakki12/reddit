import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({

    name: 'search',

    initialState: {
        term: ''
    },

    reducers: {

        setSearchTerm: (state, action) => {
            state.term = action.payload;
        }

    }

})

export default searchSlice.reducer;

export const { setSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.term;