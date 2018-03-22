import { ITeacher } from "../interfaces";

export class Teacher implements ITeacher {

	_id?: string;
	firstName: string;
	lastName: string;
	documentNumber: number;
	email: string;
	age: number;
	specialty: string;
	createdAt?: Date;

	constructor(
		firstName: string,
		lastName: string,
		documentNumber: number,
		email: string,
		age: number,
		specialty: string,
		createdAt?: Date
	) {
		this._id = '1';
		this.firstName = firstName;
		this.lastName = lastName;
		this.documentNumber = documentNumber;
		this.email = email;
		this.age = age;
		this.specialty = specialty;
		this.createdAt = createdAt;
	}
}