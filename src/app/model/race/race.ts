export class Race {
  constructor(
    readonly url: string,
    readonly name: string,
    readonly description: string,
    readonly racial_trait: string,
    readonly min_age: number,
    readonly max_age: number,
    readonly min_height: number,
    readonly max_height: number,
    readonly speed: number,
    readonly languages: string[],
    readonly number_additional_language: number
  ) {}
}
