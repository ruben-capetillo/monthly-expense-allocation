import { generate } from 'short-uuid';

export const roles = [
	{
		id: generate(),
		name: 'QA testers',
	},
	{
		id: generate(),
		name: 'Developers',
	},
	{
		id: generate(),
		name: 'Manager',
	},
	{
		id: generate(),
		name: 'SubManager',
	},
];
