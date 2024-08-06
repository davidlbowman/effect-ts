import { Effect } from "effect"

const success: Effect.Effect<number, Error> = Effect.succeed(42)
const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Uh oh!"))

const program1 = Effect.matchEffect(success, {
	onFailure: (error) =>
		Effect.succeed(`failure: ${error.message}`).pipe(Effect.tap(Effect.log)),
	onSuccess: (value) =>
		Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log)),
})

Effect.runPromise(program1).then(console.log)

const program2 = Effect.matchEffect(failure, {
	onFailure: (error) =>
		Effect.succeed(`failure: ${error.message}`).pipe(Effect.tap(Effect.log)),
	onSuccess: (value) =>
		Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log)),
})

console.log(Effect.runSync(program2))
