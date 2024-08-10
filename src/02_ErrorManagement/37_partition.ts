import { Effect } from "effect"

const program = Effect.partition([0, 1, 2, 3, 4], (n) => {
	if (n % 2 === 0) {
		return Effect.succeed(n)
	}

	return Effect.fail(`${n} is not even`)
})

Effect.runPromise(program).then(console.log, console.error)
