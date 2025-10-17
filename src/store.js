// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import cartReducer from your CartSlice file
import cartReducer from './CartSlice';

// Create and configure the Redux store
const store = configureStore({
    reducer: {
        // Assign cart slice state to cartReducer
        cart: cartReducer,
    },
});

// Export the store to use in <Provider store={store}>
export default store;
