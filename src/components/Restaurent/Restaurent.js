import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './Restaurent.css'

const Restaurent = () => {
    let [searchText, setSearchText] = useState('')
    let [foods, setFoods] = useState([])
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searchText])
    let handlefood = (e) => {
        let getFormInput = e.target.value
        setSearchText(getFormInput)
    }
    return (
        <div>
            <input type="text" placeholder='Enter food name' onChange={handlefood} name="" id="" />
            <div className='res-grid'>
                {
                    foods.map(food =>
                        <Foods
                            key={food.idMeal}
                            food={food}
                        ></Foods>
                    )
                }
            </div>
        </div>
    );
};

export default Restaurent;