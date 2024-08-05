import { Effect, Random } from "effect"

class HttpError {
	readonly _tag = "HttpError"
}

class ValidationError {
	readonly _tag = "ValidationError"
}

const httpResult = Random.next.pipe(
	Effect.andThen((n1) =>
		n1 > 0.5 ? Effect.succeed("yay!") : Effect.fail(new HttpError()),
	),
)

const validationResult = Random.next.pipe(
	Effect.andThen((n2) =>
		n2 > 0.5 ? Effect.succeed("yay!") : Effect.fail(new ValidationError()),
	),
)

const program = Effect.all([httpResult, validationResult]).pipe(
	Effect.andThen(([http, validation]) => http + validation),
)
