import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {
    // console.log(props.meal);
    const {idMeal,strMealThumb,strMeal}=props.meal;
    return (
        <div className='meal'>
                <h1 className='text-lg mb-3'>Product id :{idMeal}</h1>
                 <img className='w-60 h-60' src={strMealThumb}></img>
                <h1 className='text-xl font-bold mt-5 mb-5'> Pproduct Name: {strMeal}</h1>
                 <Link className='bg-sky-200 p-2 rounded mr-3' to={`/foods/${idMeal}`}>FoodDtails</Link>
                  <button className='bg-sky-200 p-2 rounded mr-3'>Show Details</button>
             </div>
    );
};

export default Meal;