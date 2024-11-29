import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialWeatherState = {
  weather: {
    minTemp: "0",
    maxTemp: "3",
    temp: "3",
    sunrise: "6:00",
    sunset: "18:00",
    pressure: "1atm",
    humidity: "70%",
    wind: "4mph",
    feels: "5",
    description: "Snow",
    mainWeather: "Snow",
  },
  userData: {
    city: "london",
    country: "UK",
  },
};

const initialLoadingState = {
  isLoading: true
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    updateWeather: (state, action) => {
      state.weather = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateWeather, updateUserData } = weatherSlice.actions;
export const { setLoading } = loadingSlice.actions;

const weatherStore = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default weatherStore;