import { Effect, Schedule } from "effect"

let count = 0

export const effect = Effect.async<string, Error>((resume) => {
	if (count <= 2) {
		count++
		console.log("failure")
		resume(Effect.fail(new Error()))
	} else {
		console.log("success")
		resume(Effect.succeed("yay"))
	}
})

const schedule = Schedule.fixed(100)

Effect.runPromise(Effect.retry(effect, { schedule, times: 5 }))
