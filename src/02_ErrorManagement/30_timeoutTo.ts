import { Effect, Either } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing...")
	yield* Effect.sleep(2000)
	console.log("Processing complete.")
	return "Result"
})

const program = myEffect.pipe(
	Effect.timeoutTo({
		duration: 1000,
		onSuccess: (reuslt): Either.Either<string, string> => Either.right(reuslt),
		onTimeout: (): Either.Either<string, string> => Either.left("Timed out!"),
	}),
)

Effect.runPromiseExit(program).then(console.log)
