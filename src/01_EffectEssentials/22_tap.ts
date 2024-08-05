import { Effect, pipe } from "effect"

const applyDiscount = (
	total: number,
	discountRate: number,
): Effect.Effect<number, Error> =>
	discountRate === 0
		? Effect.fail(new Error("Discount rate cannot be zero"))
		: Effect.succeed(total - (total * discountRate) / 100)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const finalAmount = pipe(
	fetchTransactionAmount,
	Effect.tap((amount) =>
		Effect.sync(() => console.log(`Apply a discount to: ${amount}`)),
	),
	Effect.flatMap((amount) => applyDiscount(amount, 5)),
)

Effect.runPromise(finalAmount).then(console.log)
