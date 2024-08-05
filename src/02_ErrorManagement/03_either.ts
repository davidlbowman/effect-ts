import { Effect, Either } from "effect"
import { program } from "./01_errorTracking"

const recoveredVerbose = Effect.gen(function* () {
	const failureOrSucces = yield* Effect.either(program)
	if (Either.isLeft(failureOrSucces)) {
		const error = failureOrSucces.left
		return `Recovering from ${error._tag}`
	}

	return failureOrSucces.right
})

const recovered = Effect.gen(function* () {
	const failureOrSucces = yield* Effect.either(program)
	return Either.match(failureOrSucces, {
		onLeft: (error) => `Recovering from ${error._tag}`,
		onRight: (value) => value,
	})
})
