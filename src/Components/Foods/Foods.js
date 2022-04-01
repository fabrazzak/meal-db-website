import React, { useEffect, useState } from 'react';
import Meal from '../Meals/Meal';

const Foods = () => {
  const [searchtext,setSearchText]=useState('');
  const [meals, setMeal]=useState([]);
  useEffect(()=>{
      
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`;
     fetch(url)
     .then(res =>res.json())
     .then(data => setMeal(data.meals))
  },[searchtext]);

  const searchFood=e=>{
    setSearchText(e.target.value);

  }


    return (
        <div>
            <h1 className='text-4xl p-5 mb-5'>Find food you want</h1>
            <label>
              <input onChange={searchFood} type="text" placeholder='Type your keyword'className='border-stone-600 border-2 w-80 p-2 rounded text-lg text-black-200 font-bold'></input>
            </label>  
            <h1>Meal Iteam :{meals.length}</h1>  
           <div className='meals'>
                {
                    
                    
                      meals?.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
            
        </div>
    );
};

export default Foods;