import { Cause, Effect } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing.")
	yield* Effect.sleep(2000)
	console.log("Processing complete")
	return "Result"
})

const program = myEffect.pipe(
	Effect.timeoutFailCause({
		duration: 1000,
		onTimeout: () => Cause.die("Timed out!"),
	}),
)

Effect.runPromiseExit(program).then(console.log)
