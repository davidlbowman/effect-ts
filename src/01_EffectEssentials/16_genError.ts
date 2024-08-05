import { Effect } from "effect"

const generateError = Effect.gen(function* () {
	console.log("Task1...")
	console.log("Task2...")
	yield* Effect.fail("Something went wrong!") // short-circuits Task3
	console.log("Task3...")
})

Effect.runPromiseExit(generateError).then(console.log)
