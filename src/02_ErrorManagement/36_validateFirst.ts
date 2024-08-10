import { Effect } from "effect"

const program = Effect.validateFirst([1, 2, 3, 4, 5], (n) => {
	if (n < 4) {
		return Effect.fail(`${n} is not less that 4`)
	}

	return Effect.succeed(n)
})

Effect.runPromise(program).then(console.log, console.error)
