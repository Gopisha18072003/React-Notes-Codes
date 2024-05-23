import { useEffect, useState } from "react";

export function useFetch(fetchFun, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);
// custom hooks must starts with use
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFun();
            setUserPlaces(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFun]);

      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}