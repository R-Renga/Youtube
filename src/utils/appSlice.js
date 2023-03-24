import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen : true
    },
    reducers: {
        isToggle: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        clearToggle: (state) => {
            state.isMenuOpen = false;
        }
    }
})

export const {isToggle ,clearToggle} = appSlice.actions

export default appSlice.reducer;