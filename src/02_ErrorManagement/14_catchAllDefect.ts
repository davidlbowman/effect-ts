import { Cause, Console, Effect } from "effect"

const task = Effect.dieMessage("Boom!")

const program = Effect.catchAllDefect(task, (defect) => {
	if (Cause.isRuntimeException(defect)) {
		return Console.log(`RuntimeException defect caught ${defect.message}`)
	}
	return Console.log("Unknown defect caught.")
})

Effect.runPromiseExit(program).then(console.log)
