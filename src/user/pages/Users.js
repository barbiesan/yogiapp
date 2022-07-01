import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Barbara Sol',
      image:
        'file:///Users/barbiesan/Desktop/documents/me.jpeg',
      places: 50
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
