import { Effect } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing...")
	yield* Effect.sleep(2000)
	console.log("Processing complete.")
	return "Result"
})

const timedOutEffect = Effect.all([
	myEffect.pipe(Effect.timeoutOption(3000)),
	myEffect.pipe(Effect.timeoutOption(1000)),
])

Effect.runPromise(timedOutEffect).then(console.log)
