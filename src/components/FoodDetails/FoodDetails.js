import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    let { foodid } = useParams()
    let [foodss, setFoodss] = useState('')
    console.log(foodss)
    // let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodid}`
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodid}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodss(data.meals))
    }, [foodid])
    return (
        <div>
            <img src={foodss[0]?.strMealThumb} alt="" />
            <h1>Loading :{foodss.length}</h1>
            <h3>{foodss[0]?.strMeal}</h3>
            <h4>{foodss[0]?.strArea}</h4>
            <p>{foodss[0]?.strInstructions}</p>
        </div>
    );
};

export default FoodDetails;