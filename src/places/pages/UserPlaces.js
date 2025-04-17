import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlacesList from '../components/PlacesList'
import ErrorModal from '../../shared/UIelements/ErrorModal';
import LoadingSpinner from '../../shared/UIelements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPlaces = () => {
    const [loadedPlaces, setLoadedPlaces] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const userId = useParams().userId;
  
    useEffect(() => {
      const fetchPlaces = async () => {
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/places/user/${userId}`
          );
          setLoadedPlaces(responseData.places);
        } catch (err) {}
      };
      fetchPlaces();

    }, [sendRequest, userId]);
    
    const placeDeletedHandler = deletedPlaceId => {
      setLoadedPlaces(prevPlaces =>
        prevPlaces.filter(place => place.id !== deletedPlaceId)
      );
    };
  
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedPlaces && (
          <PlacesList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
        )}
      </React.Fragment>
    );
  };
  
  export default UserPlaces;
  
