import { useEffect, useState } from "react";


export function useHooks() {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState("")
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const Categories = async () => {
            const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
            let respose = await fetch(url);
            respose = await respose.json();
            if (respose) {
                setCategory(respose.categories);
            }
        }
        Categories();
    }, []);

    
    const searchFood = async () => {
        if (search === "") {
            setMsg("Please enter something to search");
        }
         else {
            setIsLoading(true);
            setMsg('');
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            let respose = await fetch(url);
            respose = await respose.json();
            if (respose) {
                setSearchResults(respose.meals);
                setIsLoading(false);
            }
        }
    }
    return {
        searchFood,
        searchResults,
        setSearch,
        isLoading,
        setIsLoading,
        msg,
        category,
        setMsg
    }
}

