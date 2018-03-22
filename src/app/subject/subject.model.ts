import { ISubject } from "../interfaces";

export class Subject implements ISubject {
	constructor(
		public _id: string,
		public name: string,
		public credits: number,
		public dependency: boolean,
		public createdAt?: Date
	) {
		this._id = '1';
		this.name = name;
		this.credits = credits;
		this.dependency = dependency;
		this.createdAt = createdAt;
	}
}