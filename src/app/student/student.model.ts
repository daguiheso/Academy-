import { Subject } from "../subject/subject.model";

export class Student {

	_id?: string;
	firstName: string;
	lastName: string;
	documentNumber: number;
	email: string;
	age: number;
	createdAt?: Date;
	subjects: Subject[];

	constructor(
		firstName: string,
		lastName: string,
		documentNumber: number,
		email: string,
		age: number,
		createdAt?: Date
	) {
		this._id = '1';
		this.firstName = firstName;
		this.lastName = lastName;
		this.documentNumber = documentNumber;
		this.email = email;
		this.age = age;
		this.createdAt = createdAt;
		this.subjects = [];
	}
}