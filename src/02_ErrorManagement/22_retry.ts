import { Effect, Schedule } from "effect"

let count = 0

export const effect = Effect.async<string, Error>((resume) => {
	if (count <= 2) {
		count++
		console.log("failure")
		resume(Effect.fail(new Error()))
	} else {
		console.log("success")
		resume(Effect.succeed("yay!"))
	}
})

// Effect.runPromise(
// 	Effect.retry(
// 		effect,
// 		Schedule.addDelay(Schedule.recurs(5), () => 100),
// 	),
// )

const action = Effect.failSync(() => {
	console.log(`Action called ${++count} time(s)`)
	return `Error ${count}`
})

const program = Effect.retry(action, { until: (err) => err === "Error 3" })
Effect.runPromiseExit(program).then(console.log)
