import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Talha Raza',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      places: 3,
    }
  ];

  return (
      <UsersList items={USERS}/>
  )
}

export default Users
