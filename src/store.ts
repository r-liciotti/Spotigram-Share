import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './features/colorsSlice';
import effectsReducer from './features/effectSlice';
import meshReducer from './features/meshSlice';
import imageReducer from './features/imageSlice';
import gridReducer from './features/gridSlice';
import fractalReducer from './features/fractalSlice';
import trackReduces from './features/trackSlice';

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
        effects: effectsReducer,
        mesh: meshReducer,
        image: imageReducer,
        grid: gridReducer,
        fractal: fractalReducer,
        track: trackReduces,
    },
});

// Tipi derivati dallo store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
