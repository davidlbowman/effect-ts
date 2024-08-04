import { Console, Effect, Fiber, Schedule } from "effect"

const program = Effect.repeat(Console.log("running..."), Schedule.spaced(100))

const fiber = Effect.runFork(program)

setTimeout(() => {
	Effect.runFork(Fiber.interrupt(fiber))
}, 500)
