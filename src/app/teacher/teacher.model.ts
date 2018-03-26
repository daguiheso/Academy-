import { ITeacher } from "../interfaces";
import { Subject } from "../subject/subject.model";

export class Teacher implements ITeacher {

	_id?: string;
	firstName: string;
	lastName: string;
	documentNumber: number;
	email: string;
	age: number;
	specialty: string;
	createdAt?: Date
	subjects?: Subject[];;

	constructor(
		firstName: string,
		lastName: string,
		documentNumber: number,
		email: string,
		age: number,
		specialty: string,
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
		this.specialty = specialty;
		this.createdAt = createdAt;
		this.subjects = subjects || [];
	}
}