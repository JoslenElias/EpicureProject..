import { configureStore } from '@reduxjs/toolkit';
import chefSlicer from './components/HomePage/Reducer/chefSlicer';
import dishSlicer, { dishesSlice } from './components/HomePage/Reducer/dishSlicer';
import restaurantsSlicer, { restaurantsSlice } from "./components/HomePage/Reducer/restaurantsSlicer";
//  const serviceApi = createServiceApi('/some/url');

export default configureStore({
    reducer:{

        restaurants: restaurantsSlicer,
        dishes: dishSlicer,
        chefs: chefSlicer,

    },
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware()
})