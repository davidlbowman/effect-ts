import { Effect } from "effect"

const program = Effect.forEach([1, 2, 3, 4, 5], (n) => {
	if (n < 4) {
		return Effect.succeed(n)
	}

	return Effect.fail(`${n} is not less than 4`)
})

Effect.runPromise(program).then(console.log, console.error)
