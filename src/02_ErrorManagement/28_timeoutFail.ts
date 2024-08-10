import { Effect } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing...")
	yield* Effect.sleep(2000)
	console.log("Processing complete")
	return "Result"
})

class MyTimeoutError {
	readonly _tag = "MyTimeoutError"
}

const program = myEffect.pipe(
	Effect.timeoutFail({
		duration: 1000,
		onTimeout: () => new MyTimeoutError(),
	}),
)

Effect.runPromiseExit(program).then(console.log)
