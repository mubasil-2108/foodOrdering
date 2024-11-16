import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = ({ windowSize }) => {
    const { mealid } = useParams();
    const [mealInfos, setMealInfos] = useState();
    const isMobile = windowSize.width < 768;


    const searchFood = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        let response = await fetch(url);
        response = await response.json();
        setMealInfos(response.meals[0]);
    }
    if (mealInfos !== "") {
        searchFood();
    }
    return (
        <div className='mainDiv'>
            {
                !mealInfos ? <h1>Data Not Found</h1>
                    :
                    <div className='mealInfos' style={{ flexDirection: isMobile && 'column', height: 'auto', paddingTop: isMobile && '30px' }} >
                        <img src={mealInfos.strMealThumb} style={{ position: 'relative', width: isMobile && '320px', height: isMobile && '320px', }} />
                        <div className='info' style={{ marginTop: isMobile && 0, display: isMobile && 'flex', flexDirection: isMobile && 'column' }}>
                            <h1>Recipe Detail</h1>
                            <button >{mealInfos.strMeal}</button>
                            <h3>Instruction's</h3>
                            <p>{mealInfos.strInstructions}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default MealInfo