import { ISubject } from "../interfaces";

export class Subject implements ISubject {
	constructor(
		public name: string,
		public credits: number,
		public dependency: boolean,
		public createdAt?: Date,
		public _id?: string
	) {
		this._id = _id;
		this.name = name;
		this.credits = credits;
		this.dependency = dependency;
		this.createdAt = createdAt;
	}
}