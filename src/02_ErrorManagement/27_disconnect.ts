import { Effect } from "effect"

const longRunningTask = Effect.gen(function* () {
	console.log("Start heaving processing...")
	yield* Effect.sleep(5000)
	console.log("Heavy processing done.")
	return "Data processed"
})

const timedEffect = longRunningTask.pipe(
	Effect.uninterruptible,
	Effect.disconnect,
	Effect.timeout(1000),
)

Effect.runPromiseExit(timedEffect).then(console.log)
