import { Effect } from "effect"

const divide = (a: number, b: number): Effect.Effect<number> =>
	b === 0
		? Effect.die(new Error("Cannot divide by zero"))
		: Effect.succeed(a / b)

Effect.runSync(divide(1, 0))
