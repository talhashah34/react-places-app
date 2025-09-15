import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/54dcfcd7e4b0bdd45b3e2738/1734380078282-RDXO3QENDJXVFR1N9JS2/unsplash-image-z7NPKKXzY20.jpg?format=2500w',
    address: '20 W 34th St, New York, NY 10001',
    location : {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/54dcfcd7e4b0bdd45b3e2738/1734380078282-RDXO3QENDJXVFR1N9JS2/unsplash-image-z7NPKKXzY20.jpg?format=2500w',
    address: '20 W 34th St, New York, NY 10001',
    location : {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
]

const UserPlace = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId );
  
  return (
    <div>
      <PlaceList places={loadedPlaces} />
    </div>
  )
}

export default UserPlace
