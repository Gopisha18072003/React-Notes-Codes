import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from "../../http.js";

// we cannot make component function as async

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  // FETCHING THE DATA

  useEffect(() => {
    //  console.log("Sending request");
    // METHOD 1  >>>>>>>>>>>

    //   fetch("http://localhost:3000/places")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((resData) => {
    //       setAvailablePlaces(resData);
    //     });

    // METHOD 2 >>>>>>>>>>>>>
    async function fetchPlaces() {
      setIsFetching(true);
      try {
          const places = await fetchAvailablePlaces()
        
        // SORDING THE DATA BASED ON LOCATION

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })
       
      } catch (err) {
        setError({message: err.message || 'Could not fetch places, please try again later.'});
        setIsFetching(false);
      }

      
    }
    fetchPlaces();
  }, []);

  if(error) {
    return <Error title="An Error Occurred!" message={error.message}/>
  }
  return (
    <Places
      title="Available Places"
      loadingText="Fetching data"
      isLoading={isFetching}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
