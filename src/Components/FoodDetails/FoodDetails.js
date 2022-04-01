import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodsId}=useParams();
    const [meal,setMeal]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodsId}`;
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeal(data.meals[0]))
    },[foodsId])

    console.log(meal);


    return (
        <div>
            <h1 className='text-2xl font-bold mt-10'>  {meal.strMeal} is very mojadar khabar.  </h1>
            <div className='container justify-center m-auto  mt-10'>
                <img className='w-[400px] m-auto' src={meal.strMealThumb}></img>
                <h1 className='text-2xl font-bold'>Name: {meal.strMeal}</h1>
                <h1 className='text-lg font-semibold'>Instructions: {meal.strInstructions}</h1>
                <h1 className='text-lg font-bold'>Area: {meal.strArea}</h1>
                <h1 className='text-lg font-bold'> Id:  {foodsId}{}</h1>
            </div>
        </div>
    );
};

export default FoodDetails;