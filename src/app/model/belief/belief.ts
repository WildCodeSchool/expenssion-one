import { Divinity } from '../divinity/divinity';

export class Belief {
  constructor(
    readonly cult: string,
    readonly description: string,
    readonly url: string,
    readonly divinities: Divinity[]
  ) {}
}
