import { Effect, pipe } from "effect"

const applyDiscount = (
	total: number,
	discountRate: number,
): Effect.Effect<number, Error> =>
	discountRate === 0
		? Effect.fail(new Error("Discount rate cannnot be zero"))
		: Effect.succeed(total - (total * discountRate) / 100)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const result = pipe(
	fetchTransactionAmount,
	Effect.andThen((amount) => amount * 2),
	Effect.andThen((amount) => applyDiscount(amount, 5)),
)

Effect.runPromise(result).then(console.log)
