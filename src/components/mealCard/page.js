import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MealCard = (props) => {
  const isMobile = props.windowSize.width < 768;
  return (
    <div className="meal" style={{ width: isMobile ? '80%' : '90%' }}>
      {
        props.mealDetail ?
          props.mealDetail.map((meal, index) => {
            return (
              <StyledWrapper key={meal.idMeal}>
                <div className="card" style={{ width: isMobile ? '290px' : '290px' }}>
                  <div className="bg" />
                  <div className="blob" />
                  <div className='mealImg' style={{ zIndex: 3, width: isMobile ? '280px' : '280px' }} >
                    <img src={meal.strMealThumb} />
                    <p>{meal.strMeal}</p>
                    <NavLink to={`/${meal.idMeal}`}>
                      <button className='mealCardButton'>Recipe</button>
                    </NavLink></div>
                </div>
              </StyledWrapper>
              // <div className='mealImg' key={meal.idMeal} style={{ width: isMobile ? '280px' : '280px' }}>
              //     <img src={meal.strMealThumb} />
              //     <p>{meal.strMeal}</p>
              //     <NavLink to={`/${meal.idMeal}`}>
              //         <button className='mealCardButton'>Recipe</button>
              //     </NavLink>

              // </div>
            )
          })
          :
          <h1>Data Not Found</h1>
      }
    </div>
  )
}


const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 290px;
    height: 390px;
    border-radius: 11px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 20px #bebebe, -10px -10px 10px #ffffff;
    ;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 280px;
    height: 380px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 11px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 1000px;
    border-radius: 20%;
    background-color: orange;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }`;

export default MealCard
