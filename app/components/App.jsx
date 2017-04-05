import React from 'react';
import React from 'uuid';
import Notes from './Notes';

const notes = [
	{
		id: uuid.v4(),
		task: 'Learn React'
	},
	{
		id: uuid.v4(),
		task: 'Do Laundry'
	}
];

export default () => (
	<div>
		<button onClick={() => console.log('add note')}>+</button>
		<Notes notes={notes} />
	</div>
);