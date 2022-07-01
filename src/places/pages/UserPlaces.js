import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const MY_PLACES = [
  {
    id: 'p1',
    title: 'Ubud Yoga Centre',
    description: 'Hot yoga in Ubud',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0c/9a/ca/af/ubud-yoga-centre.jpg',
    address: 'Jl. Raya Singakerta No.108, Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia',
    location: {
     lat: -8.5286066,
     lng: 115.2545175
    },
    creator: 'u1'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = MY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
