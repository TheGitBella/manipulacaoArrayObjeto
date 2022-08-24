export interface Pet {
	id: number;
	name: string;
	type: string;
}

export interface Person {
	id: number;
	name: string;
	birthDate: string;
	money?: number;
	pets: Pet[];
}

export interface JsonDbType {
	people: Person[];
}
