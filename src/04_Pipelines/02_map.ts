import { Effect, pipe } from "effect"

const addServiceCharge = (amount: number): Effect.Effect<number, Error> =>
	amount < 0
		? Effect.fail(new Error("Amount cannot be negative"))
		: Effect.succeed(amount + 1)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(-1))
const finalAmount = pipe(fetchTransactionAmount, Effect.map(addServiceCharge))

Effect.runPromise(finalAmount).then(console.log)
