import { Effect } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing...")
	yield* Effect.sleep(2000)
	console.log("Processing complete.")
	return "Result"
})

const successfullyTimedEffect = myEffect.pipe(Effect.timeout(3000))
Effect.runPromiseExit(successfullyTimedEffect).then(console.log)

// const failedTimedEffect = myEffect.pipe(Effect.timeout(1000))
// Effect.runPromiseExit(failedTimedEffect).then(console.log)
