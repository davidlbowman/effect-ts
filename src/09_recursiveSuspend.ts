import { Effect } from "effect"

const calculateFibonacci = (n: number): Effect.Effect<number, Error, never> => {
	if (n < 0) {
		return Effect.fail(new Error(`Invalid input: ${n} must be positive.`))
	}

	return n < 2
		? Effect.succeed(1)
		: Effect.zipWith(
				Effect.suspend(() => calculateFibonacci(n - 1)),
				Effect.suspend(() => calculateFibonacci(n - 2)),
				(a, b) => a + b,
			)
}

console.log(Effect.runSync(calculateFibonacci(32)))
