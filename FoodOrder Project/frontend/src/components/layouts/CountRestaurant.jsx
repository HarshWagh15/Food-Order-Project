import React,{useEffect}from 'react'
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';

function CountRestaurant() {

    const dispatch =useDispatch()
    const{error,loading,count,showVegOnly,pureVegRestaurantsCount} = 
    useSelector(state => state.restaurants);


    useEffect(() => {
        dispatch(getRestaurants())
    },[dispatch])
    return (
        <div>
            {loading ? (<p>Loading Restaurant Count...</p>) :error ?
            (<p>Error: {error}</p>):(
            <p className='NumOfRestro'>
        {showVegOnly ? pureVegRestaurantsCount : count}{" "} 
        <span className='Restro'>
        {showVegOnly ? pureVegRestaurantsCount === 1
         ? "Restaurant":
         "Restaurants":
        count === 1? "Restaurant":"Restaurants"}</span>
            </p>
           )}
            <hr />
        </div>
    );
}

export default CountRestaurant
