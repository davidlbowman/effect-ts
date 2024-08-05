import { Cause, Console, Effect, Exit } from "effect"

const task = Effect.dieMessage("Boom!")

const program = Effect.gen(function* () {
	const exit = yield* Effect.exit(task)
	if (Exit.isFailure(exit)) {
		const cause = exit.cause
		if (Cause.isDieType(cause) && Cause.isRuntimeException(cause.defect)) {
			yield* Console.log(
				`isRuntimeException defect caught: ${cause.defect.message}`,
			)
		} else {
			yield* Console.log("Unknown defect caught.")
		}
	}
})

Effect.runPromiseExit(program).then(console.log)
