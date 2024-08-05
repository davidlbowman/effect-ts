import { Cause, Console, Effect, Option } from "effect"

const task = Effect.dieMessage("Boom!")

const program = Effect.catchSomeDefect(task, (defect) => {
	if (Cause.isIllegalArgumentException(defect)) {
		return Option.some(
			Console.log(
				`Caught an isIllegalArgumentException defect: ${defect.message}`,
			),
		)
	}
	return Option.none()
})

Effect.runPromiseExit(program).then(console.log)
