import { Effect, pipe } from "effect"

const addServiceCharge = (amount: number) => amount + 1
const applyDiscount = (
	amount: number,
	discountRate: number,
): Effect.Effect<number, Error> =>
	discountRate === 0
		? Effect.fail(new Error("Discount rate cannot be zero."))
		: Effect.succeed(amount + (amount * discountRate) / 100)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
const fetchDiscountRate = Effect.promise(() => Promise.resolve(5))

const calculateTotal = pipe(
	Effect.all([fetchTransactionAmount, fetchDiscountRate]),
	Effect.flatMap(([transactionAmount, discountRate]) =>
		applyDiscount(transactionAmount, discountRate),
	),
	Effect.map(addServiceCharge),
	Effect.map((finalAmount) => `Final amount to charge: $${finalAmount}`),
)

Effect.runPromise(calculateTotal).then(console.log)
