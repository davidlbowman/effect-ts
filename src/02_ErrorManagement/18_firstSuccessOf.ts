import { Console, Effect } from "effect"

const success1 = Effect.succeed("success1")
const success2 = Effect.succeed("success2")
const failure1 = Effect.fail("failure1")
const failure2 = Effect.fail("failure2")

const program = Effect.firstSuccessOf([failure1, failure2, success1, success2])

Effect.runPromise(
	program.pipe(
		Effect.tap((result) => Console.log(`Result: ${result}`)),
		Effect.catchAll((error) => Console.log(`Error: ${error}`)),
	),
).then(() => {
	console.log("Program completed")
})
