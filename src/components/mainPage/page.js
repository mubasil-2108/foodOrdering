import React, { useEffect } from 'react'
import MealCard from '../mealCard/page';
import { useHooks } from './hooks/page';
import Search from '../search/page';
import Loader from '../loader/page';

const MainPage = ({ windowSize }) => {
    const isMobile = windowSize.width < 768;
    const { category, msg, isLoading, searchFood, setSearch, searchResults } = useHooks();
    useEffect(() => {
        // Dynamically adjust the sliding animation based on the number of categories
        const categoryCount = category.length;
        const slideDuration = categoryCount * 5; // Adjust this value as needed for speed
        const root = document.documentElement;

        // Set dynamic styles for the categoryWrapper animation
        root.style.setProperty('--category-count', categoryCount);
        root.style.setProperty('--slide-duration', `${slideDuration}s`);
        if (searchResults && searchResults.length > 0) {
            document.body.style.backgroundColor = 'rgb(255, 255, 255)'; // White background
        } else {
            document.body.style.backgroundColor = 'rgb(255, 181, 42)'; // Default background
        }

    }, [category, searchResults]);
    return (
        <div style={{ background: searchResults ? 'rgb(255, 255, 255)' : 'rgb(255, 181, 42)' }}>
            <h1 className='headMain' style={{ fontSize: isMobile ? '' : '50px' }}>FOOD RECIPE APP</h1>
            <div className="container" style={{ padding: isMobile ? '10px' : '20px' }}>
                <div className='searchBar'>
                    <Search windowSize={windowSize} isLoading={isLoading} searchFood={searchFood} setSearch={setSearch} />
                </div>
            </div>
            <div>
                {
                    msg ?
                        <h3 className='head'>{msg}</h3>
                        :
                        !searchResults ?
                            <div className='categoryMain' style={{
                                marginTop: isMobile && -5
                            }}>
                                <div className="categoryWrapper"
                                    style={{
                                        width: isMobile && '100%',
                                        height: isMobile && '800px',
                                        flexDirection: isMobile && 'column',
                                        alignItems: isMobile && 'center',

                                    }}>
                                    {
                                        category.map((item) => {
                                            return (
                                                <div className='category' key={item.idCategory} style={{
                                                    backgroundImage: `url(${item.strCategoryThumb})`,
                                                    width: isMobile && '300px',
                                                    height: isMobile && '188px'

                                                }}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : isLoading ?
                                <Loader />
                                :
                                <MealCard mealDetail={searchResults} windowSize={windowSize} />

                }
                {/* {isLoading ?

                    
                } */}
            </div>
        </div>
    )

}

export default MainPage
