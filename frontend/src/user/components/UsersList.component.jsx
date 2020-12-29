import React from 'react';

import UserItem from './UserItem.component';

const UsersList = (props) => {
	if (props.items.length === 0) {
		return (
			<div>
				<h2>No users found.</h2>
			</div>
		);
	}

	return (
		<div>
			{props.items.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					placeCount={user.places}
				/>
			))}
		</div>
	);
};

export default UsersList;
