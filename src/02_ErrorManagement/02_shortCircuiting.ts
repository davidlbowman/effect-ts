import { Console, Effect } from "effect"

const task1 = Console.log("Executing task1...")
const task2 = Effect.fail("Something went wrong!")
const task3 = Console.log("Executing task3...")

const program = task1.pipe(Effect.andThen(task2), Effect.andThen(task3))

Effect.runPromiseExit(program).then(console.log)
