import React from 'react'
import { useParams } from 'react-router';
import PlacesList from '../components/PlacesList'

export default function UserPalces() {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Taj Mahal',
            description: 'Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world.',
            address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
            imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c3/53.jpg',
            location:{
                lag:27.8727292,
                lat:76.9927381
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Taj Mahal',
            description: 'Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world.',
            address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
            imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c3/53.jpg',
            location:{
                lag:27.8727292,
                lat:76.9927381
            },
            creator: 'u2'
        },
    ];
  
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (<PlacesList items={loadedPlaces}/>
  )
}
