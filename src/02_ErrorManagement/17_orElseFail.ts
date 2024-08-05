import { Effect } from "effect"

class NegativeAgeError {
	readonly _tag = "NegativeAgeError"
	constructor(readonly age: number) {}
}

class IllegalAgeError {
	readonly _tag = "IllegalAgeError"
	constructor(readonly age: number) {}
}

const validate = (
	age: number,
): Effect.Effect<number, NegativeAgeError | IllegalAgeError> => {
	if (age < 0) return Effect.fail(new NegativeAgeError(age))
	if (age < 18) return Effect.fail(new IllegalAgeError(age))
	return Effect.succeed(age)
}

const program2 = Effect.orElseFail(validate(3), () => "invalid age")
const program3 = Effect.orElseFail(validate(3), () => 0)

console.log(Effect.runSync(validate(19)))
// console.log(Effect.runSync(program2))
console.log(Effect.runSync(program3))
