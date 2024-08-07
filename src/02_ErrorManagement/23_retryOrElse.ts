import { Console, Effect, Schedule } from "effect"
import { effect } from "./22_retry"

const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")

const repeated = Effect.retryOrElse(effect, policy, () =>
	Console.log("orElse").pipe(Effect.as("default value")),
)

Effect.runPromise(repeated).then(console.log)
