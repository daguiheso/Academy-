import { IStudent } from "../interfaces";
import { Subject } from "../subject/subject.model";

export class Student implements IStudent {

	_id?: string;
	firstName: string;
	lastName: string;
	documentNumber: number;
	email: string;
	age: number;
	cell: number;
	createdAt?: Date;
	subjects?: Subject[];

	constructor(
		firstName: string,
		lastName: string,
		documentNumber: number,
		email: string,
		age: number,
		cell: number,
		createdAt?: Date,
		_id?: string,
		subjects?: Subject[]
	) {
		this._id = _id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.documentNumber = documentNumber;
		this.email = email;
		this.age = age;
		this.cell = cell;
		this.createdAt = createdAt;
		this.subjects = subjects || [];
	}
}