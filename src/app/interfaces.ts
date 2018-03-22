
export interface IUser {
	_id?: string,
	firstName: string;
	lastName: string;
	documentNumber: number;
	email: string;
	age: number;
	createdAt?: Date;
}

export interface ITeacher extends IUser {
	specialty: string
}

export interface IStudent extends IUser {
	cell: number;
}

export interface ISubject {
	_id?: string;
	name: string;
	credits: number;
	dependency: boolean;
	createdAt?: Date;
}