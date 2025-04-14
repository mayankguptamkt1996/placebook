import React from 'react'
import PlacesItem from './PlacesItem';
import './PlacesList.css'
import Card from '../../shared/UIelements/Card';
import Button from '../../shared/FormElements/Button';
const PlacesList = props => {
    if (props.items.length === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="place-list">
        {props.items.map(place => (
          <PlacesItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            onDelete={props.onDeletePlace}
          />
        ))}
      </ul>
    );
  };
  
  export default PlacesList;