import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});