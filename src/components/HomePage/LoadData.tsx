import { useDispatch } from "react-redux";
import { DishesURL, RestaurantsURL } from "../Constans/Constans";
import { setRestaurants } from "./Reducer/restaurantsSlicer";
import FetchData from "./FetchData";
import { setDishes } from "./Reducer/dishSlicer";


export async function useFetchAndLoadData() {


    const dispatch = useDispatch();

    const restaurantsResponse = await FetchData(RestaurantsURL);
    dispatch(setRestaurants(restaurantsResponse));

    console.log(restaurantsResponse);

     const dishsResponse = await FetchData(DishesURL);
     dispatch(setDishes(dishsResponse));

    // const chefsResponse = await FetchData(ChefsURL);
    // dispatch(seChefs(chefsResponse));   
}