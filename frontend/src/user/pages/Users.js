import React from 'react';

import UsersList from '../components/UsersList.component';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Kung fu Panda boi',
			image: 'https://source.unsplash.com/random',
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
