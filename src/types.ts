export interface Pet {
	id: number;
	name: string;
	type: string;
	breed?: string;
	color?: string;
}

export interface Person {
	id: number;
	name: string;
	birthDate: string;
	money: number;
	country: string;
	pets: Pet[];
}

export interface JsonDbType {
	people: Person[];
}
