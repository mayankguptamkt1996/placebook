import React from 'react'
import PlacesItem from './PlacesItem';
import './PlacesList.css'
import Card from '../../shared/UIelements/Card';
export default function PlacesList(props) {
    if(props.items.length === 0)
        {
      return (
        <div className="place-list-center">
            <Card>
                <h2>No Places Found. Maybe Create One?</h2>
                <button>Share Place</button>
            </Card>
        </div>
        
      );
    }
    
    return(
        <ul className='place-list'>
            {props.items.map(places => (
            <PlacesItem key = {places.id}
            id = {places.id}
            title = {places.title}
            image = {places.imageUrl}
            description = {places.description}
            address = {places.address}
            createrId = {places.creator}
            coordinates = {places.location}
            />
            ))
            
            }
        </ul>
    )
}
