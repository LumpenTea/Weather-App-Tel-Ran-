import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherInfo: {
            temp: 0,
            city: '',
            country: '',
            pressure: 0,
            sunset: 0,
            message: null
        }
    },
    reducers: {
        weather(state, action) {
            state.weatherInfo = action.payload;
        },
        error(state) {
            state.weatherInfo.message = 'Enter correct city name';
        }
    }
})

export const { weather, error } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;