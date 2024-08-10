import { Effect } from "effect"

const myEffect = Effect.gen(function* () {
	console.log("Start processing...")
	yield* Effect.sleep(2000)
	console.log("Processing complete.")
	return "Result"
})

const timedEffect = myEffect.pipe(Effect.uninterruptible, Effect.timeout(1000))

Effect.runPromiseExit(timedEffect).then(console.log)
