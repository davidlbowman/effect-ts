import { Effect } from "effect"

const program = Effect.sync(() => {
	console.log("Hello World!")
	return 1
})

const result = Effect.runSync(program)

console.log(result)
